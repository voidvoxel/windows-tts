const { exec, execSync } = require('child_process');

class WindowsSpeechSynthesizer {
    async speak (message) {
        const command = `VoidVoxel.TextToSpeech.Platforms.Windows.Windows10 "${message}"`;

        await exec(
            command,
            {
                cwd: "bin\\net8.0"
            }
        );
    }

    speakSync (message) {
        const command = `VoidVoxel.TextToSpeech.Platforms.Windows.Windows10 "${message}"`;

        execSync(
            command,
            {
                cwd: "bin\\net8.0"
            }
        );
    }
}

module.exports = WindowsSpeechSynthesizer;
