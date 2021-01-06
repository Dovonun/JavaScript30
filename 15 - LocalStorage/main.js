const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
const clearBtn = document.querySelector('.btn:first-child');
const unckeckBtn = document.querySelector('.btn:nth-child(2)');

function populateList(List = [], platesList) {
  platesList.innerHTML = List.map(
    (plate, i) => `
      <li>
      <input type="checkbox" data-index=${i} id="item${i}"
      ${plate.done ? 'checked' : ''}/>
      <label for='item${i}'> ${plate.text}</label></li>`,
  ).join('');
  localStorage.setItem('items', JSON.stringify(items));
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

function toggleDone(e) {
  if (!e.target.matches('input')) return;
  const { index } = e.target.dataset;
  items[index].done = !items[index].done;
  populateList(items, itemsList);
}

// Eventlisteners
clearBtn.addEventListener('click', () => {
  items.splice(0, items.length);
  populateList(items, itemsList);
});
unckeckBtn.addEventListener('click', () => {
  items.forEach(item => {
    item.done = false;
  });
  populateList(items, itemsList);
});
addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);
