// Add your code here

    let myName;
    myName = "Varun";
    let myAge = 23;

    // Don't edit the code below here!

    const section = document.querySelector('.preview');
    // section.innerHTML = "";

    const para1 = document.createElement('p');
    para1.textContent = myName;
    const para2 = document.createElement('p');
    para2.textContent = myAge;
    section.appendChild(para1);
    section.appendChild(para2);