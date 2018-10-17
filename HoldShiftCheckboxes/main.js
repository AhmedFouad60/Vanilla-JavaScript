const inbox=document.querySelector(".inbox");

let lastChecked;

//select all the inputs
const checkboxes=document.querySelectorAll("input[type='checkbox']");



function handleCheck(e){
  let inBetween = false;
  if(e.shiftKey && this.checked){ //check if shift key holded while clicking the input
    
    checkboxes.forEach(checkbox=>{
      console.log(checkbox);
      if(checkbox == this || checkbox == lastChecked){
        inBetween = !inBetween;
      }
      if(inBetween){
        checkbox.checked = true;
      }
    });
    

  }
  lastChecked=this;
  
}





checkboxes.forEach(checkbox=>checkbox.addEventListener('click',handleCheck));








// const allChecked = false;
// const selectDirection = false; //for up to down


// function shiftKey(e){
  
//   //if the shift+mousedown
  
//   //check the input whitch checked now 
  
//   //check the chekbox in the checkboxes  [if there is one checked determine the direction if it before or after the last checked if it before mark all before if it after mark all after]
  
    
//   }
//   document.addEventListener('keydown',shiftKey);