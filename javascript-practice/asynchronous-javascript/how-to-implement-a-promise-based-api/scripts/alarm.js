const namee = document.querySelector("#name");
const delay = document.querySelector("#delay");
const btn = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

function alarm(person, delay){
    return new Promise((resolve, reject) => {
        if(delay < 0)
            throw new Error(`Alarm delay must not be negative`);
        setTimeout(() => {
            resolve(`Wake up, ${person}`);
        }, delay);
    });
}

// btn.addEventListener("click", () => {
//     alarm(namee.value, delay.value)
//         .then((message) => {output.textContent = message})
//         .catch((error) => {output.textContent = `Couldn't set alarm: ${error}`});
// });

// using async and await

// Since alarm() returns a Promise, we can do everything
// with it that we could do with any other promise: 
// promise chaining, Promise.all(), and async / await:

btn.addEventListener("click", async () => {
    try{
    const message = await alarm(namee.value, delay.value);
    output.textContent = message;
    }catch(error){
        output.textContent = `Couldn't set alarm: ${error}`;
    }
});