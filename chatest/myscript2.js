const cardImages = {
    1: '1.png',
    2: '2.png',
    3: '3.png',
    4: '4.png',
    5: '5.png',
    6: '6.png',
    7: '7.png',
    8: '8.png',
    9: '9.png',
    10: '10.png',
  };
let playerHand1 = 0
let playerHand2 = 0
let table = 0 

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
      let counter = this.deck.length, temp, i;
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
  
  const suits = ['Sun', 'Sword', 'Cup', 'Baton'];
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const deck = new Deck();
  deck.createDeck(suits, values);
  deck.shuffle();
  
  const dealButton3 = document.getElementById('deal-btn');
  const dealButton4 = document.getElementById('deal-btn4');
  const dealButtonO = document.getElementById('deal-btno');
  const dealButton = document.getElementById('deal-btn');
  const cardDisplay1 = document.getElementById('card-display1');
  const cardDisplay2 = document.getElementById('card-display2');
  const cardDisplayt = document.getElementById('card-displayt');
  
while (playerHand1 < 1) {
    const cards = deck.deal1();
    if (cards.length > 0) {
        for (let card of cards) {
            const imgSrc = `images/${card.suit}${cardImages[card.value]}`;
            const cardButton = document.createElement('button');
            cardButton.innerHTML = `<img src="${imgSrc}" alt="${card.value} of ${card.suit}s">`;
            playerHand1 += 3;
            cardButton.addEventListener('click', () => {
            cardButton.remove();
            playerHand1 -= 1;
                });
            cardDisplay1.appendChild(cardButton);
                }
            }
    
    else {
        cardDisplay1.textContent = "There are no more cards in the deck.";
        break;
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
            cardButton.innerHTML = `<img src="${imgSrc}" alt="${card.value} of ${card.suit}s">`;
            cardButton.addEventListener('click', () => {
                cardButton.remove();
                table -= 1;
            });
            cardDisplayt.appendChild(cardButton);
        }
    }
    else {
        cardDisplayt.textContent = "There are no more cards in the deck.";
    }
}

if (playerHand2 <= 0) {
    playerHand2 += 3;
    const cards = deck.deal2();
    if (cards.length > 0) {
        cardDisplay2.textContent = ``;
        for (let card of cards) {
            const imgSrc = `images/${card.suit}${cardImages[card.value]}`;
            const cardButton = document.createElement('button');
            cardButton.innerHTML += `<img src="${imgSrc}" alt="${card.value} of ${card.suit}s">`;
            cardButton.addEventListener('click', () => {
                cardButton.remove();
                playerHand2 -= 1;
            });
            cardDisplay2.appendChild(cardButton);
        }
    }
    else {
        cardDisplay2.textContent = "There are no more cards in the deck.";
    }
}

  