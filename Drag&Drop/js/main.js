const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');



// Fill listeners
fill.addEventListener('dragstart',dragStart);
fill.addEventListener('dragend', dragEnd);
// Loop throw the the empties
for(const empty of empties){
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter',drageEnter);
    empty.addEventListener('dragleave',drageLeave);
    empty.addEventListener('drop',dragDrop);
}

// Drag Functions
function dragStart() {
    console.log('start');
    this.className +=' hold';
    setTimeout(()=> (this.className ='invisible'),0)
    
}
function dragEnd(){
    this.className='fill';

} 
function dragOver(e){
    e.preventDefault();
    console.log('over');
}
function drageEnter(e){
    e.preventDefault();
    this.className += ' hovered';
    console.log('hovered');

}
function drageLeave(){
    console.log('Leave');
    this.className ='empty';

}
function dragDrop(){
    console.log('Drop');
    this.className= 'empty';
    this.append(fill);

}







