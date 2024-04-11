const WindowsSpeechSynthesizer = require("../src");

function speakSync (message) {
    var speechSynthesizer = new WindowsSpeechSynthesizer();

    speechSynthesizer.speakSync(message);
}

if (process.argv.length < 1) {
    process.exit();
}

var message = process.argv[process.argv.length - 1];

speakSync(message);
