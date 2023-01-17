// const stones = [
// 	{
// 		'name':'Almazik',
// 		'class':'almazik'
// 	},
// 	{
// 		'name':'Rubinchik',
// 		'class':'rubinchik'
// 	},
// 	{
// 		'name':'Topazik',
// 		'class':'topazik'
// 	},
// 	{
// 		'name':'Izumrudik',
// 		'class':'izumrudik'
// 	}
// ]

// let elements = [];

// const selected = new Map();
const audio = {};

function init() {
	audio.move = document.createElement('audio');
	audio.move.setAttribute('src','https://www.soundjay.com/buttons/button-43.mp3');
	audio.error = document.createElement('audio');
	audio.error.setAttribute('src','https://www.soundjay.com/buttons/button-10.mp3');
	audio.start = document.createElement('audio');
	audio.start.setAttribute('src','https://www.soundjay.com/free-music/midnight-ride-01a.mp3');
	// $('#startBtn').on('click', () => fillField());
}

// function generateStone() {
// 	const index = Math.floor(Math.random() * stones.length - 1 ) + 1;
// 	return stones[index];
// }

// function fillField() {
	
	// let num = 0;
	// for(let i=0; i<4; i++){
	// 	for(let j=0; j<4; j++){
	// 		const stone = generateStone();
	// 		const el = $(`<div class='${stone.class}' id='${i}${j}' data-num='${num}' data-i='${i}' data-j='${j}'></div>`);
	// 		elements.push(el);
	// 		num++;
	// 	}
	// }
	// renderField();
// }

function renderField() {
	// const field = $('#container');
	// elements.forEach((el)=> field.append(el));
	// field.find('div').on('click', (el)=>select(el));

	audio.start.play();
	setTimeout(()=>{audio.start.pause()},5000);
}

// function select(el) {
	// const target = el.target;
	// const selectedId = $(target).attr('id');

	// if(selected.get(selectedId)) {
	// 	selected.delete(selectedId);
	// }else{
	// 	selected.set(selectedId, $(target))
	// }

	// $(target).toggleClass('selected');

	// if(selected.size == 2){
	// 	move();
	// }	
// }

// function isMovable(I,J) {
// 	let movable = true;

// 	if( Math.abs(I[0] - I[1]) > 1 || Math.abs(J[0] - J[1]) > 1) {
// 		movable = false;	
// 	}

// 	return movable;
// }

// function move(){
// 	let I = [];
// 	let J = [];

// 	for (let [key, value] of selected) {
// 		I.push(value.data('i'));
// 		J.push(value.data('j'));
// 	}

// 	const el1 = selected.get(`${I[0]}${J[0]}`);
// 	const el2 = selected.get(`${I[1]}${J[1]}`);
// 	el1.removeClass('selected');
// 	el2.removeClass('selected');
// 	selected.clear();
// 	if( isMovable(I,J) ){

// 		const class1 = el1.attr('class');
// 		const class2 = el2.attr('class');
		
// 		el2.attr('class', class1);
// 		el1.attr('class', class2);
		
		audio.move.play();
	// }  else {
		audio.error.play();
	// }
// }