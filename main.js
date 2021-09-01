import data from './mapData';
import { getColor } from './tool';

import G6 from '@antv/g6';

const lineColors = [];
getColor(data, lineColors);

const fontSize = 15;

const container = document.getElementById('container');
const width = container.scrollWidth;
const height = container.scrollHeight || 500;
const graph = new G6.TreeGraph({
  container: 'container',
  width,
  height,
  linkCenter: true,
  modes: {
    default: [
      {
        type: 'collapse-expand',
        onChange: function onChange(item, collapsed) {
          const data = item.get('model');
          data.collapsed = collapsed;
          return true;
        },
      },
      'drag-canvas',
      'zoom-canvas',
    ],
  },
  defaultNode: {
    size: fontSize,
  },
  layout: {
    type: 'dendrogram',
    direction: 'LR',
    nodeSep: 20,
    rankSep: 100,
    radial: true,
  },
});

graph.edge((edge) => {
  return {
    id: edge.id,
    type: 'cubic-horizontal',
    // style: {
    //   stroke: lineColors[edge.target],
    // },
  };
});

graph.node(function (node) {
  return {
    label: node.id,
    // style: {
    //   fill: node.nodeColor,
    //   stroke: node.nodeColor,
    // },
  };
});

graph.data(data);
graph.render();
graph.fitView();

if (typeof window !== 'undefined')
  window.onresize = () => {
    if (!graph || graph.get('destroyed')) return;
    if (!container || !container.scrollWidth || !container.scrollHeight) return;
    graph.changeSize(container.scrollWidth, container.scrollHeight);
  };
