# 🎄 Advent of Code 2021 - day 12 🎄

## Info

Task description: [link](https://adventofcode.com/2021/day/12)

## Notes

...

- map input to object [from, to]
- function to check if cave is small
- create a data structure that lists all caves connected to each
- implement depth first search https://en.wikipedia.org/wiki/Depth-first_search#Pseudocode

procedure DFS(G, v) is
label v as discovered
for all directed edges from V to w that are in G. adjacentEdges(v) do
if vertex w is not labeled as discovered then
recursively call DFS(G, w)
