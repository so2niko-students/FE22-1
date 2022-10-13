function ajax(url, callback){
    const aj = new XMLHttpRequest();
    aj.onload = () => {
        callback(aj.responseText);
    }

    aj.open('GET', url);

    aj.send();
}

const API_URL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';
let OBJS;
const IMG = document.querySelector('.img-random');

function init(){
    ajax(API_URL, (t) => {
        const r = JSON.parse(t);
        console.log(r.objectIDs);
        OBJS = r.objectIDs;

        getRandomArt();
    });
}

function getRandom(max){
    return Math.floor(Math.random() * max);
}

function getRandomArt(){
    const id = OBJS[getRandom(OBJS.length)];
    const url = `${ API_URL }/${ id }`;
    ajax(url, (t) => {
        const r = JSON.parse(t);
        console.log(r);
        renderImage(r);
    })
}

function renderImage(d){
    IMG.src = d.primaryImage;
    IMG.setAttribute('alt', d.title);
}

document.querySelector('.btn-random').addEventListener('click', getRandomArt);


//При загрузке страницы - обращаюсь к API и выгружаю всю базу объектов. Сохраняю ее в памяти

//Выбираю случайный объект из памяти и делаю запрос на API

//Отображаю полученный объект и разблокирую кнопку "РАНДОМ"

//Слушаю кнопку "РАНДОМ" для загрузки и отображения следующего случайного произведения искусства

//Model 
//+getObjects
//+getArt

//View
//+render

//Controller
//+onClick
//+onLoadArt

init();


function ajaxPOST(url, data, callback){
    const aj = new XMLHttpRequest();
    aj.onload = () => {
        callback(aj.responseText);
    }

    aj.open('POST', url);
    aj.setRequestHeader('Content-Type', 'multipart/form-data; boundary=something');

    aj.send(data);
}

const urlShort = 'https://cleanuri.com/api/v1/shorten';
const dataShort = 'url=https://github.com/so2niko-students/FE22-1/blob/j19/README.md';
ajaxPOST(urlShort, dataShort, (d) => {
    console.log(d);
});