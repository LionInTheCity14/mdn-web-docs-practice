async function populate(){
  const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroes = await response.json();

  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}

async function populateAnotherExample(){
  const requestURL =  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);

  const response = await fetch(request);

  const superHeroesText = await response.text();
  const superHeroes = JSON.parse(superHeroesText);

  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}

// function populate(){
//   const superHeroes = {
//     "squadName" : "Super Hero Squad",
//     "homeTown" : "Metro City",
//     "formed" : 2016,
//     "secretBase" : "Super tower",
//     "active" : true,
//     "members" : [
//       {
//         "name" : "Molecule Man",
//         "age" : 29,
//         "secretIdentity" : "Dan Jukes",
//         "powers" : [
//           "Radiation resistance",
//           "Turning tiny",
//           "Radiation blast"
//         ]
//       },
//       {
//         "name" : "Madame Uppercut",
//         "age" : 39,
//         "secretIdentity" : "Jane Wilson",
//         "powers" : [
//           "Million tonne punch",
//           "Damage resistance",
//           "Superhuman reflexes"
//         ]
//       },
//       {
//         "name" : "Eternal Flame",
//         "age" : 1000000,
//         "secretIdentity" : "Unknown",
//         "powers" : [
//           "Immortality",
//           "Heat Immunity",
//           "Inferno",
//           "Teleportation",
//           "Interdimensional travel"
//         ]
//       }
//     ]
//   }
//   populateHeader(superHeroes);
//   populateHeroes(superHeroes);
// }

// Note: The fetch() API is asynchronous, for now, we'll just
// say that we need to add the keyword "async" before the name
// of the function that uses the fetch API, and add the keyword
// "await" before the calls to any asynchronous functions.

// population the header
function populateHeader(obj){
  const header = document.querySelector("header");

  const myH1 = document.createElement("h1");
  myH1.textContent = obj["squadName"];
  header.appendChild(myH1);

  const myPara = document.createElement("p");
  myPara.textContent = `Hometown: ${obj.hometown} // Formed: ${obj.formed}`;
  header.appendChild(myPara);
}

// Creating the hero information cards
function populateHeroes(obj){
  const section = document.querySelector("section");
  
  const heroes = obj.members;

  for(const hero of heroes){
    const myArticle = document.createElement("article");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myList = document.createElement("ul");

    myH2.textContent = hero.name;
    myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
    myPara2.textContent = `Age: ${hero.age}`;
    myPara3.textContent = "Superpowers:";

    const superPowers = hero.powers;
    for(const power of superPowers){
      const listItem = document.createElement("li");
      listItem.textContent = power;
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}

populate();