const { exec, execSync } = require('child_process');
const path = require('path');


/**
 * The current working directory of `WindowsSpeechSynthesizer` subprocesses.
 *
 * @private
 * @since v1.0.0-alpha.4
 * @version 1.0.0-alpha
 *
 * @type {string}}
 */
const CWD = path.resolve(
    path.join(
        __dirname,
        "..",
        "lib",
        "net8.0"
    )
);


/**
 * The Windows Speech Synthesizer.
 */
class WindowsSpeechSynthesizer {
    /**
     * URI-encode a message.
     *
     * @private
     * @since v1.0.0-alpha.4
     * @version
     *
     * @param {string} message
     * The message to encode.
     * @returns {string}
     */
    static encodeMessage (message) {
        return encodeURIComponent(message);
    }

    /**
     * Speak a message.
     *
     * @public
     * @since v1.0.0-alpha
     * @version 1.0.0-alpha
     *
     * @param {string} message
     * The message to speak.
     * @returns {Promise<void>}
     */
    async speak (message) {
        message = WindowsSpeechSynthesizer.encodeMessage(message);

        const command = `tts "${message}"`;

        await exec(
            command,
            {
                cwd: CWD
            }
        );
    }


    /**
     * Speak a message.
     *
     * @public
     * @since v1.0.0-alpha
     * @version 1.0.0-alpha
     *
     * @param {string} message
     * The message to speak.
     * @return {void}
     */
    speakSync (message) {
        message = WindowsSpeechSynthesizer.encodeMessage(message);

        const command = `tts "${message}"`;

        execSync(
            command,
            {
                cwd: CWD
            }
        );
    }
}


module.exports = WindowsSpeechSynthesizer;
