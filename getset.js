class Car{
    #engine;
    #body;

    constructor(engine, body, color, kpp, mileage){
        this.engine = engine;
        this.body = body;
        this.color = color;
        this.kpp = kpp;
        this.mileage = mileage;
    }

    set engine(eng){
        //дробное или целое, больше 0, меньше 100
        const MIN = 0;
        const MAX = 100;
        if(eng > MAX || eng <= MIN || isNaN(eng) || !eng){
            console.warn('Engine must be a number between 0 and 100');
            return;
        }
        this.#engine = eng;
    }

    set body(type){
        const TYPES = ['cabriolet', 'sedan', 'suv', 'hatchback', 'wagon', 'track'];
        if(typeof type != 'string' || !type.length){
            console.warn('Body type must be a string type');
            return;
        }
        
        const typeLow = type.toLowerCase();
        if(!TYPES.includes(typeLow)){
            console.warn(`${ type } is not registered type of car. Please, use types: ${ TYPES.join(', ') }`);
            return;
        }

        this.#body = typeLow;
    }

    get colorRGB(){
        return `rgb(${ this.color.join(',') })`;
    }

    get colorHEX(){
        return this.color.reduce((a, c) => `${ a }${ c.toString(16).replace(/^(\w)$/g, '0$1') }`, '#');
    }
}

//объем двигателя, кузов, цвет, тип КПП, пробег

const c1 = new Car(23, 'wAgoN', [123, 33, 10], 554, 34, 546);
console.log(c1);
console.log(c1.colorRGB, c1.colorHEX);
