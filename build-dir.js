const fs = require('fs');
const path = require('path');

const dirTree = (folder, originalFolder = folder) => {
    const stats = fs.lstatSync(folder);

    const name = path.basename(folder);

    if (name.substr(0, 1) === '.') {
        return null;
    }

    return {
        path: folder.replace(originalFolder, ''),
        name: path.basename(folder),
        type: stats.isDirectory() ? 'directory' : 'file',
        children: stats.isDirectory() ? fs.readdirSync(folder)
            .map((child) => dirTree(path.join(folder, child), originalFolder))
            .filter((file) => file !== null)
            : [],
    };
};

if (!fs.existsSync(path.join(__dirname, 'assets/'))) {
    fs.mkdirSync(path.join(__dirname, 'assets/'));
}

fs.writeFileSync(path.join(__dirname, 'assets/files.json'), JSON.stringify(dirTree(path.join(__dirname, 'files/'))));
