import run from 'aocrunner';

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  let graph: { from: string; to: string }[] = [];

  // process input and make graph that lists for each node all the connected node
  const input = parseInput(rawInput)
    .split('\n')
    .map((x) => {
      let [from, to] = x.split('-');
      if (!graph[from]) {
        graph[from] = [];
      }
      if (!graph[to]) {
        graph[to] = [];
      }
      graph[from].push(to);
      graph[to].push(from);
      return { from, to };
    });
  console.log(graph);

  // function to check if cave is small
  function isSmallCave(string: string) {
    return string === string.toLowerCase();
  }

  // Depth First Search algorithm
  function depthFirstSearch(
    node: string,
    visited: string[],
    paths: string[] = [],
  ) {
    visited.push(node);
    if (node === 'end') {
      paths.push(visited.join(','));
      return;
    }
    for (const neighbour of graph[node]) {
      if (isSmallCave(neighbour) && visited.includes(neighbour)) {
        continue;
      }
      depthFirstSearch(neighbour, [...visited], paths);
    }
  }

  const paths: string[] = [];
  depthFirstSearch('start', [], paths);
  console.log(paths, paths.length);

  return paths.length;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return;
};

const testInput = `
  dc-end
  HN-start
  start-kj
  dc-start
  dc-HN
  LN-dc
  HN-end
  kj-sa
  kj-HN
  kj-dc
`;

run({
  part1: {
    tests: [
      {
        input: testInput,
        expected: 19,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
