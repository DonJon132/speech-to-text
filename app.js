const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const speechRecog = window.speechRecog || window.webkitspeechRecog;
const recog = new speechRecog();

recog.onstart = function(){
    console.log('voice is activated');
};

recog.onresult = function(event){
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};


btn.addEventListener('click', () => {
    recog.start();
});