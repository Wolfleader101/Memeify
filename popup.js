const memeNames = ['meme1.jpg', 'meme2.png'];

// get random picture
document.getElementById('imgs').innerHTML = `<img width='100' height='200' src="./Memes/${memeNames[Math.floor(Math.random() * memeNames.length)]}"></img>`;

DocImgs = document.getElementsByTagName('img');
console.log(DocImgs)
DocImgs.forEach(el => {
  randImg = `<img width='100' height='200' src="./Memes/${memeNames[Math.floor(Math.random() * memeNames.length)]}"></img>`
  console.log(randImg)
  console.log(i)
  el.parentNode.replaceChild(randImg, el)
});
