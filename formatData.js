const { nanoid } = require('nanoid');

function getChildren(node, nodes, level) {
  level += 1;
  const childNodes = nodes.filter((item) => item[0] === node[1]);

  nodes = nodes.filter((item) => item[0] !== node[1]);

  const children = childNodes.map((item) => {
    const [, name, size, line, node] = item;
    return {
      id: nanoid(),
      label: name,
      lineColor: line,
      nodeColor: node,
      nodeSize: Number(size),
      level,
      children: getChildren(item, nodes, level),
    };
  });

  return children;
}

module.exports = function (data) {
  const nodes = data.slice(0);
  let level = 1;
  const [, name, size, line, node] = nodes[0];
  const result = {
    id: nanoid(),
    label: name,
    lineColor: line,
    nodeColor: node,
    nodeSize: Number(size),
    level,
    children: getChildren(nodes[0], nodes, level),
  };

  return result;
};
