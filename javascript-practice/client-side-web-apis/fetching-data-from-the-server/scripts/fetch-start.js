const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");

verseChoose.addEventListener("change", ()=> {
    const verse = verseChoose.value;
    updateDisplay(verse);
});

function updateDisplay(verse){
    verse = verse.replace(" ","").toLowerCase();
    const url = `${verse}.txt`;
    // const url = `javascript-practice/client-side-web-apis/fetching-data-from-the-server/fake-database/${verse}.txt`;

    // call `fetch()`, passing in the URL.
    fetch(url)
    // fetch() returns a promise. When we have received a response from the server,
    // the promise's `then()` handler is called with the response.
    .then((response)=>{
        // our handler throws an error if the request did not 
        // succeed.
        console.log(response);
        if(!response.ok)
            throw new Error(`HTTP error: ${response.status}`);
        // otherwise (if the response succeeded), our handler 
        // fetches the response.
        //as text by calling response.text(), and immediately 
        // returns the promise.
        // return by `response.text()`.
        console.log(response)
        return response.text();
    })
    // When response.text() has succeeded, the `then()` 
    // handler is called with the text, and we copy it into 
    // the `poemDisplay` box.
    .then((responsedText) => {
        poemDisplay.textContent = responsedText;
    })
    // catch any errors that might happend, and display a message in the `poemDisplay` box.
    .catch((error) => {
        poemDisplay.textContent = `Could not fetch verse: ${error}`;
    });
}
verseChoose.value = "Verse 1";
updateDisplay("Verse 1");