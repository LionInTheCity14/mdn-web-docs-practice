const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];

// Add your code here
const eagleIdx = birds.indexOf("Eagles");
birds.splice(eagleIdx, 1);

function filtering(item){
  return item.startsWith("E");
}

const eBirds = birds.filter(filtering);

// Don't edit the code below here!

const section = document.querySelector('section');

const para1 = document.createElement('p');
para1.textContent = eBirds;

section.appendChild(para1);