const fs = require('fs');
const path = require('path');

fs.cpSync(
    "bin",
    path.resolve(
        path.join(
            "dist",
            "bin"
        )
    ),
    {
        recursive: true
    }
);
