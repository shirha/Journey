The Entry instances are stored in the position hash. They are created using the layout.

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


after sort

foundation: "Az"
cascades:  ["ETrSCBL","FgU}Dc","HZ]qaV","MfjGR{b","\\IuK[W","l|yiedX","mkhvJ","tsYQxw"]
token:     [4,0,1,3,6,0,5,2,4,7]


{"key":"Az ETrSCBL FgU}Dc HZ]qaV MfjGR{b \\IuK[W l|yiedX mkhvJ tsYQxw", "value":{"token":[4,0,1,3,6,0,5,2,4,7],"depth":0,"score":0,"node":[]}}
