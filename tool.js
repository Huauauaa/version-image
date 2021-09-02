export function getColor(data, result) {
  result[data.id] = data.lineColor;
  for (let i = 0; i < data.children.length; i++) {
    getColor(data.children[i], result);
  }
}
let maxDepth = 0;
export function getMaxDepth(data) {
  if (maxDepth < data.level) {
    maxDepth = data.level;
  }
  for (let i = 0; i < data.children.length; i += 1) {
    getMaxDepth(data.children[i]);
  }

  return maxDepth;
}
