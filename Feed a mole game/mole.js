
const molesAll = document.querySelectorAll(".mole")
let molesArr = Object.values(molesAll);



// Choose random mole, display for random n sec, hide after random n sec

function returnRandomMole(){
    let randomMole= Math.floor(Math.random()*(molesAll.length));
    return randomMole;  
}
const show = function(moleToShow){
    let randomTime =(Math.random()*5000) + 2000;
        molesArr[moleToShow].style.display = "block" 
        setTimeout(() => {
            hide(moleToShow);
        }, randomTime);
        }
                  
const hide = function(moleToHide){
        molesArr[moleToHide].style.display = "none" 
        }
  let runAgainAt = Date.now();
  function showHide() {
    if (Date.now() > runAgainAt) {
        let randomTime = Math.random()*5000
        show(returnRandomMole());
         runAgainAt = Date.now() + randomTime;
    }
    requestAnimationFrame(showHide);
  }
  requestAnimationFrame(showHide);


  

//Display them for n to max 4 (random) sec and then hide


//Set some random time to display another batch of moles




