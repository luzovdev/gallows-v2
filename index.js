import { arrWordForRandom, btn, dashes, inputNode, dashesNode ,randWord} from './modules/const.js';
import { showRandomDashes } from './modules/showDashes.js';
import { showErrorImage } from './modules/showErrorImage.js';
import {showResult} from './modules/showResult.js'

function game(arrCorrentLetters, arrCorrentAnswer) {
    let countFalse = 0;
    let arrOfResult = ['Победа',`Поражение, правильное слово ${randWord.toUpperCase()}`];
    showRandomDashes();
    btn.addEventListener('click',onBtnClick);
    function onBtnClick() {
        let numOfCorrentAnsw = 0;
        arrCorrentLetters.forEach((item, index) => {
            if (item === inputNode.value) {
                dashes[index] = inputNode.value;
                dashesNode.innerText = dashes.join(' ')
            }
        });
        for (let i = 0; i < arrCorrentLetters.length; i++) {
            if (arrCorrentLetters[i] === arrCorrentAnswer[i]) {
                numOfCorrentAnsw++;
                if (numOfCorrentAnsw === arrCorrentLetters.length) {
                   showResult(arrOfResult[0]);
                }
            }
        }

        if (!arrCorrentLetters.includes(inputNode.value)) {
            countFalse++
            showErrorImage(countFalse);
        }
        if (countFalse === 3) {
            btn.removeEventListener('click', onBtnClick);
            showResult(arrOfResult[1]);

        }

        inputNode.value = '';
    }
    
    inputNode.addEventListener('keydown',function(e){
        if (e.keyCode === 13){
            onBtnClick();
        }
    });
    
}
game(arrWordForRandom, dashes);