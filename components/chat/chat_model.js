export default class ChatModel{
    url = 'https://api.telegram.org/bot5689472337:AAHG0BXmRws7qqvkbv6AYBe4pFFrnlT4p50/';
    urlUpd = `${ this.url }getUpdates`;
    interval = null;
    lastID = null;

    constructor(controllerHandleUpdate){
        this.controllerHandleUpdate = controllerHandleUpdate;
    }

    start = () => {
        if(!this.interval){
            this.interval = setInterval(() => {
                fetch(this.urlUpd).then(r => r.json()).then(this.handleUpdate);
            }, 1000);
        }
    }

    handleUpdate = ({result}) => {
        //TODO: Сделать запрос с аттрибутом offset
        const id = result.slice(-1)[0].update_id;
        if(id == this.lastID) return;
        
        this.lastID = id;

        this.rawMessages = result;

        this.messages = result.map(({ update_id, message }) => ({
                id : update_id,
                text : message.text ?? message.sticker?.emoji ?? 'gif',
                date : message.date,
                time : this.formatTime(message.date),
                user : `${ message.from?.first_name || '' } ${ message.from?.last_name || '' }`.trim()
            }));

        console.log(this.messages);
        this.controllerHandleUpdate(this.messages, this.rawMessages);

    }

    formatTime = date => {
        const d = new Date(date * 1000);
        return `${ d.getHours() }:${ d.getMinutes() }:${ d.getSeconds() }`;
    }    
}
