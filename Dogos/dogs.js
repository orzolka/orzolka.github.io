const imgUrl = "https://dog.ceo/api/breeds/image/random";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
 let fifek ="https://images.dog.ceo/breeds/dachshund/puppy-1006024_640.jpg"

fetch(imgUrl)
.then(function(response){
return response.json(); 
})
.then(function(data){
    const img = document.createElement('img');
    img.src = data.message;
    img.alt = "Doggo image";
    document.querySelector(".doggos").appendChild(img)
})


fetch(breedUrl).then(function(response){
    return response.json();
})
.then(function(data){  
    let breedArr = Object.keys(data.message);
    for(i=0; i<breedArr.length; i++){
        const option = document.createElement('option');
        option.value = breedArr[i];
        option.text = breedArr[i];
        document.querySelector("#breed").appendChild(option);
    }
    })

document.querySelector("#breed").addEventListener('change',function(event){
   let selectedBreed = event.target.value;
   const randomBreedUrl = "https://dog.ceo/api/breed/replace/images/random";
   let selectedBreedUrl = randomBreedUrl.replace("replace",selectedBreed);
   fetch(selectedBreedUrl)
   .then(function(response){
    return response.json();
   })
    .then(function(data){
        const imgToReplace = document.querySelector(".doggos")
        const img = document.createElement('img');
        img.src = data.message;
        img.alt = "Image of a dog of selected breed";
        imgToReplace.replaceChild(img, imgToReplace.firstElementChild);
        console.log(imgToReplace.parentNode.children)
    })
})


