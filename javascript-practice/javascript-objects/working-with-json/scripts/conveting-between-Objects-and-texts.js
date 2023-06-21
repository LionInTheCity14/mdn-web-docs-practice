//  sometimes we receive a raw JSON string, and we need to
// convert it to an object ourselves. And when we want to send
// a JavaScript object across the network, we need to convert
// it to JSON (a string) before sending it. Luckily, these two
// problems are so common in web development that a built-in
// JSON object is available in browsers, which contains the
// following two methods:

// parse(): Accepts a JSON string as a parameter, and returns
// the corresponding JavaScript object.

// stringify(): Accepts an object as a parameter, and returns
// the equivalent JSON string.

// This does exactly the same thing as the example we built up
// earlier, except that:

// 1) we retrieve the response as text rather than JSON, by
//  calling the text() method of the response

// 2) we then use parse() to convert the text to a JavaScript
// object

async function populate(){
  const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);

  const response = await fetch(request);

  const superHeroesText = response.text();

  // Converting from text or string or json to object
  const superHeroes = JSON.parse(superHeroesText);

  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}

const obj1 = {
  name: "Modi",
  age: 75,
  party: "BJP",
}
console.log(obj1);

// Converting from object to text or json or string
const str1 = JSON.stringify(obj1);
console.log(str1);