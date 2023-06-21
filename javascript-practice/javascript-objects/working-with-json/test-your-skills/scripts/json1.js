const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');
let motherInfo = 'The mother cats are called ';
let kittenInfo;
const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';

fetch(requestURL)
  .then(response => response.text())
  .then(text => displayCatInfo(text))

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

  const catObj = JSON.parse(catString);
  // console.log(catObj.length);
  // console.log(catObj[1]["name"]);

  for(let i = 0; i < catObj.length; i++){
    if(i === catObj.length - 1){
      motherInfo += `and ${catObj[i]["name"]}.`;
    }else{
      motherInfo += `${catObj[i]["name"]}, `;
    }

    const kittens = catObj[i].kittens;
    // console.log(kittens);
    total += kittens.length;
    // console.log(total)
    for(kitten of kittens){
      if(kitten.gender === 'm')
        male += 1;
    }
  }

  // console.log(total, male, total - male);
  kittenInfo = `Total number of kittens are ${total}, where male are ${male} and female are ${total - male}.`;
  
  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);