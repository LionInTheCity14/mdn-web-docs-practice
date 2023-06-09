    let response;
    let score = 75;
    let machineActive = false;
  
    // Add your code here

    // Don't edit the code below here!

    const section = document.querySelector('section');

    let para1 = document.createElement('p');
    let para2 = document.createElement('p');

    para1.textContent = `Your score is ${ score }`;
    para2.textContent = response;

    section.appendChild(para1);
    section.appendChild(para2);