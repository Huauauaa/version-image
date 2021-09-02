const { nanoid } = require('nanoid');

function getChildren(node, nodes, level) {
  level += 1;
  const childNodes = nodes.filter((item) => item[0] === node[1]);

  nodes = nodes.filter((item) => item[0] !== node[1]);

  const children = childNodes.map((item) => {
    const [, label, lineColor, nodeColor] = item;
    return {
      id: nanoid(),
      label,
      lineColor,
      nodeColor,
      level,
      children: getChildren(item, nodes, level),
    };
  });

  return children;
}

module.exports = function (data) {
  const nodes = data.slice(0);
  let level = 1;
  const [, label, lineColor, nodeColor] = nodes[0];
  const result = {
    id: nanoid(),
    label: label,
    lineColor,
    nodeColor,
    level,
  };

  result.children = getChildren(nodes[0], nodes, level);
  return result;
};
