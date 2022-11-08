const url = 'https://api.telegram.org/bot5689472337:AAHG0BXmRws7qqvkbv6AYBe4pFFrnlT4p50/getUpdates';
let lastID = '';

setInterval(() => {
    fetch(url).then(r => r.json()).then(d => render(d));
}, 1000);

function render(d){
    const data = d.result;
    const id = data.slice(-1)[0].update_id;
    if(id == lastID) return;
    lastID = id;
    const container = document.querySelector('.tg-bot-texts');

    const textStr = data.reverse().map((upd) => getRow(upd)).join('');

    container.innerHTML = textStr;

}

function getRow({ update_id, message }){
    const id = update_id;
    const text = message.text;
    const date = message.date;
    const user =`${ message.from?.first_name || '' } ${ message.from?.last_name || '' }`.trim();
    return `<tr>
        <th scope="row">${ id }</th>
        <td>${ date }</td>
        <td>${ user }</td>
        <td>${ text }</td>
    </tr>`;
}