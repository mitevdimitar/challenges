const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  const items = JSON.parse(localStorage.getItem('items')) || [];

  function toggleItem(checkbox) {
    const id = checkbox.dataset.id;
    const updatedItem = items[id];
    updatedItem.isChecked = checkbox.checked;
    items.splice(id, 1, updatedItem);
    localStorage.setItem('items', JSON.stringify(items));
  }

  //display items function
  const renderItems = (listItems, list) => {
    const html = listItems.map((item, i) => {
      return `
        <li>
          <input type="checkbox" data-id=${i}  id="item-${i}" ${item.isChecked ? "checked" : ""} onchange="toggleItem(this)"/>
          <label for="item-${i}">${item.text}</label>  
        </li>
      `
    }).join('');
    itemsList.innerHTML = html;
  }
  
  //add item function
  const addItem = (e) => {
    e.preventDefault();
    const text = document.querySelector('[name=item]').value;
    const newItem = {
      text,
      isChecked: false
    }
    items.push(newItem);
    renderItems(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    e.target.reset();
  }

  //add event listener on add items block
  addItems.addEventListener('submit', addItem);

  renderItems(items, itemsList);
