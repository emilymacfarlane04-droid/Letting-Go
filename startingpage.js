// background musica
  const audioBackground = document.getElementById('audio');

  document.addEventListener('click', () => {
    if (audioBackground.muted) {
      audioBackground.muted = false;
    }
    audioBackground.play();
  }, { once: true });