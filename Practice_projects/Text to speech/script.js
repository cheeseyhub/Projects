let speech = new SpeechSynthesisUtterance();

let button = document.querySelector("button");

let voices = [];
let voicesSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach(
    (voice, i) => (voicesSelect.options[i] = new Option(voice.name, i))
  );
};
voicesSelect.addEventListener("change", () => {
  speech.voice = voices[voicesSelect.value];
});
button.addEventListener("click", () => {
  speech.text = document.getElementById("text").value;
  window.speechSynthesis.speak(speech);
});
