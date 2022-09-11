const imgUrl = "https://dog.ceo/api/breeds/image/random";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const randomBreedUrl = "https://dog.ceo/api/breed/replace/images/random";

fetch(imgUrl)
.then(function(response){
return response.json(); 
})
.then(function(data){
    const img = document.createElement('img');
    img.src = data.message;
    img.alt = "Doggo image";
    img.classList.add = "randomBreedImg"
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
        imgToReplace.replaceChild(img, imgToReplace.lastChild);
       document.querySelector(".emoji").style.display = "none";
    })
})
