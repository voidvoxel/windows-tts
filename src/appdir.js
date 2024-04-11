const path = require('path');
const { homedir } = require('os');

const APP_DIRECTORY = path.resolve(
    path.join(
        homedir(),
        ".voidvoxel",
        "windows-tts"
    )
);

function appdir () {
    return APP_DIRECTORY;
}

module.exports = appdir;
