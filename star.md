## It All Depends on the Star Routine

The Solver is a [breadth-first search](https://en.wikipedia.org/wiki/Breadth-first_search) so that the solutions are the shortest possible. 

an A‐star routine is used to trim the positions hash and only keep the layouts that scored the best (lowest). An A‐star routine should
measure the distance of the current layout to the solution. The Solver uses a simple algorithm.
* Start with a score of 64.
* Subtract the face value of every home card (max is 13x4=52).
* Subtract 1 for every empty freecell (max = 4)
* Subtract 1 for every empty column (max = 8)
* Add 1 for every sequence break in the columns
```javascript
var inSequence = (src, dst) => rank(src) + 1 == rank(dst) && (src & 16) !== (dst & 16)
```
* Add 1 for every <b>major</b> break in the columns
```javascript
var majorBreak = (src, dst) => rank(src) > rank(dst)
```

The `search()` begins by creating a `new Entry()` instance of the initial layout and storing it in the `position` hash and pushing that `Entry` onto the `stack` array. It then `gens()` all the legal moves that can be made to that layout and stores those new layout `Entries` onto the `nextstack` array. The `Entry` keys for these candidates are also `staged` in a hash if they do not represent a duplicate in either the `staged` hash or `position` hash and the layout `score` is not greater than the lowest 2000 scores staged already. 

When all the entries in the current `stack` have been processed, the `nextstack` entry are stored in the `position` hash and moved to the `stack` filtered by score so that the next `search()` can begin for every new `Entry` now on the `stack`. This continues until all the home cards are King's or the the search depth is greater then MAXDEPTH=50 or no more layouts can be generated from the `stack` that are not duplicates.


[« Create an Entry Key](entry.md) | [In Search of the Four Kings »](solution.md)

