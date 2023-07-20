const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

// selecting a node.
const sect = document.querySelector("section");

// creating a node. 
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";
sect.appendChild(para);

// creating text node.
const text = document.createTextNode("- the premier source for web development knowledge.");

const linkPara = document.querySelector("p");
linkPara.appendChild(text);

// moving a node.
sect.appendChild(linkPara);

// cloning a node
const cloneLinkPara = linkPara.cloneNode();

// removing a node
// sect.removeChild(linkPara);
// or 
linkPara.remove();
// this method is not supported in older browsers. They have no method to tell a node to remove itself, so you'd have to do the following.
// linkPara.parentNode.removeChild(linkPara);

// manipulating styles 

para.style.color = "white";
para.style.backgroundColor = "black";
para.style.textAlign = "center";

// or 

sect.setAttribute("class", "highlight");