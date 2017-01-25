
## Microsoft Shuffle

http://www.solitairelaboratory.com/mshuffle.txt

http://rosettacode.org/wiki/Linear_congruential_generator



The Microsoft deck byte layout is as follows. The suits occupy bits 6 and 7 and the order is Clubs, Diamonds, Hearts and Spades. The rank occupies bits 2 thru 5.  

(fig.1)
<table>
<tr><th>0<th>1<th>2<th>3<th>4<th>5<th>6<th>7
<tr><td>0<td>0<td colspan=4 align=center>rank<td colspan=2 align=center>suit
</table>

The deck begins with Aces and ends with Kings and occupies the first 52 ascii code points.

(fig.2)

| 0   | 1   | 2   | 3   | 4   |       | 47  | 48  | 49  | 50  | 51  |
| --- | --- | --- | --- | --- | ----- | --- | --- | --- | --- | --- |
| AC  | AD  | AH  | AS  | 2C  | · · · | QS  | KC  | KD  | kH  | KS  |

The Freecell Solver stores the randomly sorted deck into a Tableau and transforms the cards to code points 65 thru 125. The bits for suit and rank are swap and bit 1 is set to 1 placing the deck in the displayable range of the ascii code points. String keys for the Position hash are created with these bytes. Finally, the Clubs and Diamonds are swapped making the test

``` 
function oppositeColors (src, dst) {  
  return (src & 16) !== (dst & 16); 
}
```

instead of

``` 
function oppositeColors (src, dst) { 
  return (((src & 48) === 0 || (src & 48) === 48) && !((dst & 48) === 0 || (dst & 48) === 48);
}
```

Also note that now you can add 1 to the card and get the next card in the sequence instead of adding 4.

(fig.3)
<table>
<tr><th>0<th>1<th>2<th>3<th>4<th>5<th>6<th>7
<tr><td>0<td>1<td colspan=2 align=center>suit<td colspan=4 align=center>rank
</table>

(fig.4)
```
                                        ASCII code table

dec  suit   rank →  A    2    3    4    5    6    7    8    9    T    J    Q    K
     ↓  ....0000 0001 0010 0011 0100 0101 0110 0111 1000 1001 1010 1011 1100 1101
 64  D  0100....    A    B    C    D    E    F    G    H    I    J    K    L    M
 80  C  0101....    Q    R    S    T    U    V    W    X    Y    Z    [    \    ]
 96  H  0110....    a    b    c    d    e    f    g    h    i    j    k    l    m
112  S  0111....    q    r    s    t    u    v    w    x    y    z    {    |    }
```

https://jsfiddle.net/shirha/r0rq1L1b/


[Freecell Solver sprite sheet](https://github.com/shirha/freecell-mobile/blob/master/i/sheet.png)








