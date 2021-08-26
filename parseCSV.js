const fs = require('fs');
const generateJson = require('./generateJson.js');

const name = 'demo';

fs.readFile(`./data/${name}.csv`, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const origin = String(data);
  const lines = origin.split('\r\n').slice(1);
  const leafs = [];
  const nodes = [];
  lines.forEach((line) => {
    const cols = line.split(',');
    nodes.push(cols);
  });
  console.log(leafs, nodes);
  generateJson(nodes, name);
});
