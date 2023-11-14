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

let currentSlide = 0;

let arrow_right = document.querySelector(".arrow_right")
arrow_right.addEventListener("click",function () {
	changeSlide(1)
	console.log("vous avez cliqué sur le bouton")
	//alert("Salut à droite!")
});
let arrow_left = document.querySelector(".arrow_left")
arrow_left.addEventListener("click",function () {
	changeSlide(-1)
	console.log("vous avez cliqué sur le bouton")
	//alert("Salut (à gauche)!")
});

let div = `
		<div class="dot_selected dot" id="image0"></div>
		<div class="dot" id="image1"></div>
		<div class="dot" id="image2"></div>
		<div class="dot" id="image3"></div>
`
let dots = document.querySelector(".dots")
dots.innerHTML = div

const NombrePoints = slides.length
console.log(NombrePoints)
//résultat : 4

//let bannerChange = document.getElementById('mainBanner')
//bannerChange.setAttribute('src', './assets/images/slideshow/slide2.jpg')


function changeSlide (sens) {

	let oldSlide = currentSlide

	currentSlide = currentSlide + sens;
	if (currentSlide > 3) {
		currentSlide = 0
	}
	if (currentSlide < 0) {
		currentSlide = 3
	}
	document.getElementById("mainBanner").src= "./assets/images/slideshow/" + slides[currentSlide].image;
	document.getElementById("tagLine").innerHTML = slides[currentSlide].tagLine
	console.log(slides[currentSlide])
	applyNewClass(true, currentSlide)
	applyNewClass(false, oldSlide)

}

function applyNewClass(shouldAdd, slide) {
	let doc
	if (slide === 0) {
	  doc = document.getElementById("image0")
	} else if (slide === 1) {
	  doc = document.getElementById("image1")
	} else if (slide === 2) {
	  doc = document.getElementById("image2")
	} else {
	  doc = document.getElementById("image3")
	}
	
	if (shouldAdd) {
	  doc.classList.add("dot_selected")
	} else {
	  doc.classList.remove("dot_selected")
	}
  }
//for (let i = 0; i <= 3; i++ ) {
//	document.getElementById("image0")
//}

// faire les dots en innerHTML

//

