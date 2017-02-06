The Entry instances are a key/value pair stored in the position hash. They are created using the ascii layout.

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

The foundation is sorted then joined('') and the indexes push to the token array. Next, the cascades are sorted and there indexes push to the token array also.

```
after sort

foundation: "Az"
cascades:  ["ETrSCBL","FgU}Dc","HZ]qaV","MfjGR{b","\\IuK[W","l|yiedX","mkhvJ","tsYQxw"]
token:     [4,0,1,3,6,0,5,2,4,7]
```

The foundation and cascades are joined('` `') together to form the Entry key and the token array is stored in the value object.

```
{"key":"Az ETrSCBL FgU}Dc HZ]qaV MfjGR{b \\IuK[W l|yiedX mkhvJ tsYQxw",
"value":{
  "token":[4,0,1,3,6,0,5,2,4,7],
  "depth":0,
  "score":0,
  "node":[]}
}
```

The Entry instance has now been created by the rest of it needs to be filled out before being store in the position hash.

NOTE. The elaborate effort to make an entry key is to help eliminate storing dup layouts in the positions hash. Now if two layouts are the same except maybe the columns are switched, one will be flagged as a duplicate and won't get stored.
