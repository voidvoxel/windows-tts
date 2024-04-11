const WindowsSpeechSynthesizer = require("../src");

const speechSynthesizer = new WindowsSpeechSynthesizer();

speechSynthesizer.speakSync("Hello, world!");
speechSynthesizer.speakSync("My name is Ashlynn.");

speechSynthesizer.speak("Nice to meet you.");
