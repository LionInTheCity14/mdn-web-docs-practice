const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

// method 1

// fetchPromise.then((response) => {
//   const jsonPromise = response.json();
//   jsonPromise.then((data) => {
//     console.log(data[0].name);
//   });
// });

// promise chaining

// Elegant feature of promises is that then() itself returns a
// promise, which will be completed with the result of the
// function passed to it. This means that we can (and certainly
// should) rewrite the above code like this:

// fetchPromise
//   .then((response) => response.json())
//   .then((data) => console.log(data[0].name))

// fetchPromise.then((response) => response.json()).then((data) => console.log(data[0].name));

// checking if request accepted

fetchPromise
  .then((response) => {
    if(!response.ok){
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  });

