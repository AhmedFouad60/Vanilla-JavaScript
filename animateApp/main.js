// anime({
//   targets:'div.box.red',
//   translateY: [
//     { value: 200, duration: 500 },
//     { value: 0, duration: 800 }
//   ],
//   rotate:{
//     value:'1turn',
//     easing:'easeInOutSine'
//   },
// });

// anime({
//   targets:'div.box.blue',
//   translateY: [
//     { value: 200, duration: 500,delay:1000 },
//     { value: 0, duration: 800 }
//   ],
//   rotate:{
//     value:'1turn',
//     easing:'easeInOutSine', 
//     delay:1000,

//   },
// });


// anime({
//   targets:'div.box.green',
//   translateY: [
//     { value: 200, duration: 500,delay:2000 },
//     { value: 0, duration: 800 }
//   ],
//   rotate:{
//     value:'1turn',
//     easing:'easeInOutSine', 
//     delay:2000,

//   },
// });

// anime({
//   targets:'div.box.yellow',
//   translateY: [
//     { value: 200, duration: 500,delay:3000 },
//     { value: 0, duration: 800 }
//   ],
//   rotate:{
//     value:'1turn',
//     easing:'easeInOutSine', 
//     delay:3000,

//   },
// });



/**
 *  i'll use Function based property parameters to save the above code 
 *  DRY (don't repeat yourself)
*/


let playPause=anime({
  targets:'div.box',
  translateY: [
    { value: 200, duration: 500},
    { value: 0, duration: 800 }
  ],
  rotate:{
    value:'1turn',
    easing:'easeInOutSine', 
    
  },
  delay: function(el,i,l){return 1000 + (i * 1000);},
  autoplay:false,
  loop:true,
});

//select the buttons and fire the proper functions of the API

const play=document.querySelector('.play');
const pause=document.querySelector('.pause');

play.addEventListener('click',playPause.play);
pause.addEventListener('click',playPause.pause);
// playPause.play();
// playPause.pause();