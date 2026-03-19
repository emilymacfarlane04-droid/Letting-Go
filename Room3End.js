 function playSound(event) {
    event.preventDefault();

    var sound = document.getElementById("soundEffect");
    var link = document.getElementById("doorLink");
    
    sound.play();

    setTimeout(function(){
      window.location.href = link.href;
    }, 600);
  }
