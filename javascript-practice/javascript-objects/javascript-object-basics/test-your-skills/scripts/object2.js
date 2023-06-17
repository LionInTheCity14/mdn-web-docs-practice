let bandInfo;

const band = {
    name: "coldplay",
    nationality: "british",
    genre: "rock",
    members: 5,
    formed: 1997,
    split: false,
    albums: [
        {
            name: "Music of the Spheres",
            released: 2021,
        },
        {
            name: "A Head Full of Dreams",
            released: 2015,
        },
    ]
}

bandInfo = "Coldplay are a British rock band formed in London in 1997. They consist of vocalist and pianist Chris Martin, guitarist Jonny Buckland, bassist Guy Berryman, drummer Will Champion and creative director Phil Harvey"

const section = document.querySelector('section');
let para1 = document.createElement('p');
para1.textContent = bandInfo;
section.appendChild(para1);