const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () {
    const res = await fetch("https://picsum.photos/v2/list?limit=100");
    const images = await res.json();
    selectRandomImage(images);
};


//pull a random whole number will be the index of the random image.
const selectRandomImage = function(images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    displayImage(randomImage);
};

const displayImage = function (randomImage){
    const author = randomImage.author;
    const imageAddress = randomImage.download_url;
    authorSpan.innerText = author;
    imgDiv.classList.remove("hide");
    img.setAttribute("src", imageAddress);
    console.log(imageAddress);

};

button.addEventListener("click", function(){
    getImage();
});

