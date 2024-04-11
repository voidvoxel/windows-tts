const fs = require('fs');
const path = require('path');

function copyDirSync (directory) {
    fs.cpSync(
        directory,
        path.resolve(
            path.join(
                "dist",
                directory
            )
        ),
        {
            recursive: true
        }
    );
}

copyDirSync("lib");
copyDirSync("bin");
