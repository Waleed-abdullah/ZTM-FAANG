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

const BFS = (graph) => {
  const queue = [0];
  const values = [];
  const seen = {};

  while (queue.length) {
    const vertex = queue.shift();
    values.push(vertex);
    seen[vertex] = true;

    const connections = graph[vertex];
    for (let v = 0; v < connections.length; v++) {
      const connection = v;

      if (connections[v] > 0 && !seen[connection]) {
        queue.push(connection);
      }
    }
  }
  return values;
};

BFS(adjacencyMatrix);
