const URLS = {
    IMG : 'https://picsum.photos/1000',
    QUOTE : 'https://the-dune-api.herokuapp.com/quotes'
}

const QUOTE_TITLE = document.querySelector('h2');

fetch(URLS.IMG).then(r => r.blob()).then(img => {
    console.log(img);
    const url = URL.createObjectURL(img);
    console.log(url);
    document.body.style.backgroundImage = `url(${ url })`;
});

fetch(URLS.QUOTE).then(r => r.json()).then(q => {
    console.log(q);
    QUOTE_TITLE.innerText = q[0].quote;
})