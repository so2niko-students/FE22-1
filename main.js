const DOM = {
    btnFind : document.querySelector('.btn-find'),
    inpArt : document.querySelector('.inp-artist'),
    main : document.querySelector('main')
}

const URL = {
    artist : 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=',
    object : 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'
}

const DATA = [];

const MAX_REQUESTS = 50;

DOM.btnFind.addEventListener('click', findArtist);

async function findArtist(){
    DOM.main.innerHTML = '';
    const artistName = DOM.inpArt.value;
    const artistURL = `${ URL.artist }${ artistName }`;

    const r = await fetch(artistURL);
    const d = await r.json();

    console.log(d);
    const howTimes = d.total / MAX_REQUESTS;
    for(let i = 0; i <= howTimes; i++){
        const from = i * MAX_REQUESTS;
        const to = from + MAX_REQUESTS;
        const next50 = d.objectIDs.slice(from, to);

        setTimeout(() => {
            console.log('REQUEST: ', i);
            makeMultiRequests(next50, artistName);
        }, i * 2000);
    }    
}

async function makeMultiRequests(ids, artistName){
    console.log(ids);
    const artistRE = new RegExp(artistName, 'ig');
    const promises = ids.map(id => {
        const objectURL = `${ URL.object }${ id }`;
        return fetch(objectURL).then(r => r.json());
    });

    const datas = await Promise.all(promises);
    const datasFiltered = datas.filter(({ artistDisplayName, primaryImage }) => artistRE.test(artistDisplayName) && primaryImage);
    console.log(datas);
    console.log(datasFiltered);

    DOM.main.innerHTML += datasFiltered.reduce((html, art) => `${ html }${ render(art) }`, '');
    DATA.push(...datasFiltered);
}

function render({ primaryImage, title }){
    return `
<div class="card" style="width: 18rem;">
    <img src="${ primaryImage }" class="card-img-top" alt="...">
    <div class="card-body">
        <p class="card-text">${ title }</p>
    </div>
</div>
    `;
}