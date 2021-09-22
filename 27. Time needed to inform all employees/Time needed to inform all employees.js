const numOfMinutes = function (n, headID, managers, informTime) {
  const graph = getAdjList(managers);
  const timeTaken = DFS(graph, headID, informTime);

  return timeTaken;
};

const DFS = function (graph, vertex, informTime) {
  const timeTaken = informTime[vertex];

  const subordinates = graph[vertex];
  let currTime = 0;
  let prevTime = 0;
  for (let i = 0; i < subordinates.length; i++) {
    vertex = subordinates[i];
    currTime = Math.max(DFS(graph, vertex, informTime, timeTaken), prevTime);
    prevTime = currTime;
  }

  return timeTaken + currTime;
};

const getAdjList = function (managers) {
  const adjList = new Array(managers.length).fill(0).map(() => new Array());

  for (let i = 0; i < managers.length; i++) {
    const manager = managers[i];

    if (manager === -1) continue;

    const subordinates = adjList[manager];
    subordinates.push(i);
  }

  return adjList;
};
