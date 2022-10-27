import{resultBlock,textResult,gameWrapper,restartBtn} from './const.js'
export function showResult(res){
    setTimeout(() => {
        resultBlock.style.display = 'block';
        textResult.innerText = res;
        gameWrapper.style.display = 'none';
        restartBtn.addEventListener('click', () => location.reload());
    },500) 
}