// cat dialogue
document.addEventListener("DOMContentLoaded", () => {
	const btn = document.getElementById("toggleBtn");
	const rect = document.getElementById("bottomRect");

	btn.addEventListener("click", () => {
		rect.classList.toggle("show");
	});
});

// toggle and door
const trigger = document.getElementById('toggleThing');
const door = document.getElementById('doorThing');

  trigger.addEventListener('click', function() {
    
    if (door.style.display === 'none' || door.style.display === '') {
      door.style.display = 'block';
    } else {
      door.style.display = 'none';
    }
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
  }

// background musica
  const audioBackground = document.getElementById('audio');

  document.addEventListener('click', () => {
    if (audioBackground.muted) {
      audioBackground.muted = false;
    }
    audioBackground.play();
  }, { once: true });
