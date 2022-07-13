console.log("script file loaded")
let img = document.createElement('img');
let imgbox = document.querySelector('#dummy');



imgbox.textContent = 'Your Dinosaur Will Appear Here!!!'
let dummy = true;

document.querySelector('#dinobtn').addEventListener('click', () => {
  if (dummy) {
    dummy = false;
    imgbox.remove();
  }
  getDinoName();
  getDinoImage();
})




async function getDinoName() {
  const response = await fetch('/dinoname');
  const data = await response.json();
  let dinoName = data[0].join(' ');
  console.log(dinoName);
  document.querySelector('#dinoname').textContent = dinoName;
}

let dinoImageUrl;
let dinoAlt;

async function getDinoImage() {
  const response = await fetch('/dinoimage');
  const data = await response.json();
  let dinoImage = data.value[Math.floor(Math.random() * data.value.length)];
  dinoImageUrl = dinoImage.thumbnailUrl;
  dinoAlt = dinoImage.name;
  console.log(dinoImage);

  // if (document.querySelector('#dinoImg') != null) {
  //   document.querySelector('#dinoImg').remove();
  // }


  img.id = 'dinoImg'
  img.src = dinoImageUrl;
  img.alt = dinoAlt;
  document.querySelector('#dino-img').appendChild(img);
}