#! /usr/bin/env node
var sharp = require('sharp')
var fs = require('fs');

const testFolder = './src/';

fs.readdirSync(testFolder).forEach(file => {
  // console.log(file);
    // .resize(436, 122)

  sharp('./src/' + file)
    .resize(140, 140)
    .background({r: 0, g: 0, b: 0, alpha: 0})    
    .embed()
    .toFile('./dist/' + file, function(err) {
      if (err) {
        console.log('err: ', err);
        console.log('file: ', file);
      }
    });
})

