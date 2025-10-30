const suits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const deck = [];

for (let suit of suits) {
  for (let value of values) {
    let color = (suit === 'spade' || suit === 'clubs') ? 'black' : 'red';
    deck.push({
      cardSuit: suit,
      value: value,
      color: color
    });
  }
}

//  Знайти пікового туза
const spadeAce = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log("Піковий туз:", spadeAce);

//  Всі шістки
const sixes = deck.filter(card => card.value === '6');
console.log("Всі шістки:", sixes);

//  Всі червоні карти
const redCards = deck.filter(card => card.color === 'red');
console.log("Червоні карти:", redCards);

//  Всі бубни
const diamonds = deck.filter(card => card.cardSuit === 'diamond');
console.log("Бубни:", diamonds);

//  Всі трефи від 9 і більше
const highValues = ['9', '10', 'jack', 'queen', 'king', 'ace'];
const highClubs = deck.filter(card => card.cardSuit === 'clubs' && highValues.includes(card.value));
console.log("Трефи від 9 і більше:", highClubs);

console.table(sixes);
console.table(redCards);

