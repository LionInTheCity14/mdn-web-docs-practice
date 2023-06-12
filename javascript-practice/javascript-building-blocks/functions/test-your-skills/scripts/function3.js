const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const para = document.createElement('p');

function random(length = 0){
    return Math.floor(Math.random() * length);
}

function chooseName(names){
    const length = names.length;
    const randomNo = random(length);
    para.textContent = names[randomNo];
}

chooseName(names);

const section = document.querySelector('section');

section.appendChild(para);