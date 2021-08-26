import data from './json/demo.json';
import { nanoid } from 'nanoid';

const nodes = data.slice(0);

function getChildren(node, nodes) {
  const childNodes = nodes.filter((item) => item[0] === node[1]);

  nodes = nodes.filter((item) => item[0] !== node[1]);

  const children = childNodes.map((item) => ({
    id: nanoid(),
    label: item[1],
    children: getChildren(item, nodes),
  }));

  return children;
}

const result = { id: nodes[0][1], label: nodes[0][1] };
console.log(getChildren(nodes[0], nodes), nodes[0]);
result.children = getChildren(nodes[0], nodes);

export default result;
