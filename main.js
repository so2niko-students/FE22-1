class Car{
    static count = 0;
    static elements = [];
    #engine;
    #body;

    constructor(engine, body, color, kpp, mileage){
        this.engine = engine;
        this.body = body;
        this.color = color;
        this.kpp = kpp;
        this.mileage = mileage;
        Car.count++;
        Car.elements.push(this);
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

    signal(){
        console.log('Bi-bi');
    }

    get parent(){
        return this;
    }
}

//объем двигателя, кузов, цвет, тип КПП, пробег

const c1 = new Car(23, 'wAgoN', [123, 33, 10], 554, 34, 546);
console.log(c1);
console.log(c1.colorRGB, c1.colorHEX);
// c1.signal();


class FireCar extends Car{
    #crew;
    #tank;
    #stairs;

    constructor(engine, body, color, kpp, mileage, crew, tank, stairs){
        //Создать просто машину
        super(engine, body, color, kpp, mileage);
        this.#crew = crew;
        this.#tank = tank;
        this.#stairs = stairs;
    }

    signal(){
        super.signal();
        console.log('Uauauaua');
    }
}


// f.signal();

class GameFireCar extends FireCar{
    signal(){
        console.log('super.signal()');
        super.signal()
        console.log('parent', this.parent);
    }
}

const f2 = new GameFireCar(23, 'wAgoN', [123, 33, 10], 554, 34, 6, 4000, 30);

f2.signal();


const f = new FireCar(23, 'wAgoN', [123, 33, 10], 554, 34, 6, 4000, 30);
console.log(f);

console.log(Car.count);
console.log(Car.elements);