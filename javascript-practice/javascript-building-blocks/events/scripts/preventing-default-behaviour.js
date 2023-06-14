const form = document.querySelector("form");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const para = document.querySelector("p");

// Using evt.preventDefault();

form.addEventListener("submit", (evt) => {
    console.log(evt);
    if(fname.value === "" || lname.value === ""){
        evt.preventDefault();
        para.textContent = `You need to fill in both names!`;
    }
});