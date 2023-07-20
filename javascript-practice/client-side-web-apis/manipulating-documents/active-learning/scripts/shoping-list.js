const inputEl = document.querySelector("#item");
const inputBtn = document.querySelector("button");
const list = document.querySelector("ul");

inputBtn.addEventListener("click", func);

function func(){
    const inputText = inputEl.value;
    inputEl.value = "";

    const listItem = document.createElement("li");
    const spanEl = document.createElement("span");
    const deleteBtn = document.createElement("button");

    listItem.appendChild(spanEl);
    listItem.appendChild(deleteBtn);

    spanEl.textContent = inputText;
    deleteBtn.textContent = "Delete";

    if(inputText.trim() === "")             // if user does not enter anything then a 
        alert("Plz input a valid text.");   // alert will pop up.
    else
        list.appendChild(listItem);


    deleteBtn.addEventListener("click", () => list.removeChild(listItem));

    inputEl.focus();
}
