let runningTotal = 0;
let buffer = "0"; //this is what's on the screen = always string
let previousOperatror = null; //to keep previous action like + - /
const screen = document.querySelector('.screen');



function buttonClick(val){
    if (isNaN(val)){
    handleSymbol(val)
    }
    else{
    handleNumber(val)
    }
    screen.innerText = buffer;
}

function handleNumber(numberString){
  if (buffer === "0"){
buffer = numberString;
  }
else{
  buffer = buffer + numberString;
  }
}

function handleSymbol(symbol){
switch(symbol){
  case 'C':
    buffer = '0';
    runningTotal = 0;
    break;
  case '←':
    if(buffer.length===1){
      buffer = '0';
    }else{
   buffer = buffer.slice(0,(buffer.length-1))
    break;}
  case '=':
    flushOperation(parseInt(buffer));
    previousOperatror = null;
    buffer = runningTotal;
    runningTotal = 0;
    break;
  case '−':
  case '+':
  case '÷':
  case '×':
    handleMath(symbol);
    break;
} 
}

function handleMath(symbol){
  if (buffer === '0'){
    return; //do nothing, get out of this function
  }
  const intBuffer = parseInt(buffer);
  if(runningTotal === 0){
    runningTotal = intBuffer;
  }else{
    flushOperation(intBuffer);
  }
  previousOperatror = symbol;
  buffer = '0' //keeping it simple
}


function flushOperation(intBuffer){
  if(previousOperatror ==='+'){
    runningTotal = runningTotal + intBuffer;
  }
  else if(previousOperatror ==='−'){
      runningTotal = runningTotal - intBuffer;
  }
  else if(previousOperatror ==='×'){
    runningTotal = runningTotal * intBuffer;
  }
  else if(previousOperatror ==='÷'){
    runningTotal = runningTotal / intBuffer;
  }
}

function init() {
document.querySelector('.calc-buttons') 
    .addEventListener('click', function(event){
       buttonClick(event.target.innerText)
})
}

init();