    // Add your code here
    const myArray = ["Honda City", "Tata Harrier", "Land Rover Velar", "BMW 3 series"];
    myArray[0] = "XUV700";
    myArray[1] = "Fortuner";

    // Don't edit the code below here!

    const section = document.querySelector('section');

    let para1 = document.createElement('p');
    para1.textContent = `Array: ${ myArray }`;

    section.appendChild(para1);