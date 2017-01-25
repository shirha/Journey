
## Microsoft Shuffle

https://jsfiddle.net/shirha/r0rq1L1b/

http://www.solitairelaboratory.com/mshuffle.txt

http://rosettacode.org/wiki/Linear_congruential_generator

There byte layout is as follows (fig.1) The suits occupy bit 6 and 7 and the order is Clubs, Diamonds, Hearts and Spades, The rank occupies bits 2 thru 5. The begins with Aces and ends with Kings (fig.2).

(fig.1)
<table>
<tr><th>0<th>1<th>2<th>3<th>4<th>5<th>6<th>7
<tr><td>0<td>0<td colspan=4 align=center>rank<td colspan=2 align=center>suit
</table>


(fig.2)
<table>
<tr><th>0<th>1<th>2<th>3<th> <th>48<th>49<th>50<th>51
<tr><td>AC<td>AD<td>AH<td>AS<td>· · ·<td>KC<td>KD<td>KH<td>KS
</table>

