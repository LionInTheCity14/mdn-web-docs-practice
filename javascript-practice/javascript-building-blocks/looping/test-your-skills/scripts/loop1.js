const myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
const list = document.createElement('ul');

for(item of myArray){
  const li = document.createElement("li");
  li.textContent = item;
  list.appendChild(li);
}

const section = document.querySelector('section');
section.appendChild(list);