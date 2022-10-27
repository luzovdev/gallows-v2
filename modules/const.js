const arrWords = ['яблоко', 'груша', 'банан', 'киви', 'арбуз'];
export let randWord = arrWords[Math.floor(Math.random() * arrWords.length)];
export const arrWordForRandom = randWord.split('');
export const dashes = arrWordForRandom.map(item => item = '_');

export const dashesNode = document.getElementById('dashes');
export let inputNode = document.getElementById('input-id');
export let btn = document.getElementById('btn');

export const resultBlock = document.getElementById('result');
export const textResult = document.getElementById('textResult');
export const restartBtn = document.getElementById('restart');
export const gameWrapper = document.getElementById('gameWrapper');
