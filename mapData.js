import data from './json/demo.json';
import { nanoid } from 'nanoid';

const nodes = data.slice(0);

function getChildren(node, nodes) {
  const childNodes = nodes.filter((item) => item[0] === node[1]);

  nodes = nodes.filter((item) => item[0] !== node[1]);

  const children = childNodes.map((item) => {
    const [, label, lineColor, nodeColor] = item;
    return {
      id: nanoid(),
      label,
      lineColor,
      nodeColor,
      children: getChildren(item, nodes),
    };
  });

  return children;
}
const [, label, lineColor, nodeColor] = nodes[0];
const result = {
  id: nanoid(),
  label: label,
  lineColor,
  nodeColor,
};
result.children = getChildren(nodes[0], nodes);

export default result;
