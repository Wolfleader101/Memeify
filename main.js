chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    'outerBounds': {
      'width': 500,
      'height': 500
    }
  });
});

const memeNames = ['meme1.jpg', 'meme2.png'];

const memeImgs = [];

for (let i = 0; i < memeNames.length; i++) {
    memeImgs[i] = new Image();
    memeImgs[i].src = chrome.runtime.getURL('Memes/' + memeNames[i]);
};

for ( let img of document.getElementsByTagName('img')) {
    img.src = memeImgs[Math.floor(Math.random() * memeImgs.length)].src;
}

console.log(document.getElementsByTagName('img'));
console.log(memeImgs);
//window.onload = function() {}
