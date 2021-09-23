const canFinish = function (n, prerequisites) {
  const adjList = new Array(n).fill(0).map(() => []);

  for (let i = 0; i < prerequisites.length; i++) {
    const pair = prerequisites[i];
    adjList[pair[1]].push(pair[0]);
  }

  console.log(adjList);
  for (let v = 0; v < n; v++) {
    const queue = [];
    const seen = {};
    for (let i = 0; i < adjList[v].length; i++) {
      queue.push(adjList[v][i]);
    }

    while (queue.length) {
      const current = queue.shift();
      seen[current] = true;

      if (current === v) return false;
      const adjacent = adjList[current];
      for (let i = 0; i < adjacent.length; i++) {
        const next = adjacent[i];
        if (!seen[next]) {
          queue.push(next);
        }
      }
    }
  }

  return true;
};
