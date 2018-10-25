//code for this file heavily based on the following SO page
//https://stackoverflow.com/a/11194896
const fs = require('fs');
const path = require('path');
function dirTreeJSON(folder, origFolder=folder) {
	const stats = fs.lstatSync(folder)
	let info = {
		path: folder.replace(origFolder,''),
		name: path.basename(folder)
	}
	if (stats.isDirectory()) {
		info.type = 'folder';
		info.children = fs.readdirSync(folder).map(x=>dirTreeJSON(path.join(folder,x),origFolder))

	}
	else {
		info.type = 'file'
	}
	return info
}
module.exports = x => dirTreeJSON(x)