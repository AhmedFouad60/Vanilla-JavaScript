/** Get our elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

 /* build our functions */
function togglePlay() {
  const method = video.paused ? 'play' : 'pause'
  video[method]();
}
  
function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}
function handleRangeUpdate() {
  video[this.name] = this.value;
  console.log(this.value);
  console.log(this.name);
}
function handleProgress() {
  const percentage = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percentage}%`;
}
function scrub(e){
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video['currentTime'] = scrubTime;
}
 /** hock up the event listener */

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);

skipButtons.forEach(buttton => buttton.addEventListener('click', skip));

//Ranges
ranges.forEach(Range => Range.addEventListener('change', handleRangeUpdate));

//progress bar 
let mousedown = false;
video.addEventListener('timeupdate', handleProgress);
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

