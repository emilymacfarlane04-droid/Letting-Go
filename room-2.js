document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("toggleBtn");
    const rect = document.getElementById("bottomRect");

    btn.addEventListener("click", () => {
        rect.classList.toggle("show");
    });
})

document.addEventListener('DOMContentLoaded', (event) => {
    const tvImgElement = document.getElementById('image-element2');
    const windowImg = document.getElementById('image-element1');

    if (tvImgElement) {
        tvImgElement.addEventListener('click', function(e) {
            playSoundAndChangeImage(e, 'broken tv.png');
        });
    }

    if (windowImg) {
        windowImg.addEventListener('click', function(e) {
            playSoundAndChangeImage(e, 'broken window.png');
        });
    }
});

function playSoundAndChangeImage(event, newSrc) {
    event.preventDefault();
    var sound = document.getElementById('soundEffect');
    var targetImg = event.target;

    if (sound) {
        sound.play();
    }
    
    if (targetImg) {
        targetImg.src = newSrc;
    } 
}

// door
  function playSound1(event) {
    event.preventDefault();

    var sound = document.getElementById("doorEffect");
    var link = document.getElementById("doorLink");
    
    sound.play();

    setTimeout(function(){
      window.location.href = link.href;
    }, 600);
  }

  // background musica
  const audioBackground = document.getElementById('audio');

  document.addEventListener('click', () => {
    if (audioBackground.muted) {
      audioBackground.muted = false;
    }
    audioBackground.play();
  }, { once: true });