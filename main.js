draw_apple=""
screen_width=0
screen_heigt=0

apple=""
speak_data=""
to_number=0

function preload(){
    apple=loadImage("https://static.wikia.nocookie.net/comida-y-bebidas/images/e/e1/Manzana.png/revision/latest/thumbnail/width/360/height/360?cb=20230202174540&path-prefix=es")

}

var SpeechRecognition = window.webkitSpeechRecognition;
 
var recognition = new SpeechRecognition();

recognition.onresult=function (event){

content=event.results[0][0].transcript

document.getElementById("status").innerHTML="Se reconocio la voz como="+content

 to_number= Number(content)

 if(Number.isInteger(to_number)){
document.getElementById("status").innerHTML="Se empezo a dibujar una manzana"

draw_apple="set"
 }

else{
document.getElementById("status").innerHTML="No se reconocio ningun numero"
}
}

function setup(){
    screen_width=window.innerWidth
    screen_heigt=window.innerHeight
    canvas=createCanvas(screen_width,screen_heigt-150)
    canvas.position(0,150)
}
function draw() {
    if(draw_apple == "set")
    {
      for(var i = 1 ; i <= to_number; i++)
      {
        x = Math.floor(Math.random() * 700);
        y = Math.floor(Math.random() * 400);
        image(apple, x, y, 50, 50);
      }
      document.getElementById("status").innerHTML = to_number + " manzanas dibujadas.";
      speak_data = to_number + " manzanas dibujadas.";
      speak();
      draw_apple = "";
    }
  }
  
  
  function speak(){
      var synth = window.speechSynthesis;
  
  
      var utterThis = new SpeechSynthesisUtterance(speak_data);
  
  
      synth.speak(utterThis);
  
  
      speak_data = "";
  }
  
