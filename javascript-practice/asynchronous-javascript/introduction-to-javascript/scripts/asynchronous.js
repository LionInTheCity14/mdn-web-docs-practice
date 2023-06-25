// Example of Synchronous Programming
const name = "varun";
const greeting = `Hello, my name is ${name}`;
console.log(greeting);

// this is also synchronous if called another function, like this
function makeGreeting(name){
  return `Hello, my name is ${name}`;
}
console.log(greeting);

// Here, makeGreeting() is a synchronous function because the
// caller has to wait for the function to finish its work and
// return a value before the caller can continue.

// A Long running synchronous function
// Prime number example
const MAX_PRIME = 1000000;

function isPrime(n){
  for(let i = 2; i < Math.sqrt(n); i++){
    if(n%i === 0)
      return false;
  }
  return true;
}

const random = (max) => Math.floor(Math.random() * max);

function generatePrimes(quota){
  const primes = [];
  while(primes.length < quota){
    const candidate = random(MAX_PRIME);
    if(isPrime(candidate)){
      primes.push(candidate);
    }
  }
  return primes;
}
const quota = document.querySelector("#quota");
const output = document.querySelector("#output");

document.querySelector("#generate").addEventListener("click", (evt) => {
  const primes = generatePrimes(quota.value);
  output.textContent = `Finished generating ${quota.value} primes! `;
  // output.textContent += primes;
});

document.querySelector("#reload").addEventListener("click", (evt) => {
  document.location.reload();
})

// XML Request Example

const log = document.querySelector(".event-log");

document.querySelector("#xhr").addEventListener("click", (evt) => {
  log.textContent = "";
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("loadend", () => {
    log.textContent = `${log.textContent} Finished with status: ${xhr.status}`;
  });

xhr.open(
  "GET","https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json"
);

xhr.send();
log.textContent = `${log.textContent} Started XHR resuest\n`;
});

document.querySelector("#reload").addEventListener("click",(evt) => {
  log.textContent = "";
  document.location.reload();
});

// Callbacks
// A callback is just a function that's passed into another
// function, with the expectation that the callback will be
// called at the appropriate time.

// However, callback-based code can get hard to understand when
// the callback itself has to call functions that accept a
// callback. This is a common situation if you need to perform
// some operation that breaks down into a series of
// asynchronous functions. For example, consider the following:

// Straightforward approach
// function doStep1(init){
//   return init + 1;
// }
// function doStep2(init){
//   return init + 2;
// }
// function doStep3(init){
//   return init + 3;
// }
// function doStep4(init){
//   return init + 4;
// }

// function doOperation(){
//   let result = 0;
//   result = doStep1(result);
//   result = doStep2(result);
//   result = doStep3(result);
//   result = doStep4(result);
//   console.log(`result: ${result}`);
// }
// doOperation();

// callback approach
function doStep1(init, callback){
  const result = init + 1;
  callback(result);
}
function doStep2(init, callback){
  const result = init + 2;
  callback(result);
}
function doStep3(init, callback){
  const result = init + 3;
  callback(result);
}
function doStep4(init, callback){
  const result = init + 4;
  callback(result);
}
function doOperation2(){
  doStep1(0, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        doStep4(result3, (result4) => {
          console.log(`result: ${result4}`);
        });
      });
    });
  });
}
doOperation2();