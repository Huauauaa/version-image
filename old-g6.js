import data from './json/demo-format.json';
import { getAttr, getMaxDepth } from './tool';

export default function () {
  const lineAttr = getAttr(data);
  const maxDepth = getMaxDepth(data);

  const width = document.getElementById('container').scrollWidth;
  const height = document.getElementById('container').scrollHeight || 500;
  const graph = new G6.TreeGraph({
    container: 'container',
    width,
    height,
    pixelRatio: 2,
    renderer: 'svg',
    modes: {
      default: ['collapse-expand', 'drag-canvas', 'zoom-canvas'],
    },
    defaultNode: {
      size: 26,
      anchorPoints: [
        [0, 0.5],
        [1, 0.5],
      ],
      style: {
        fill: '#C6E5FF',
        stroke: '#5B8FF9',
      },
    },
    defaultEdge: {
      shape: 'cubic-horizontal',
      style: {
        stroke: '#A3B1BF',
      },
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
      getWidth: function getWidth(...args) {
        return 16;
      },
    },
  });

  graph.edge((edge) => {
    const targetId = edge.target._cfg.id;

    return {
      id: edge.id,
      type: 'cubic-horizontal',
      style: {
        stroke: lineAttr[targetId].lineColor,
        lineWidth: maxDepth + 25 - lineAttr[targetId].level * 2.5,
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
        r: node.nodeSize || 10,
      },
    };
  });

  graph.data(data);
  graph.render();
  graph.fitView();

  function download() {
    graph.downloadImage();
  }
  document.querySelector('.type-select').style.display = 'none';
  document
    .querySelector('.download-button')
    .addEventListener('click', download);
}
