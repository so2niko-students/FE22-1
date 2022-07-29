class Timer{
    timerID = 0;
    BUTTON_NAMES = {
        START : 'START',
        STOP : 'STOP'
    };
    DOM = {
        button : document.querySelector('.timerTrigger'),
        display : document.querySelector('.timerDisplay')
    };

    constructor(){
        // this.DOM.button.addEventListener('click', () => this.conductor); //! ПУТЬ 1: решение проблемы подмены контекста
        this.DOM.button.addEventListener('click', this.conductor.bind(this));//! ПУТЬ 3: решение проблемы подмены контекста
        // this.DOM.button.addEventListener('click', this.conductor);
    }

    conductor(){//подмена контекста
    // conductor = () => {//подмена контекста //! ПУТЬ 2: решение проблемы подмены контекста
        !this.timerID ? this.start() : this.stop();
    }

    start(){
        this.DOM.button.textContent = this.BUTTON_NAMES.STOP;
        this.timerID = setInterval(this.tick, 100);
        this.timeStart = new Date();
    }

    stop(){
        this.DOM.button.textContent = this.BUTTON_NAMES.START;
        clearInterval(this.timerID);
        this.timerID = 0;
    }

    tick = () => {
        const time = new Date();
        const timeShift = time - this.timeStart;
        const nT = new Date(timeShift);
        const ms = nT.getMilliseconds();
        const s = nT.getSeconds();
        const m = nT.getMinutes();
        this.DOM.display.textContent = `${m}:${s}:${ms}`;
    }

    toString(){
        return 'Ahahaha';
    }
}

const timer = new Timer();
// timer.prototype.toString = () => 'ohohoho';

console.log(Date.now());