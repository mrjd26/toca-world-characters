const characters = ['iAmKlas', 'crumpet', 'littleLion', 'tocaGirl', 'snowMan'];

const btn = document.querySelector('#btn');
const canvas = document.querySelector('#myCanvas');
ctx = canvas.getContext('2d');


ctx.fillStyle = "#569";
ctx.fillRect(130, 190, 40, 60);


class Person {
  constructor(name, posX, posY) {
    this.posX = posX;
    this.posY = posY;
  }
   
  dance() {

  }

  eat() {

  }

  changeName() {
  
  }

 }


const spawn = () => {
  let posX = Math.floor(Math.random() * 1000);
  let posY = Math.floor(Math.random() * 1000);
  let ndx = Math.floor(Math.random() * characters.length);  
  let name = characters[ndx];
;
  console.log(posX, posY, name);
  const person = new Person(name, posX, posY);

  characters.splice(ndx, 1);

  let image = new Image();
  image.src = `${name}.png`;
  image.onload = function(e) {
    ctx.drawImage(image, posX, posY);
  }
}


btn.addEventListener('click', spawn);
