//select all the inputs 
const inputs=document.querySelectorAll('.controls input');

//Add Event listeners to handle any change 
inputs.forEach(input=>input.addEventListener('change',handleChange));
// inputs.forEach(input=>input.addEventListener('mousemove',handleChange));


function handleChange(){
  const suffix=this.dataset.sizing ||'';
  document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}