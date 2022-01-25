window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.continuous = false;
recognition.maxAlternatives = 1;
const transcript_element = document.getElementById("transcript");
const talk_button = document.getElementById("start");
const end_button = document.getElementById("end");
const speak_button = document.getElementById("speak")



recognition.lang = 'pt-Br'
// recognition.lang = 'en-US'




let windowsB = []


let p = document.createElement("p");
transcript_element.appendChild(p);







// COMMANDS 


recognition.addEventListener("result", (e) =>{
    const transcript = Array.from(e.results)
    .map(result => result [0])
    .map(result => result.transcript)
    .join("");
    p.textContent = transcript;
    if(e.results[0].isFinal){
        p = document.createElement("p")
        p.textContent = transcript;
        transcript_element.appendChild(p);
        p.textContent = "";
        

        if(transcript.includes("White mode")){
            document.body.style.backgroundColor = '#33cc99';
            readOut("Aplicando white mode")
        } 
        if(transcript.includes("chess")){
            window.open('https://www.chess.com/live')
        }
        
        if(transcript.includes("Olá, Friday")) {
            readOut("Ola Senhor")
            readOut("Como posso ajudar ?")
        }

        if(transcript.includes("Qual é o meu nome?")) {
            readOut("Seu nome é Joel ")
        }

        if(transcript.includes("Você tem irmãos ou irmãs?")) {
            readOut("Não que eu saiba ")
        }
        if(transcript.includes("Qual é seu nome")) {
            readOut("Meu nome é friday, Prazer em conversar com voce. ")
        }
        if(transcript.includes("Qual sua pessoa favorita no mundo ?")) {
            readOut("John McCarthy, Primeiro criador de Inteligencias artificiais.   ")
        }
        
        if(transcript.includes("Qual seu esporte favorito ?")) {
            readOut("Eu nao tenho preferencia ")
        }
        

        if(transcript.includes("Fechar janela")) {
            readOut("fechando janela")
            windowsB.forEach((e) => {
                e.close()
            })
        }
     

        if(transcript.includes("YouTube") ){
            readOut("Abrindo o youtube")
          let b =   window.open('https://www.youtube.com/')
            windowsB.push(b)
            
        }
        if(transcript.includes("Google")){
            readOut("Abrindo o Google")
          let a =  window.open('https://www.google.com/')
          windowsB.push(a)
        }
        if(transcript.includes("Facebook")){
            readOut("Abrindo Facebook")
            window.open('https://www.facebook.com/')
        }

        if(transcript.includes("linkedin")){
            readOut("Abrindo Linkedin")
            let a = window.open('https://www.linkedin.com/feed/')
            windowsB.push(a)
        }

        if(transcript.includes("Instagram")){
            readOut("Abrindo  instagram")
            let a =   window.open('https://www.instagram.com/')
            windowsB.push(a)
        }

         if(transcript.includes("Twitch")  || transcript.includes("twitch")){
            readOut("Abrindo Twitch")
            let a =   window.open('https://www.twitch.tv/gaules')
            windowsB.push(a)
        }

        if(transcript.includes("Câmera") || transcript.includes("camera")){
            let a =  window.open('./arq/Camera.html')
            windowsB.push(a)
        }

        if(transcript.includes("Twitter")){
            window.open('https://twitter.com/home')
            readOut("Abrindo Twitter")
        }
        
        if (transcript.includes("música") || transcript.includes("musica" ) )  {
            window.open('https://www.youtube.com/watch?v=pAgnJDJN4VA&ab_channel=acdcVEVO')
        }
        
        if(transcript.includes("Dark")){
            document.body.style.backgroundColor = '#047751';
            readOut("Aplicando modo dark ")
        } 
        
       
         
          
        
        // google search



        if(transcript.includes("Search for") || transcript.includes("Buscar por")   ) {
        readOut("aqui está o resultado")
        let input = transcript.split("")
        input.splice(0,11)
        input.pop()
        input = input.join("").split("").join("+")
        console.log(input)
        window.open(`https://www.google.com/search?q=${input}`)
        }
       
        // youtube search 
        
        if(transcript.includes("Pesquise por ") || transcript.includes("Pesquise for ") || transcript.includes("Play four") ) {
            readOut("aqui está o resultado")
            let input = transcript.split("")
            input.splice(0,11)
            input.pop()
            input = input.join("").split("").join("+")
            console.log(input)
            window.open(`https://www.youtube.com/results?search_query=${input}`)
            }



    




        
        
    }

    



});






function readOut(message){
    const speech = new SpeechSynthesisUtterance()
    const allVoices = speechSynthesis.getVoices()
    
    speech.text = message;
    speech.voice = allVoices[60];
    speech.volume = 1
    window.speechSynthesis.speak(speech)
    console.log("Speeak out")
}




// news setup 





speak_button.addEventListener("click" ,() => {
    readOut("Qual o meu nome ? ")
})



// recognition.addEventListener("end", ()=>{
//     end_button.disabled = false;
//     talk_button.disabled = false;
// });
talk_button.addEventListener("click", () =>{
    // end_button.disabled = false;
    // talk_button.disabled = true;
    recognition.start();
});
// end_button.addEventListener("click", () => {
//     end_button.disabled =  true;
//     talk_button.disabled = false;
//     recognition.stop();
// });

