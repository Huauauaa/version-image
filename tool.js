export function getColor(data, result) {
  result[data.id] = data.lineColor;
  for (let i = 0; i < data.children.length; i++) {
    getColor(data.children[i], result);
  }
}
