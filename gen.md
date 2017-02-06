## Generate All Possible Moves

The `gen()` routine creates all the legal moves for a given layout and the `autoplay()` routines adds the cards that are safe to go home.  Safe autoplay means that you don't move up cards to the foundations if that card may still be needed in the tableau as a spot to park a lower ranked card on. The routine will not move a freecell to another freecell or a whole cascade column to another cascade column. Those moves are a waste of time. The routine also uses [supermoves](http://www.solitairelaboratory.com/fcfaq.html#Supermove).

```
#10913

·· ·· ·· ·· ·· ·· ·· ··
QS KH JD 8H QD TD 8S KD
TS KS JS AD 8D 4S 2C 7C
TH JC 5C 4D 9S QC TC 7H
8C 9C 3C 5H 2H 6H 9H 6C
7S AH KC 4H 7D 2S 4C 3S
3H JH 2D 5S 9D 6S 3D AS
6D 5D QH AC
```

Here are all the legal moves for the initial layout of game #10913.
 
``` 
[
[[0,7,0,0,"cf"],[3,7,5,0,"ach"],[7,6,7,0,"ach"]],
[[1,7,0,0,"cf"],[3,7,5,0,"ach"],[7,6,7,0,"ach"]],
[[1,7,5,7,"cc"],[3,7,5,0,"ach"],[7,6,7,0,"ach"]],
[[2,7,0,0,"cf"],[3,7,5,0,"ach"],[7,6,7,0,"ach"]],
[[3,7,5,0,"ch"],[7,6,7,0,"ach"]],
[[3,7,0,0,"cf"],[0,0,5,0,"afh"],[7,6,7,0,"ach"]],
[[4,6,0,0,"cf"],[3,7,5,0,"ach"],[7,6,7,0,"ach"]],
[[5,6,0,0,"cf"],[3,7,5,0,"ach"],[7,6,7,0,"ach"],[5,5,7,0,"ach"]],
[[6,6,0,0,"cf"],[3,7,5,0,"ach"],[7,6,7,0,"ach"]],
[[6,5,1,8,"cc"],[6,6,1,9,"cc"],[3,7,5,0,"ach"],[7,6,7,0,"ach"]],     /* 4C-3D → 5D; AC,AS */
[[7,6,7,0,"ch"],[3,7,5,0,"ach"]],
[[7,6,0,0,"cf"],[0,0,7,0,"afh"],[3,7,5,0,"ach"]]
]
```

Each move consists of an array of columns, rows, sources and destinations. e.g. the 4C-3D to the 5D look like this. Note the destination row is actually one above the stated card and counting rows from 0 which is the freecell and homecell row.

| src col | src row | dst col | dst row | id  | 
|:-------:|:-------:|:-------:|:-------:|:---:|
|   6     |    5    |    1    |    8    |'cc' |
|   6     |    6    |    1    |    9    |'cc' |
|   3     |    7    |    5    |    0    |'ach' |
|   7     |    6    |    7    |    0    |'ach' |

Note that autoplay moved the AC and the AS home. The `'cc'` and `'ach'` are the signatures of the code that generated the node. The codes are [c]olumn [e]mpty, [f]ree, [h]ome and [a]utoplay. 

[« The Tableau and its Helpers](tableau.md) | [It All Depends on the Star Routine »](star.md)

