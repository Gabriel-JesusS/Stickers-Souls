//imports.
import Stickers from './stickers.js';

const stickers = document.querySelector('#screen');
const range = document.querySelector('#range');
const BackgroundImg = document.querySelector('img');
const id = document.querySelector('#names');
const BtAuto = document.querySelector('#AutoBt');
const BtPause = document.querySelector('#PauseBt')
const light = document.querySelector('#light');
const BtLeft = document.querySelector('#left');
const BtRight = document.querySelector('#right');

//variaveis globais
let ClickDirection = 0;
let index_Stickers = 0;
range.value = 0;
id.textContent = Stickers[index_Stickers].id;
stickers.src = Stickers[index_Stickers].sticker;
BackgroundImg.style.background = Stickers[index_Stickers].cor;

//range dos stickers 
range.addEventListener('input', function () {
  for (let index_Stickers = 0; index_Stickers < range.value; index_Stickers++) {
    id.textContent = Stickers[index_Stickers].id
    stickers.src = Stickers[index_Stickers].sticker;
    BackgroundImg.style.background = Stickers[index_Stickers].cor;
  }
});

var clicks = null; // contador de clicks
BtAuto.addEventListener("click", () => {
  clicks++;
  if (clicks == 1) {
    //muda a quantidade maxima do rage pra modo Auto
    range.max = 6;

    //ativação da luz superior direita
    light.style.background = "#00FF00";
    light.style.boxShadow = '-1px 0px 15px green';

    BtPause.addEventListener('click', () => {
      clearInterval(stop);
      light.style.background = "red";
      light.style.boxShadow = '-1px 0px 15px red';
      clicks = 0;

    });

    const stop = setInterval(() => {
      id.textContent = Stickers[index_Stickers].id;
      BackgroundImg.style.background = Stickers[index_Stickers].cor;
      range.value = index_Stickers;
      stickers.src = Stickers[index_Stickers].sticker;
      index_Stickers++;

      //retorna ao seu estado inicial
      if (index_Stickers == 8) {
        clearInterval(stop)
        index_Stickers = 0;
        range.value = 0;
        BackgroundImg.style.background = Stickers[index_Stickers].cor;
        id.textContent = Stickers[index_Stickers].id;
        stickers.src = Stickers[index_Stickers].sticker;
        light.style.background = null;
        light.style.boxShadow = null;
        clicks = 0;
        range.max = 7;
      }
    }, 900);
  }

});

BtRight.addEventListener('click', () => {
  ClickDirection++;
  ClickDirection == 7 ? ClickDirection = 0 :'';
  range.value = ClickDirection;
  BackgroundImg.style.background = Stickers[ClickDirection].cor;
  id.textContent = Stickers[ClickDirection].id;
  stickers.src = Stickers[ClickDirection].sticker;
});

BtLeft.addEventListener('click', () => {
  ClickDirection--;
  ClickDirection <= 0 ? ClickDirection = 0 :'';
  range.value = ClickDirection;
  BackgroundImg.style.background = Stickers[ClickDirection].cor;
  id.textContent = Stickers[ClickDirection].id;
  stickers.src = Stickers[ClickDirection].sticker;

});