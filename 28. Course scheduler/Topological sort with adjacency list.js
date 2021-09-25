//Time Complexity: O(p + n^2) Space Complexity: O(n^2) // n + E represents adjacency list E for edges n for number of arrays

const canFinish = function (n, preReq) {
  const inDegree = new Array(n).fill(0);
  const adjList = inDegree.map(() => []);

  for (let i = 0; i < preReq.length; i++) {
    const pair = preReq[i];
    inDegree[pair[0]]++;
    adjList[pair[1]].push(pair[0]);
  }

  const stack = [];

  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      stack.push(i);
    }
  }

  let count = 0;
  while (stack.length) {
    const current = stack.pop();
    count++;

    const adjacent = adjList[current];

    for (let i = 0; i < adjacent.length; i++) {
      const next = adjacent[i];
      inDegree[next]--;
      if (inDegree[next] === 0) {
        stack.push(next);
      }
    }
  }
  return count === n;
};
