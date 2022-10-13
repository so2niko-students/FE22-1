export default class ArtModel{
    URL_ALL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';
    URL_ONE = id => `${ this.URL_ALL }/${ id }`;
    objectsID = [];

    constructor(callback){
        this.onLoad = callback;
    }

    getRandomObject = () => {
        if(!this.objectsID.length){//First load
            this.getAllObjects();
        }
    }

    getAllObjects = () => {

        //this.getOneObject();
    }

    getOneObject = () => {
        const id = thia.randomID();
        const url = this.URL_ONE(id);
        this.ajax(url, this.parseObject);
    }

    randomID = () => {
        const len = this.objectsID.length;
        return this.objectsID[Math.floor(Math.random() * len)];
    }

    parseObject = () => {

    }
}