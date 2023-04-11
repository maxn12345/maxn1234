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
  
  deal3() {
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

const hand1Display = document.getElementById('hand1');
const hand2Display = document.getElementById('hand2');
const tableDisplay = document.getElementById('table');

const dealHand1 = deck.deal3();
const dealHand2 = deck.deal3();
const dealTable = deck.deal4();

if (dealHand1.length > 0) {
  hand1Display.textContent = ``;
  for (let card of dealHand1) {
    const imgSrc = `images/${card.suit}${cardImages[card.value]}`;
    hand1Display.innerHTML += `<img src="${imgSrc}" alt="${card.value} of ${card.suit}s">`;
  }
} else {
  hand1Display.textContent = "There are no more cards in the deck.";
}

if (dealHand2.length > 0) {
  hand2Display.textContent = ``;
  for (let card of dealHand2) {
    const imgSrc = `images/${card.suit}${cardImages[card.value]}`;
    hand2Display.innerHTML += `<img src="${imgSrc}" alt="${card.value} of ${card.suit}s">`;
  }
} else {
  hand2Display.textContent = "There are no more cards in the deck.";
}

if (dealTable.length > 0) {
  tableDisplay.textContent = ``;
  for (let card of dealTable) {
    const imgSrc = `images/${card.suit}${cardImages[card.value]}`;
    tableDisplay.innerHTML += `<img src="${imgSrc}" alt="${card.value} of ${card.suit}s">`;
  }
} else {
  tableDisplay.textContent = "There are no more cards in the deck.";
}


