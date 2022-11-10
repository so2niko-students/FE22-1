import ChatModel from "./chat_model.js";
import ChatView from "./chat_view.js";
import Publisher from "../Publisher.js";

export default class ChatController{
    constructor(){
        this.model = new ChatModel(this.handleUpdate);
        this.view = new ChatView();

        this.model.start();
    }

    handleUpdate = (messages, rawMessages) => {
        Publisher.notify('UDPATE_MESSAGES', rawMessages);
        this.view.render(messages);
    }

}