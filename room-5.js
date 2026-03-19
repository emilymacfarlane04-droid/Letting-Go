const myClock = document.getElementById('myClock');
const clockImg = myClock.querySelector('img');

let scale = 1;
let lastIndex = -1;

const images = [
	'clock-1.PNG', 
	'clock-2.PNG', 
	'clock-3.PNG', 
	'clock-4.PNG', 
	'clock-5.PNG'
];

myClock.addEventListener('click', function() {
	if (scale < 16){
	scale += 1;
}
	clockImg.style.transform = `scale(${scale})`;

	let imgIndex;
	  do {
	    imgIndex = Math.floor(Math.random() * images.length);
	  } while (imgIndex === lastIndex);

  lastIndex = imgIndex;
  clockImg.src = images[imgIndex];
  
	if (scale === 16) {
			clockImg.style.filter = 'brightness(0) invert(1)';

			setTimeout(() => {
			window.location.href = 'rm5-quote.html';
		}, 700);
	}
});

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("toggleBtn");
    const rect = document.getElementById("bottomRect");

    btn.addEventListener("click", () => {
        rect.classList.toggle("show");
    });
});

// background musica
  const audioBackground = document.getElementById('audio');

  document.addEventListener('click', () => {
    if (audioBackground.muted) {
      audioBackground.muted = false;
    }
    audioBackground.play();
  }, { once: true });
