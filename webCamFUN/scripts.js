const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  navigator.mediaDevices.getUserMedia({
    video:true,audio:false
  }).then(localMediaStream => {
    video.src = window.URL.createObjectURL(localMediaStream);
    video.play();
    console.log(localMediaStream);
    })
    .catch(err => {
      console.error()
    });
}
function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;
  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
  },16);


}
function takePhoto() {
  //play the sound 
  snap.currentTime = 0;
  snap.play();
  //Take the data out of the canvas
  const data = canvas.toDataURL('/image/jepg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'handsome');
  strip.insertBefore(link, strip.firstChild);

  link.innerHTML = `<img src="${data}" alt="foush Man"/>`;
}

// getVideo();

video.addEventListener('canplay', paintToCanvas);