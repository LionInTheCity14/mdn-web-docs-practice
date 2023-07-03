const output1 = document.querySelector("#output");
const btn1 = document.querySelector("#set-alarm");

function setAlarm(){
    setTimeout(() => {
        output1.textContent = `Wake up!`;
    }, 25000);
}
btn1.addEventListener("click", setAlarm);

function alarm(person, delay){
    return new Promise((resolve, reject) => {
        if(delay < 0){
            throw new Error(`Alarm delay must not be negative`);
        }
        setTimeout(() => {
            resolve(`Wake up, ${person}!`);
        },delay);
    });
}