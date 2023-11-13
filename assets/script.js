const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const slidesImages = ["slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.jpg" ]

let currentSlide = 0;

let arrow_right = document.querySelector(".arrow_right")
arrow_right.addEventListener("click",function () {
	console.log("vous avez cliqué sur le bouton")
	//alert("Salut à droite!")
});
let arrow_left = document.querySelector(".arrow_left")
arrow_left.addEventListener("click",function () {
	console.log("vous avez cliqué sur le bouton")
	//alert("Salut (à gauche)!")
});

const NombrePoints = slides.length
console.log(NombrePoints)
//résultat : 4

//let bannerChange = document.getElementById('mainBanner')
//bannerChange.setAttribute('src', './assets/images/slideshow/slide2.jpg')


function changeSlide (sens) {
	currentSlide = currentSlide + sens;
	if (currentSlide > 3)
		currentSlide = 0
	if (currentSlide < 0)
		currentSlide = 3
	document.getElementById("mainBanner").src= "./assets/images/slideshow/" + slidesImages[currentSlide];

}

let contenuP1 = "Tirages haute définition grand format <span>pour vos bureaux et events</span>";
let contenuP2 = "Grand choix de couleurs <span>de CMJN aux pantones</span>";
let contenuP3 = "Autocollants <span>avec découpe laser sur mesure</span>"

let p = document.querySelector(".tagLine")

