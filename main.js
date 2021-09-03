import data from './json/demo-format.json';
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
  modes: {
    default: ['collapse-expand', 'drag-canvas', 'zoom-canvas'],
  },
  layout: {
    type: 'compactBox',
    direction: 'LR',
    getId: function getId(d) {
      return d.id;
    },
    getHeight: function getHeight() {
      return 16;
    },
    getVGap: function getVGap(node) {
      return 300 / node.level;
    },
    getHGap: function getHGap() {
      return 100;
    },
    getWidth: function getWidth(d) {
      return G6.Util.getTextSize(d.id, fontSize)[0] + 20;
    },
  },
});

graph.edge((edge) => {
  return {
    id: edge.id,
    type: 'cubic-horizontal',
    style: {
      stroke: lineColors[edge.target],
    },
  };
});

graph.node((node) => {
  return {
    label: node.label,
    labelCfg: {
      offset: 10,
      position: node.children && node.children.length > 0 ? 'left' : 'right',
    },
    style: {
      fill: node.nodeColor,
      stroke: node.nodeColor,
      r: node.nodeSize,
    },
  };
});

graph.data(data);
graph.render();
graph.fitView();

if (typeof window !== 'undefined') {
  window.onresize = () => {
    if (!graph || graph.get('destroyed')) return;
    if (!container || !container.scrollWidth || !container.scrollHeight) return;
    graph.changeSize(container.scrollWidth, container.scrollHeight);
  };
}
