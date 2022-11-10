export default class ChatView{
    container = document.querySelector('.tg-bot-texts');

    constructor(){

    }

    render = (messages) => {
        const textStr = messages.reverse().map((msg) => this.getRow(msg)).join('');

        this.container.innerHTML = textStr;
    }

    getRow = ({ id, time, user, text }) => (`
<tr>
    <th scope="row">${ id }</th>
    <td>${ time }</td>
    <td>${ user }</td>
    <td>${ text }</td>
</tr>`)
}