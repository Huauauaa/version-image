const fs = require('fs');
const es = require('event-stream');
const generateJson = require('./generateJson');
const mapData = require('./formatData');

const name = process.argv.slice(2)[0] || 'demo';
const nodes = [];
fs.createReadStream(`./data/${name}.csv`)
  .pipe(es.split())
  .pipe(
    es
      .mapSync((line) => {
        const cols = line.split(',');
        nodes.push(cols);
      })
      .on('error', (err) => {
        console.error('error', err);
      })
      .on('end', () => {
        generateJson(mapData(nodes.slice(1)), `format-${Date.now()}`);
      }),
  );
