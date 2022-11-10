export default class Publisher{
    static #subscribes = {};

    static #check = (event) => {
        if(!Publisher.#subscribes[event]){
            Publisher.#subscribes[event] = [];
        }
    }

    static subscribe = (event, callback) => {
        Publisher.#check(event);

        Publisher.#subscribes[event].push(callback);
    }

    static notify = (event, info) => {
        Publisher.#check(event);

        Publisher.#subscribes[event].forEach(callback => callback(info));
    }
    //TODO: add unsubscribe method
}