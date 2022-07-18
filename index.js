for(var i = 0; i < document.querySelectorAll(".drum").length; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    var whoTriggered = this.innerHTML;

    if (whoTriggered == '1'){
      var music = new Audio("sounds/crash.mp3");
      music.play();
    }
    if (whoTriggered == '2'){
      var music = new Audio("sounds/kick-bass.mp3");
      music.play();
    }
    if (whoTriggered == '3'){
      var music = new Audio("sounds/snare.mp3");
      music.play();
    }
    if (whoTriggered == '4'){
      var music = new Audio("sounds/tom-1.mp3");
      music.play();
    }
    if (whoTriggered == '5'){
      var music = new Audio("sounds/tom-2.mp3");
      music.play();
    }
    if (whoTriggered == '6'){
      var music = new Audio("sounds/tom-3.mp3");
      music.play();
    }
    if (whoTriggered == '7'){
      var music = new Audio("sounds/tom-4.mp3");
      music.play();
    }

    buttonAnimation(this.innerHTML)
  })


  document.addEventListener("keydown",function(event){

    var keyPresses = event.key;

    if (keyPresses == '1'){
      var music = new Audio("sounds/crash.mp3");
      music.play();
    }
    if (keyPresses == '2'){
      var music = new Audio("sounds/kick-bass.mp3");
      music.play();
    }
    if (keyPresses == '3'){
      var music = new Audio("sounds/snare.mp3");
      music.play();
    }
    if (keyPresses == '4'){
      var music = new Audio("sounds/tom-1.mp3");
      music.play();
    }
    if (keyPresses == '5'){
      var music = new Audio("sounds/tom-2.mp3");
      music.play();
    }
    if (keyPresses == '6'){
      var music = new Audio("sounds/tom-3.mp3");
      music.play();
    }
    if (keyPresses == '7'){
      var music = new Audio("sounds/tom-4.mp3");
      music.play();
    }

    buttonAnimation(event.key);


  })



 function buttonAnimation(trigger){

   var keyPressed = document.querySelector(".d"+trigger);

   keyPressed.classList.add("pressed");

   setTimeout(function(){
     keyPressed.classList.remove("pressed");
   }, 100)

 }

}
