const theorem = 'Pythagorean theorem';

    const a = 5;
    const b = 8;

const myString = `Using ${theorem}, we can work out that that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b}, the length of the hypotenuse is ${((a**2 + b**2)**0.5).toFixed(2)}.`;


    // Don't edit the code below here!

    const section = document.querySelector('section');

    const para1 = document.createElement('p');
    para1.textContent = myString;
    section.appendChild(para1);