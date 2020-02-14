  const memeNames = ['meme1.jpg', 'meme2.png'];
  const memeImgs = {};

  memeNames.forEach(el => {
    memeImgs[el] = new Image();
  Object.values(memeImgs).src = './Memes/' + memeNames[el];
   console.log(memeImgs)
   document.body.appendChild(Object.values(memeImgs))
  })

  DocImgs = document.getElementsByTagName('img');
  //console.log(DocImgs)

  for(let i in DocImgs) {
    i.src = memeImgs[Math.floor(Math.random() * memeImgs.length)].src;
  }
  
  console.log(document.getElementsByTagName('img'));
  console.log(memeImgs);
  //window.onload = function() {}