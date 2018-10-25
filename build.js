const {readFileSync, writeFileSync} = require('fs');
const {join} = require('path');
const dirTree = require('./dirTree');

const vue = readFileSync(join(__dirname, 'node_modules/vue/dist/vue.min.js'));

writeFileSync(join(__dirname, 'gen/vue.js'), vue);

const tree = JSON.stringify(dirTree(__dirname));
writeFileSync(join(__dirname, 'gen/tree.js'), 'window.tree = '+tree)
