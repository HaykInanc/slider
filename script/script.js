const data = [];
let slide_index = 0;

data.push({
	image: 'https://images.nplus1.ru//images/2018/07/13/4418f0ba310abacf0794c9a6ebf6fd85.jpg',
	text: 'привет друзья 1'
})

data.push({
	image: 'https://images.nplus1.ru//images/2018/07/13/4418f0ba310abacf0794c9a6ebf6fd85.jpg',
	text: 'привет друзья 2'
})

data.push({
	image: 'https://images.nplus1.ru//images/2018/07/13/4418f0ba310abacf0794c9a6ebf6fd85.jpg',
	text: 'привет друзья 3'
})

data.push({
	image: 'https://images.nplus1.ru//images/2018/07/13/4418f0ba310abacf0794c9a6ebf6fd85.jpg',
	text: 'привет друзья 4'
})

data.push({
	image: 'https://images.nplus1.ru//images/2018/07/13/4418f0ba310abacf0794c9a6ebf6fd85.jpg',
	text: 'привет друзья 5'
})

data.push({
	image: 'https://images.nplus1.ru//images/2018/07/13/4418f0ba310abacf0794c9a6ebf6fd85.jpg',
	text: 'привет друзья 6'
})

const rootElem = document.querySelector('#root');
const frameElem = document.createElement('div');
const filmElem = document.createElement('div');

const triggerLeft = document.createElement('div');
const triggerRight = document.createElement('div');


triggerLeft.classList.add('trigger');
triggerRight.classList.add('trigger');
frameElem.appendChild(triggerLeft);
frameElem.appendChild(triggerRight);
triggerRight.style.right = 0;
triggerLeft.innerText = '<';
triggerRight.innerText = '>';


filmElem.style.position = 'absolute';
frameElem.style.position = 'relative';


frameElem.classList.add('frame');
filmElem.classList.add('film');

frameElem.appendChild(filmElem);
rootElem.appendChild(frameElem);




const width = frameElem.offsetWidth;
const height = frameElem.offsetHeight;

const cards = data.map(elem=>{
	const card = document.createElement('div');
	const text = document.createElement('p');
	card.classList.add('card');
	card.style.width = width+'px';
	card.style.height = height+'px';
	card.style.backgroundImage = `url("${elem.image}")`
	card.style.backgroundSize = 'cover';
	text.style.color = 'white';
	text.innerText = elem.text;
	card.appendChild(text);
	return card
})

cards.forEach(elem=>filmElem.appendChild(elem));

const changeSlide = ()=>{
	filmElem.style.left = `-${slide_index*width}px`;
}

changeSlide()
triggerLeft.addEventListener('click', ()=>{
	if (slide_index == 0) return 
	slide_index--; changeSlide()
});
triggerRight.addEventListener('click', ()=>{
	if (slide_index == data.length-1) return 
	slide_index++; changeSlide()
});




