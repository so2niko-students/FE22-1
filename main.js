document.cookie = "username=John DoeQw";
document.cookie = "username=hahahahaah=ha";
document.cookie = "n=John Doe";
document.cookie = "q2=Jo";

console.log(document.cookie);


class Cookie{
    //Считать Все Куки
    static all(type = 'object'){
        const cooArr = document.cookie.split('; ');

        const cookie = type === 'object' ? Cookie.#parseToObj(cooArr) : Cookie.#parseToArr(cooArr);

        return cookie;
    }

    static #getKeyVal(keyval){
        const eqInd = keyval.indexOf('=');
        const key = keyval.slice(0, eqInd);
        const val = keyval.slice(eqInd + 1);

        return [key, val];
    }

    static #parseToObj(arr){
        return arr.reduce((acc, el) => {
            const [ key, val ] = Cookie.#getKeyVal(el);
            
            acc[key] = val;
            
            return acc;
        }, {});
    }
    static #parseToArr(arr){
        return arr.map(Cookie.#getKeyVal);
    }

    //Считать Куки по ключу
    static get(key = 'name'){
        const cooObj = Cookie.all();
        
        return cooObj[key];
    }

    //Создать/перезаписать Куки
    static set(key, val, exdays = 0){
        let expires = '';
        if(exdays){
            const d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            expires = ";expires=" + d.toUTCString();
        }

        const str = `${ key }=${ val }${ expires }`;
        document.cookie = str;
        
        return true;
    }

    //Удалить Куки
    static delete(key){
        Cookie.set(key, '');
    }
}


console.log(Cookie.all());
console.log(Cookie.all(2323));
console.log(Cookie.get('name'));
console.log(Cookie.get('username'));
console.log(Cookie.get('n'));
console.log(Cookie.set('n22', 'Hello 22 days', 22));