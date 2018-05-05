/**
 * created by snowdrop on 2018/5/5
 */
const fs = require('fs');
const files = fs.readdirSync(__dirname + '/src/views');
console.log(files);
files.push('1');
console.log(files);