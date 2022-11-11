console.log('Lodash is loaded:', typeof _ !== 'undefined');
/* result = deal 2 cards to each 4 players, declare winner by scoring their hand
create collection of 4 objects of players.
  each object of player should have key name and key hand.
create a deck of 52 cards, containing 13 ranks and 4 suits.
  declare new variable to hold 13 ranks.
  declare new variable to hold 4 suits.
  declare new variable to hold empty array for deck.
  create a for loop to go through the 13 ranks
    for each rank, create for loop to go through 4 suits.
    push each rank and suit as a property in an object to empty array for deck.
shuffle deck using lodash shuffle method. assign to new variable.
deal two cards with splice method and splice last two index of shuffled deck. assign to new variable.
create for loop to iterate through the 4 players and assign each hand with two cards via previous variable.
once hand is assigned, loop through players and players' hands and add values of both ranks. push to empty array.
use lodash max to find max number in array.
create one more for loop to compare max value and find matching array index. array index corresponds to players array index.
console log players name at index.
*/

var players = [
  {
    name: 'Gertrude Targaryen',
    hand: ''
  },
  {
    name: 'Egon Lannister',
    hand: ''
  },
  {
    name: 'Bertram Stark',
    hand: ''
  },
  {
    name: 'Deacon Baratheon',
    hand: ''
  }
];

var rank = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
var suit = ['clubs', 'diamonds', 'hearts', 'spades'];
var deck = [];
for (var i = 0; i < rank.length; i++) {
  for (var j = 0; j < suit.length; j++) {
    var card = {
      rank: rank[i],
      suit: suit[j]
    };
    deck.push(card);
  }
}

var shuffledDeck = _.shuffle(deck);

for (var k = 0; k < players.length; k++) {
  var dealTwoCards = shuffledDeck.splice(shuffledDeck.length - 2, 2);
  players[k].hand = dealTwoCards;
}

function getHandValue() {
  var handsArray = [];
  for (var l = 0; l < players.length; l++) {
    var handValue = 0;
    for (var m = 0; m < players[l].hand.length; m++) {
      if (players[l].hand[m].rank === 'Ace') {
        handValue += 11;
      } else if (players[l].hand[m].rank === 'Queen' || players[l].hand[m].rank === 'King' || players[l].hand[m].rank === 'Jack') {
        handValue += 10;
      } else {
        handValue += parseInt(players[l].hand[m].rank);
      }
    }
    handsArray.push(handValue);
  }
  return handsArray;
}
getHandValue();

var highestScore = _.max(getHandValue());

function winner() {
  for (var n = 0; n < getHandValue().length; n++) {
    if (getHandValue()[n] === highestScore) {
      console.log('Players are:', players);
      console.log('Scores of players are:', getHandValue());
      console.log('Winning Score is:', highestScore);
      console.log('Winning Player is:', players[n].name);
    }
  }
}
winner();
