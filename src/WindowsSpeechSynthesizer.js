const { exec, execSync } = require('child_process');
const appdir = require('./appdir');
const path = require('path');

const cwd = path.resolve(
    path.join(
        __dirname,
        "..",
        "lib",
        "net8.0"
    )
);

class WindowsSpeechSynthesizer {
    async speak (message) {
        const command = `tts "${message}"`;

        await exec(
            command,
            {
                cwd
            }
        );
    }

    speakSync (message) {
        const command = `tts "${message}"`;

        execSync(
            command,
            {
                cwd
            }
        );
    }
}

module.exports = WindowsSpeechSynthesizer;
