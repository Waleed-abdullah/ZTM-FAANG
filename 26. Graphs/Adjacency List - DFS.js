const adjList = [
  [1, 3],
  [0],
  [3, 8],
  [0, 4, 5, 2],
  [3, 6],
  [3],
  [4, 7],
  [6],
  [2],
];

const traverseDFS = (graph, vertex, values, seen = {}) => {
  values.push(vertex);
  seen[vertex] = true;

  const connections = graph[vertex];
  for (let i = 0; i < connections.length; i++) {
    const connection = connections[i];
    if (!seen[connection]) {
      traverseDFS(graph, connection, values, seen);
    }
  }
};

const values = [];

traverseDFS(adjList, 0, values);

console.log(values);
