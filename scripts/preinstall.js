const fs = require('fs');
const appdir = require('../src/appdir');

if (fs.existsSync(appdir())) {
    fs.rmSync(
        appdir(),
        {
            force: true,
            recursive: true
        }
    );
}

fs.cpSync(
    "dist",
    appdir(),
    {
        recursive: true
    }
);
