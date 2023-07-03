// The async keyword gives you a simpler way to work
// with asynchronous promise-based code. Adding "async"
// at the start of a function makes it an async function:

async function myFunction1(){
    // This is an async function
}


// Inside an async function, you can use the "await"
// keyword before a call to a function that returns
// a promise. This makes the code wait at that point
// until the promise is settled, at which point the
// fulfilled value of the promise is treated as a
// return value, or the rejected value is thrown.

async function fetchProducts(){
    try{
        // after this line, our function will wait for the "fetch()" call to be settled
        // the "fetch()" call will either return a Response or throw an error
        const response = await fetch(
            "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
        );
        if(!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }
        // after this line, our function will wait for the "response.json()" call to be settled
        // the "response.json()" call will either return the parsed JSON object or throw an error
        const data = await response.json();
        console.log(data[0].name);
    }
    catch(error){
        console.error(`Could not get products: ${error}`);
    }
}

fetchProducts();

// Note though that async functions always return a promise, so you can't do something like:

async function fetchProducts1(){
    try{
        const response = await fetch(
            "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
        );
        if(!response.ok)
            throw new Error(`HTTP error: ${response.status}`);
        const data = await response.json();
        // console.log(data[0].name);
        return data;
    }
    catch(error){
        console.error(`Could not get products: ${error}`);
    }
}

const promise = fetchProducts1();
// console.log(promise[0].name);       
// "promise" here is a Promise object, so this will not work

// Instead, you'd need to do something like: 
promise
    .then((data) => console.log(data[0].name));

// Also, note that you can only use await inside an async function,
// unless your code is in a JavaScript module. That means you can't
// do this in a normal script:

try{
    // using await outside an async function is only allowed in a module
    const response = await fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    if(!response.ok)
        throw new Error(`HTTP error: ${response.status}`);
    const data = await response.json();
    console.log(data[0].name);
}
catch(error){
    console.error(`Could not get products: ${error}`);
}

