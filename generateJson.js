const fs = require('fs');
const path = require('path');

module.exports = function (data, name = Date.now()) {
  content = JSON.stringify(data, null, '  ');

  const file = path.join(__dirname, `json/${name}.json`);

  fs.writeFile(file, content, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('done');
  });
};
