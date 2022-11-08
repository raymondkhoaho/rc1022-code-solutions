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
once hand is assigned, loop through players again and get add values of both hands.
*/

var players = [
  {
    name: 'player1',
    hand: ''
  },
  {
    name: 'player2',
    hand: ''
  },
  {
    name: 'player3',
    hand: ''
  },
  {
    name: 'player4',
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

// for (var l = 0; l < players.length; l++) {

// }
