/***
 *  using map reduce
 **/ 

//Select all the node linst of the videos

const timeNodes = Array.from(document.querySelectorAll('[data-time]')
);

const seconds = timeNodes.map(node => node.dataset.time).map(timeCode => { const [mins, secs] = timeCode.split(':').map(parseFloat); return secs + mins * 60; }).reduce((total, videoSeconds) =>total+videoSeconds); 

let hours = Math.floor(seconds / 3600);
let secondsLeft = seconds % 3600;
let minutes = Math.floor(seconds / 60);
let leftSeconds = secondsLeft % 60;
console.log(hours,secondsLeft,leftSeconds);