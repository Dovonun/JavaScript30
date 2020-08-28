const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

function populateList(List = [], platesList) {
  platesList.innerHTML = List.map(
    (plate, i) => `
      <li>
      <input type ="checkbox" data-index=${i} id="item${i}"
      ${plate.done ? 'checked' : ''}/>
      <lable for= 'item${i}'> ${plate.text}</lable></li>`
  ).join('');
}

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector('[name=item]').value;
  const item = {
    text,
    done: false,
  };
  items.push(item);
  populateList(items, itemsList);
  this.reset();
}

addItems.addEventListener('submit', addItem);
