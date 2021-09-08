export function getAttr(data, result = {}) {
  const { children, ...other } = data;
  result[data.id] = other;
  for (let i = 0; i < data.children.length; i++) {
    getAttr(data.children[i], result);
  }
  return result;
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
