var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();

recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

$output = $(".output");

$(".speech-listener").click(function() {
    console.log("listening");
    recognition.start();
});

recognition.onspeechend = function () {
  console.log("Im done :)");
  recognition.stop();
}

recognition.onresult = function(event) {
  console.log("I've found something :P");
  console.log(event.results);
  var speech = event.results[0][0].transcript;
  $output.html(speech);
}
recognition.onnomatch = function(event) {
  $output.innerHTML="I didn't recognise that color.";
}

recognition.onerror = function(event) {
  $output.innerHTML= 'Error occurred in recognition: ' + event.error;
}




/*******************************************************
                  Speech synthesis
 *****************************************************/
var synth = window.speechSynthesis;

var utterThis = new SpeechSynthesisUtterance("HELLO WORLD!");
var voices = [];
voices =  synth.getVoices();
synth.speak(utterThis);
for(var i = 0; i < voices.length; i++) {
  console.log(voices[i]);


}
