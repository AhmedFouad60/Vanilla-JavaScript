//Add Event listener to the window 
window.addEventListener('keydown',playSound);


const keys= Array.from( document.querySelectorAll('.key') );

keys.forEach(key=> key.addEventListener('transitionend',removeTransation));

// The functions

function playSound(e){
  const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const sound=document.querySelector(`audio[data-key="${e.keyCode}"]`);
  //if the pressed key not in my Html
  if(!sound) return;

  //Add the animation to the key and play the sound
  key.classList.add('playing');
  sound.currentTime=0;
  sound.play();
}

function removeTransation(e){
  if(e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}
