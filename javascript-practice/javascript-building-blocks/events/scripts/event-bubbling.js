const output = document.querySelector("#output");

function handleClick(evt){
    // output.textContent += `You clicked on a ${evt.currentTarget.tagName} element\n`;
    output.textContent += `You clicked on a ${evt.currentTarget.tagName} element\n`;
    console.log(evt.currentTarget);
}

const container = document.querySelector("#container");
const btn = document.querySelector("#insideDiv");

// Why bother with both capturing and bubbling? In the bad old days, when browsers were much less cross-compatible than now, Netscape only used event capturing, and Internet Explorer used only event bubbling. When the W3C decided to try to standardize the behavior and reach a consensus, they ended up with this system that included both, which is what modern browsers implement.

// By default almost all event handlers are registered in the bubbling phase, and this makes more sense most of the time.

// Event bubbling (enabled by default)

// document.body.addEventListener("click", handleClick);
// container.addEventListener("click", handleClick);
// btn.addEventListener("click", handleClick);

// Event capture (opposite of event bubbling)
// (disabled by default, to enable it use
// {capture : true} inside .addEventListener);

document.body.addEventListener("click", handleClick, {capture : true});
container.addEventListener("click", handleClick, {capture : true});
btn.addEventListener("click", handleClick);
