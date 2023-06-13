let machineActive = true;
let pwd = 'cheese';

let machineResult;
let pwdResult;

if(machineActive){
  pwd === "cheese" ?  pwdResult = "Logged In Successfully." : pwdResult = "Failed Attempt To Login";
}else{
  machineResult = "Please switch on the machine!";
}

const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = machineResult;
para2.textContent = pwdResult;

section.appendChild(para1);
section.appendChild(para2);