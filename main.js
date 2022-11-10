import ChatController from "./components/chat/chat_controller.js";
import UsersController from "./components/users/users_controller.js";

const url = 'https://api.telegram.org/bot5689472337:AAHG0BXmRws7qqvkbv6AYBe4pFFrnlT4p50/';

const images = new Set();

function getSticker(){
    const url = 'https://api.telegram.org/bot5689472337:AAHG0BXmRws7qqvkbv6AYBe4pFFrnlT4p50/getStickerSet?name=VikingAge';
    fetch(url).then(r => r.json()).then(d => console.log(d));
}

function getUnicUsers(d){
    const uUsers = new Map();
    d.forEach(el => uUsers.set(el.message.from.id, el.message.from));
    console.log(uUsers);
    const urlPhotos = `${ url }getUserProfilePhotos?user_id=`;
    uUsers.forEach(el => {
        const urlPhoto = `${ urlPhotos }${ el.id }`;
        fetch(urlPhoto).then(r=> r.json()).then(loadPhoto);
    });
}

function loadPhoto(r){
    console.log(r.result.photos);
    if(r.result.photos.length == 0) return;
    const file_id = r.result.photos[0][0].file_id;
    const r2 = `https://api.telegram.org/bot5689472337:AAHG0BXmRws7qqvkbv6AYBe4pFFrnlT4p50/getFile?file_id=${ file_id }`;
    fetch(r2).then(r => r.json()).then(d => {
        const path = d.result.file_path;
        const imgSRC = `https://api.telegram.org/file/bot5689472337:AAHG0BXmRws7qqvkbv6AYBe4pFFrnlT4p50/${ path }`;
        updatePhotos(imgSRC);
    })
}


function updatePhotos(src){
    const imagesDOM = document.querySelector('.images');
    images.add(src);
    imagesDOM.innerHTML = '';
    images.forEach(link => imagesDOM.innerHTML += `<img src="${ link }">`);
}


const chat = new ChatController();
const users = new UsersController();