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
