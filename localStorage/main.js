 const addItems = document.querySelector('.add-items');
 const itemsList = document.querySelector('.plates');
 const items = JSON.parse(localStorage.getItem('items'))||[];


function addItem(e) {
  e.preventDefault();
  const text=(this.querySelector('[name=item]')).value;

  const item = {
    text,
    done: false
  };
  items.push(item);
  populateList(items, itemsList);
  //store in the local storage
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();


}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate,i) => {
    return `
      <li>
        <input type="checkbox" data-index="${i}" id="item${i}" ${plate.done?'checked':''}/>
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join('');
}

function toggleDone(e) {
  // console.log(e.target);
  if (!e.target.matches('input')) return; //skip this until it's input
  const el = e.target;
  console.log(el);
  const index = el.dataset.index;
  
  console.log(index);
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);

}



 //add event listener
addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);