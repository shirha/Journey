var mssuit = (i) => {
    var y = i % 4; // swap D & C
    return y === 0 ? 1 : y === 1 ? 0 : y;
  },
  msrank = (i) => i >> 2,
  suit = (s) => s >> 4 & 3,
  rank = (r) => r & 15,
  toStr = (rank, suit) => rank ? ' A23456789TJQK' [rank] + 'DCHS ' [suit] : '  ';

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

function message(tableau, sep = '<br>') {
  var msg, flag, r, c, card, n;
  for (msg = "", flag = true, r = 0; flag;) {
    r > 0 && (flag = false);
    for (c = 0; c < 8; c++) {
      n = tableau[c][r],
      card = toStr(rank(n), suit(n)), 
      card != "  " && (flag = true), 
      msg += card + " ";
    }
    msg += sep, r++;
  }
  return msg;
}
