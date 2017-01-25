
## Microsoft Shuffle

https://jsfiddle.net/shirha/r0rq1L1b/

http://www.solitairelaboratory.com/mshuffle.txt

http://rosettacode.org/wiki/Linear_congruential_generator

The Microsoft deck byte layout is as follows. The suits occupy bits 6 and 7 and the order is Clubs, Diamonds, Hearts and Spades, The rank occupies bits 2 thru 5.  

(fig.1)
<table>
<tr><th>0<th>1<th>2<th>3<th>4<th>5<th>6<th>7
<tr><td>0<td>0<td colspan=4 align=center>rank<td colspan=2 align=center>suit
</table>

The deck begins with Aces and ends with Kings and occupies the first 52 ascii code points.

(fig.2)
<table>
<tr><th>0<th>1<th>2<th>3<th> <th>48<th>49<th>50<th>51
<tr><td>AC<td>AD<td>AH<td>AS<td>· · ·<td>KC<td>KD<td>KH<td>KS
</table>

The Freecell Solver stores the randomly sorted deck into a Tableau and transforms the cards to code points 65 thru 125. The bits for suit and rank are swap and bit 1 is set to 1 placing the deck in the displayable range of the ascii code points.

(fig.3)
<table>
<tr><th>0<th>1<th>2<th>3<th>4<th>5<th>6<th>7
<tr><td>0<td>1<td colspan=2 align=center>suit<td colspan=4 align=center>rank
</table>

(fig.4)
```
                                        ASCII code table

     suit   rank →  A    2    3    4    5    6    7    8    9    T    J    Q    K
     ↓  ....0000 0001 0010 0011 0100 0101 0110 0111 1000 1001 1010 1011 1100 1101
 64  D  0100....    A    B    C    D    E    F    G    H    I    J    K    L    M
 80  C  0101....    Q    R    S    T    U    V    W    X    Y    Z    [    \    ]
 96  H  0110....    a    b    c    d    e    f    g    h    i    j    k    l    m
112  S  0111....    q    r    s    t    u    v    w    x    y    z    {    |    }
```









