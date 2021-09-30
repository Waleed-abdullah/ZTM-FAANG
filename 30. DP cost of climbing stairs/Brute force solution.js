var minCostClimbingStairs = function (cost) {
  return minCost(cost.length, cost);
};

const minCost = function (i, cost) {
  if (i < 0) return 0;
  if (i === 0) return cost[0];
  if (i === 1) return cost[1];

  let currentCost = 0;
  if (i !== cost.length) currentCost = cost[i];

  return currentCost + Math.min(minCost(i - 1, cost), minCost(i - 2, cost));
};
