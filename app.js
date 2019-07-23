const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const greetings = ['Im good you fucker', 'the fuck is up dude', 'okay rako nano man'];

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();


recognition.onstart = function(){
    console.log('voice is activated');  
};

recognition.onresult = function(event){
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    ReadOutLoud(transcript);
};


btn.addEventListener('click', () => {
    recognition.start();
});

function ReadOutLoud(message){
    const speech = new SpeechSynthesisUtterance();

    if(message.includes('how are you')){
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }
    else{
        speech.text = message;
    }
    
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    
    window.speechSynthesis.speak(speech);
}