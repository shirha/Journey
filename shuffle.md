
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

The Freecell Solver stores the randomly sorted deck into a Tableau and transforms the cards to code points 65 thru 125. The bits for suit and rank are swap and bit 1 is set to 1.

(fig.3)
<table>
<tr><th>0<th>1<th>2<th>3<th>4<th>5<th>6<th>7
<tr><td>0<td>1<td colspan=2 align=center>suit<td colspan=4 align=center>rank
</table>
