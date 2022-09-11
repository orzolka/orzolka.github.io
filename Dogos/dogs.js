const imgUrl = "https://dog.ceo/api/breeds/image/random";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

fetch(imgUrl)
.then(function(response){
return response.json(); 
})
.then(function(data){
    const img = document.createElement('img');
    img.src = data.message;
    img.alt = "Doggo image";
    document.querySelector(".container").appendChild(img)
})


fetch(breedUrl).then(function(response){
    return response.json();
})
.then(function(data){  
    let breedArr = Object.keys(data.message);
    for(i=0; i<breedArr.length; i++){
        const option = document.createElement('option');
        option.value = breedArr[i];
        option.innerText = breedArr[i];
        document.querySelector("#breed").appendChild(option);
    }
    })

document.querySelector("#breed").addEventListener('change',function(event){
   let selectedBreed = event.target.value;
   const randomBreedUrl = "https://dog.ceo/api/breed/replace/images/random";
   let selectedBreedUrl = randomBreedUrl.replace("replace",selectedBreed);
   document.querySelector(".emoji").style.display = "block";
   fetch(selectedBreedUrl)
   .then(function(response){
    return response.json();
   })
    .then(function(data){
        const imgToReplace = document.querySelector(".container")
        const img = document.createElement('img');
        img.src = data.message;
        img.alt = "Image of a dog of selected breed";
        imgToReplace.replaceChild(img, imgToReplace.firstElementChild);
        document.querySelector(".emoji").style.display = "none";
    })
})


const loadingEmoji = function(){
    document.addEventListener("DOMContentLoaded", () => {
        alert("Loaded!")
    })}