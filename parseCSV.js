const fs = require('fs');
const generateJson = require('./generateJson.js');
const mapData = require('./formatData');

const name = 'demo';

fs.readFile(`./data/${name}.csv`, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const origin = String(data);
  const lines = origin.split(/(\r?\n)/).slice(1);
  const nodes = [];
  lines.forEach((line) => {
    const cols = line.split(',');
    nodes.push(cols);
  });
  generateJson(nodes, name);
  generateJson(mapData(nodes), `${name}-format`);
});
