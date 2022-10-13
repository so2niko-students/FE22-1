const HEADERS = ['request not initialized',
    'server connection established',
    'request received',
    'processing request',
    'request finished and response is ready'];

const testConnection = (url) => {
    //Запрос через HTTP для передачи XML
    const ajax = new XMLHttpRequest();//! Создание объекта для отправки и получения данных - AJAX

    //! Настройка
    //? Настроить поведение при получении ответа с сервера
    //readystatechange
    ajax.addEventListener('readystatechange', () => {
        const state = ajax.readyState;
        const status = ajax.status;
        const text = ajax.responseText;

        console.log(`%c${ Date.now() }
        readystatechange: 
        state: ${ state }
        state: ${ HEADERS[state] }
        status: ${ status }
        text: ${ text }`, `color: red;`);
    });

    //load
    ajax.addEventListener('load', () => {
        console.log(`${ Date.now() }
        load:
        text: ${ ajax.responseText }`);
    });
    console.log(Date.now(), 'before open');
    //? Настроить способ отправки данных на сервер
    ajax.open('GET', url);

    console.log(Date.now(), 'before send');
    //! Отправка
    ajax.send();
    
    console.log(Date.now(), 'after send');
}

//CRUD
//Create - POST
//Read - GET
//Update - UPDATE/PUT
//Delete - DELETE

// testConnection('./data.json');
testConnection('https://randomuser.me');

// url?user=11