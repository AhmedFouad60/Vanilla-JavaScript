//select the elements 
const secondHand=document.querySelector('.second-hand');
const minsHand=document.querySelector('.min-hand');
const hourdHand=document.querySelector('.hour-hand');


setInterval(setDate,1000);

// setDate();


function setDate(){
const now = new Date();
const seconds=now.getSeconds();
const secondsDegrees = ( (seconds/60)*360 ) +90;
secondHand.style.transform=`rotate(${secondsDegrees}deg)`;

const hours=now.getHours();

const hoursDegree=( (hours/12) * 360 )+90;
console.log(hours);
hourdHand.style.transform=`rotate(${hoursDegree}deg)`;

const mins=now.getMinutes();
const minsDegree=( (mins/60) *360)+90;
minsHand.style.transform=`rotate(${minsDegree}deg)`;


}

