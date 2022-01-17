const progressWrapper = document.querySelector('.progress-wrapper');
const progress = document.querySelector('.progress');
const header = document.querySelector('h2');
function runProgress(from, to){
  progress.style.right = `${100-from}%`;
  const interval = setInterval(() => {
    if(progress.style.right !== `${100-to}%`){
    progress.style.right = `${100-(++from)}%`;
    header.innerHTML = from + '%';
    }else{
      clearInterval(interval);
    }
  }, 50);
}

runProgress(0, 100);