var toStr = function(rank, suit) {
    return rank ? ' A23456789TJQK' [rank] + 'DCHS ' [suit] : '  ';
  },
  msrank = function(i) {
    return Math.floor(i / 4);
  },
  mssuit = function(i) {
    var y = i % 4; // swap D & C
    return y === 0 ? 1 : y === 1 ? 0 : y;
  },
  fcrank = function(r) {
    return r & 15
  },
  fcsuit = function(s) {
    return s >> 4 & 3
  };

function shuffle(demo) {
  var seed = demo || Math.floor(Math.random() * 1000000000),
    gameno = seed,
    deck = [],
    i = 52,
    rand = function rand() {
      seed = (seed * 214013 + 2531011) % 2147483648;
      return seed >> 16;
    };
  for (var j = 0; j < 52; j++) {
    deck.push(j);
  }
  while (--i) {
    j = rand() % (i + 1);
    var tmp = deck[i];
    deck[i] = deck[j];
    deck[j] = tmp;
  }
  deck = deck.reverse();

  return {
    deck: deck,
    gameno: gameno
  };
}
