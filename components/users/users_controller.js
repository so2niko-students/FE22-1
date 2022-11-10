import Publisher from "../Publisher.js";
import UsersModel from "./users_model.js";
import UsersView from "./users_view.js";

export default class UsersController{
    constructor(){
        this.model = new UsersModel();
        this.view = new UsersView();
        Publisher.subscribe('UDPATE_MESSAGES', this.handleUpdate);
    }

    handleUpdate = (msgs) => {
        console.log(msgs);
    }

}