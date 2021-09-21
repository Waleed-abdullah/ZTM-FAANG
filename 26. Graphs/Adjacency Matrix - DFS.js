const adjacencyMatrix = [
  [0, 1, 0, 1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0],
];

const traverseDFS = function (graph, vertex, values, seen = {}) {
  values.push(vertex);
  seen[vertex] = true;

  const connections = graph[vertex];
  for (let v = 0; v < connections.length; v++) {
    if (connections[v] > 0 && !seen[v]) {
      traverseDFS(graph, v, values, seen);
    }
  }
};

const values = [];

traverseDFS(adjacencyMatrix, 0, values);

console.log(values);
