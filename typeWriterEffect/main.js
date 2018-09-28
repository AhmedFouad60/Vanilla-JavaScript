class TypeWriter{
  constructor(txtElement,words,wait=3000){
    this.txtElement=txtElement;
    this.words=words;
    this.txt='';
    this.wordIndex=0;
    this.wait=parseInt(wait,10);
    this.type();
    this.isDeleting=false;
  }
  //Type Method
  type(){
    //Current index of the work
    const Current=this.wordIndex% this.words.length;
    //get the full text of current word
    const fullTxt=this.words[Current];
    //check if deleting
    if (this.isDeleting) {
      //remove a char
      this.txt=fullTxt.substring(0,this.txt.length-1);
    } else {
      //add a char
      this.txt=fullTxt.substring(0,this.txt.length+1);
    }

    //Insert txt into element
    this.txtElement.innerHTML=`<span class="txt">${this.txt}</span>`;

    //Initial type speed
    let typeSpeed=300;
    if(this.isDeleting){
      typeSpeed /=2;
    }
    //check if the word is complete or not 
    if(!this.isDeleting && this.txt===fullTxt){
      typeSpeed=this.wait;
      //set delete to true
      this.isDeleting=true;
    }else if(this.isDeleting && this.txt===''){
      this.isDeleting=false;
      //Move to the next word
      this.wordIndex++;
      //pause before start typing new word
      typeSpeed=500;
    }




    setTimeout(() => {
      this.type()
    },typeSpeed);
  }
}



//Init on Dom Load
document.addEventListener('DOMContentLoaded',init);

//Init the App
function init(){
  const txtElement=document.querySelector('.txt-type');
  const words=JSON.parse(txtElement.getAttribute('data-words'));
  new TypeWriter(txtElement,words,3000);

}