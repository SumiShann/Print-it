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

const dots = document.querySelector('#banner .dots');

function addDots(){
	for (let i = 0; i < slides.length; i++) {
		let dot = document.createElement("div");
		dots.appendChild(dot);
		dot.classList.add('dot');
		if (i === 0){
			dot.classList.add("dot_selected");
		}
	};
}

addDots();


let dot = document.querySelectorAll('#banner .dots div');
const img = document.querySelector('#banner img');
const p = document.querySelector('#banner p');

let index = 0;


function dotLeft(){
	const dotSelected = document.querySelector('.dots .dot_selected');
	dotSelected.previousElementSibling.classList.add('dot_selected');
	dotSelected.classList.remove('dot_selected');
}

function imageChange(){
	img.setAttribute('src', ['assets/images/slideshow/'+ slides[index].image]);
	p.innerHTML = slides[index].tagLine;
}

document.querySelector('#banner .arrow_left').addEventListener('click', function(event){
	event.stopPropagation();
	const dotSelected = document.querySelector('.dots .dot_selected');
	if (index === 0){
		index = slides.length - 1;
		imageChange();
		dotSelected.classList.remove('dot_selected');
		dots.lastElementChild.classList.add('dot_selected');
	} else {
		index--;
		dotLeft();
		imageChange();
	}
});

function dotRight(){
	const dotSelected = document.querySelector('.dots .dot_selected');
	dotSelected.nextElementSibling.classList.add('dot_selected');
	dotSelected.classList.remove('dot_selected');
}

document.querySelector('#banner .arrow_right').addEventListener('click', function(event){
	event.stopPropagation();
	const dotSelected = document.querySelector('.dots .dot_selected');
	if (index === slides.length -1){
		index = 0;
		imageChange();
		dotSelected.classList.remove('dot_selected');
		dots.firstElementChild.classList.add('dot_selected');
	} else {
		index++;
		dotRight();
		imageChange();
	}
});