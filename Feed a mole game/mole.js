
const molesAll = document.querySelectorAll(".mole")
let molesArr = Object.values(molesAll);



// Choose random mole, display for random n sec, hide after random n sec


const show = function(moleToShow){
        molesArr[moleToShow].style.display = "block" 
        }
        
        
const hide = function(moleToHide){
        molesArr[moleToHide].style.display = "none" 
        }




/* const hide = function(moleToHide){
    let showTime = (Math.floor((Math.random()*3)+2))*1000;
    if(Date.now()>(Date.now() + showTime)){

        moleToHide.style.display = "none"
    }
    } */

setInterval(function(){
    let randomMole= Math.floor(Math.random()*(molesAll.length));
    let randTime = (Math.floor(Math.random()*4000)) + 2000;
    show(randomMole);
    setInterval(function(){
        hide(randomMole)
    },randTime)

    }
    ,(1000*Math.floor(Math.random()*4))
 
) 







//hide(molesArr[2])

//Display them for n to max 4 (random) sec and then hide


//Set some random time to display another batch of moles




