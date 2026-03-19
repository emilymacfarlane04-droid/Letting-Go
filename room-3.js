document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("toggleBtn");
    const rect = document.getElementById("bottomRect");

    btn.addEventListener("click", () => {
        rect.classList.toggle("show");
    });
})

// background musica
  const audioBackground = document.getElementById('audio');

  document.addEventListener('click', () => {
    if (audioBackground.muted) {
      audioBackground.muted = false;
    }
    audioBackground.play();
  }, { once: true });