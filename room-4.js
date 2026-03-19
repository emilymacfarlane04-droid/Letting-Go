// DRAGGING IMAGES //
const draggables = document.querySelectorAll(".draggable");

let current = null;
let offsetX = 0;
let offsetY = 0;

draggables.forEach(draggable => {
    draggable.addEventListener("mousedown", (event) => {
        event.preventDefault();

        current = draggable;
        offsetX = event.clientX - draggable.offsetLeft;
        offsetY = event.clientY - draggable.offsetTop;

        draggable.style.zIndex = 1000;
});
});

document.addEventListener("mousemove", (event) => {
    if (!current) return;

    current.style.left = `${event.clientX - offsetX}px`;
    current.style.top = `${event.clientY - offsetY}px`;
});

document.addEventListener("mouseup", () => {
    if (current) {
        current.style.zIndex = "";
    }
    current = null;
});

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("toggleBtn");
    const rect = document.getElementById("bottomRect");

    btn.addEventListener("click", () => {
        rect.classList.toggle("show");
    });
});

// door sound
function playSound(event) {
    event.preventDefault();

    var sound = document.getElementById("soundEffect");
    var link = document.getElementById("doorLink");
    
    sound.play();

    setTimeout(function(){
      window.location.href = link.href;
    }, 600);
  };

// background musica
  const audioBackground = document.getElementById('audio');

  document.addEventListener('click', () => {
    if (audioBackground.muted) {
      audioBackground.muted = false;
    }
    audioBackground.play();
  }, { once: true });
