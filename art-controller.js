import ArtModel from "./art-model.js";

export default class ArtController{
     
    constructor(){
        this.model = new ArtModel(this.onLoad);

        this.model.getRandomObject();
    }

    onLoad = () => {

    }
}