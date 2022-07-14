class Marker{
    regExpSpace = /\s/g;
    WORD_INK_COUNT = .5;
    constructor(ink = 100, color = 'black'){
        this.ink = ink;
        this.color = color;
    }

    set ink(value){
        if(value >= 0 && value <= 100){
            this._ink = value;
        }else{
            this._ink = 0;
            console.warn(`Expect Ink property as Number in range [0,100]. Result: ${ value }`);
        }
    }

    print(text){
        const countedInk = text.replace(this.regExpSpace, '').length * this.WORD_INK_COUNT;
        let resultText = text;
        if(this._ink > countedInk){
            this._ink -= countedInk;
        }else{
            resultText = '';
            for(let i = 0; this._ink >= this.WORD_INK_COUNT; i++){
                resultText += text[i];
                this._ink -= this.regExpSpace.test(text[i]) ? 0 : this.WORD_INK_COUNT;
            }
        }
        this.#printText(resultText);
    }

    #printText(text){
        console.log(`%c${ text }`, `color: ${ this.color }`);
    }


}

const m = new Marker(4.5, 'green');
console.log(m);
m.print('hello');
m.print('hello');