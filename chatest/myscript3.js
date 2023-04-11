const cardImages = {
    1: "1.png",
    2: "2.png",
    3: "3.png",
    4: "4.png",
    5: "5.png",
    6: "6.png",
    7: "7.png",
    8: "8.png",
    9: "9.png",
    10: "10.png"
  };
  
  let playerHand1 = 0;
  let playerHand2 = 0;
  let table = 0;
  
  let cardSwap1 = null
  let cardSwap2 = null

  idSwap1 = 0
  idSwap2 = null

  remove = 0



  class Card {
    constructor(suit, value) {
      this.suit = suit;
      this.value = value;
    }
  }
  
  class Deck {
    constructor() {
      this.deck = [];
    }
  
    createDeck(suits, values) {
      for (let suit of suits) {
        for (let value of values) {
          this.deck.push(new Card(suit, value));
        }
      }
      return this.deck;
    }
  
    shuffle() {
      let counter = this.deck.length,
        temp,
        i;
      while (counter) {
        i = Math.floor(Math.random() * counter--);
        temp = this.deck[counter];
        this.deck[counter] = this.deck[i];
        this.deck[i] = temp;
      }
      return this.deck;
    }
  
    deal1() {
      return this.deck.splice(-3);
    }
  
    deal2() {
      return this.deck.splice(-3);
    }
  
    deal4() {
      return this.deck.splice(-4);
    }
  }
  
  const suits = ["Sun", "Sword", "Cup", "Baton"];
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const deck = new Deck();
  deck.createDeck(suits, values);
  deck.shuffle();
  
  const cardDisplay1 = document.getElementById("card-display1");
  const cardDisplay2 = document.getElementById("card-display2");
  const cardDisplayt = document.getElementById("card-displayt");
  
const gameLoop = () => {

    if (playerHand1 < 1) {
      const cards = deck.deal1();
      if (cards.length > 0) {
        for (let card of cards) {
          const imgSrc = `images/${card.suit}${cardImages[card.value]}`;
          const cardButton = document.createElement("button");
          cardButton.innerHTML = `<img class="hide" onClick="clicked(this)" src="${imgSrc}" id="${card.value}" alt="${card.value} of ${card.suit}s">`;
          playerHand1++;
          gameLoop();
          cardDisplay1.appendChild(cardButton);
        }
      } else {
        cardDisplay1.textContent = "There are no more cards in the deck.";
      }
    }
  
    if (playerHand2 <= 0) {
      const cards = deck.deal2();
      if (cards.length > 0) {
        cardDisplay2.textContent = ``;
        for (let card of cards) {
            const imgSrc = `images/${card.suit}${cardImages[card.value]}`;
            const cardButton = document.createElement("button");
            cardButton.innerHTML += `<img src="${imgSrc}" id="${card.value}" alt="${card.value} of ${card.suit}s">`;
            cardDisplay2.appendChild(cardButton);        
            playerHand2++;
            gameLoop();
        }
      } else {
        cardDisplay2.textContent = "There are no more cards in the deck.";
      }
    }
    
    if (table < 1) {
        table += 4;
        const cards = deck.deal4();
        if (cards.length > 0) {
            cardDisplayt.textContent = ``;
            for (let card of cards) {
                const imgSrc = `images/${card.suit}${cardImages[card.value]}`;
                const cardButton = document.createElement('button');
                cardButton.innerHTML = `<img class="show" onClick="clicked(this)" src="${imgSrc}" id="${card.value}" alt="${card.value} of ${card.suit}s">`;
                table++;
                gameLoop();
                cardDisplayt.appendChild(cardButton);
                }
                }

        else {
            cardDisplayt.textContent = "There are no more cards in the deck.";
        }
    }

    }
gameLoop();
  

function clicked(card) {
    //cardSwap1
    if(cardSwap1 === null) {
        // Get the element by ID
        const myDiv = document.getElementById('card-display1');
        card.className = "show";
        // Add a click event listener to the element
        myDiv.addEventListener('click', function(event) {
        // Get the ID of the element that was clicked
        idSwap1 = event.target.id;
        console.log(idSwap1)
        checkMatch()
        });
    }
    if(cardSwap2 === null) {
        // Get the element by ID
        const myDiv = document.getElementById('card-displayt');
        card.className = "show";
        // Add a click event listener to the element
        myDiv.addEventListener('click', function(event) {
        // Get the ID of the element that was clicked
        idSwap2 = event.target.id;
        console.log(idSwap2)
        });
        checkMatch()
    }
}


function checkMatch() {
    // See if cardSwap1 is the same as cardSwap2
    if (idSwap1 == idSwap2) {
      console.log("match");
      // Remove matching cards
      const card1 = document.getElementById(idSwap1);
      const card2 = document.getElementById(idSwap2);
      card1.parentNode.removeChild(card1);
      card2.parentNode.removeChild(card2);
    }
  }
  


