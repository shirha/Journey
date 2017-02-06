## Create an Entry Key

The Entry instances are a key/value pair stored in the position hash. They are created using the ascii layout.

(fig.1) ascii format of game #11853 after 1. TS f

```
z       A       
M E l F m \ H t 
f T | g k I Z s 
j r y U h u ] Y 
G S i } v K q Q 
R C e D J [ a x 
{ B d c   W V w 
b L X           
```

The freecells and homecells are gathered along with their indexes into the foundation and,
the cascades are also gathered with there indexes by column into the cascades.

```
before sort

foundation: [["z",0],["A",4]]
cascades:   [["MfjGR{b",0],["ETrSCBL",1],["l|yiedX",2],["FgU}Dc",3],["mkhvJ",4],["\\IuK[W",5],["HZ]qaV",6],["tsYQxw",7]]
token:      []
```

The foundation is sorted then joined('') and their indexes are push to the token array. Next, the cascades are sorted and their indexes are push to the token array also.

```
after sort

foundation: "Az"
cascades:  ["ETrSCBL","FgU}Dc","HZ]qaV","MfjGR{b","\\IuK[W","l|yiedX","mkhvJ","tsYQxw"]
token:     [4,0,1,3,6,0,5,2,4,7]
```

The foundation and cascades are joined('` `') together to form the Entry key and the token array is stored in the value object.

(fig.2) completed entry for 1.`TS f`.

```
"Az ETrSCBL FgU}Dc HZ]qaV MfjGR{b \\IuK[W l|yiedX mkhvJ tsYQxw": {
  "token":[4,0,1,3,6,0,5,2,4,7],
  "depth":1,
  "score":120,
  "node":[[4,6,0,0,"cf"],[3,7,4,0,"ach"]]
}
```

(fig.2) is a completely filled out entry instance stored in the position hash. The `node` shows the move that was made to achieve this layout from the original layout and the `score` associated with this layout .

NOTE. The elaborate effort to make an entry key is to help eliminate storing dup layouts in the positions hash. Now if two layouts are the same except maybe the columns are switched, one will be flagged as a duplicate and won't get stored.

The code `var entry = new Entry(tableau)` creates a key/value pair ready to store in the position hash and `var tableau = fromToken(entry)` will re-create the tableau by using the key and token to put it back together again.

[« It All Depends on the Star Routine](star.md) |[In Search of the Four Kings »](solution.md)


