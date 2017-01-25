
## Microsoft Shuffle

https://jsfiddle.net/shirha/r0rq1L1b/

http://www.solitairelaboratory.com/mshuffle.txt

http://rosettacode.org/wiki/Linear_congruential_generator

Microsoft cards number from 0 to 51. There byte layout is as follows

<table>
<tr><th>0<th>1<th>2<th>3<th>4<th>5<th>6<th>7
<tr><td>0<td>0<td colspan=4 align=center>rank<td colspan=2 align=center>suit
</table>



This means the deck is order like this
<table>
<tr><th>0<th>1<th>2<th>3<th> <th>485<th>49<th>50<th>51
<tr><td>AC<td>AD<td>AH<td>AS<td>· · ·<td>KC<td>KD<td>KH<td>KS
</table>

