// To support error handling, Promise objects provide a catch()
// method. This is a lot like then(): you call it and pass in a
// handler function. However, while the handler passed to
// then() is called when the asynchronous operation succeeds,
// the handler passed to catch() is called when the asynchronous
// operation fails.

// If you add catch() to the end of a promise chain, then it
// will be called when any of the asynchronous function calls
// fails. So you can implement an operation as several
// consecutive asynchronous function calls, and have a single
// place to handle all errors.

const fetchPromise = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

fetchPromise
  .then((response) => {
    if (!response.ok)
      throw new Error(`HTTP Error occured : ${response.status}`)
    return response.json();
  })
  .then((data) => console.log(data[0].name))
  .catch((error) => console.error(`Could not get products: "${error}"`));

// Combining multiple promises using Promise.all()

// The promise returned by Promise.all() is:

// 1) fulfilled when and if all the promises in the array are
// fulfilled. In this case, the then() handler is called with
// an array of all the responses, in the same order that the
// promises were passed into all().

// 2) rejected when and if any of the promises in the array
// are rejected. In this case, the catch() handler is called
// with the error thrown by the promise that rejected.

const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
);
const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => console.error(`Failed to fetch : ${error}`));

// Sometimes, you might need any one of a set of promises to be
// fulfilled, and don't care which one. In that case, you want
// Promise.any(). This is like Promise.all(), except that it is
// fulfilled as soon as any of the array of promises is 
// fulfilled, or rejected if all of them are rejected:

const fetchPromise4 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
const fetchPromise5 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
);
const fetchPromise6 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);

Promise.any([fetchPromise4, fetchPromise5, fetchPromise6])
  .then((responses) => {
    for(response of responses){
      console.log(`${response.url} : ${response.status}`);
    }
  })
  .catch((error) => console.error(`Failed to fetch: "${error}"`));

  