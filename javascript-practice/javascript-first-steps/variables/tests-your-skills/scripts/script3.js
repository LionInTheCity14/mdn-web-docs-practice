 // Add your code here

 let myName = 'Default';
 myName = 'Varun';

 let myAge = 23;

 // Don't edit the code below here!

 const section = document.querySelector('section');

 const para1 = document.createElement('p');
 const para2 = document.createElement('p');
 para1.textContent = myName;
 para2.textContent = `In 20 years, I will be ${myAge + 20}`;
 section.appendChild(para1);
 section.appendChild(para2);