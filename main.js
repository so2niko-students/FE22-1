//1. Выгружаю данные с файла
const DATA = {
    URL : './data.json',
    USER : {}
};

fetch(DATA.URL).then(r => r.json()).then((d) => {
    DATA.USER = d;
    renderUserInfo(d);
});

//2. Отрендерить данные на странице
function renderUserInfo({ name, email, dob, password }){
    const html = `<div class="name">${ name }</div>
    <div class="password">${ password }</div>
    <div class="dob">${ dob }</div>
    <div class="mail">${ email }</div>`;

    document.querySelector('.info-user').innerHTML = html;
}

//3. Отрендерить форму при нажатии на кнопку
const USER_FORM = {
    selectors : ['inp-name', 'inp-password', 'inp-dob', 'inp-email']
}

USER_FORM.elements = USER_FORM.selectors.reduce((acc, s) => {
    const name = s.split('-').slice(-1);
    acc[name] = document.querySelector(`.${ s }`);
    return acc;
}, {});

const modal = document.querySelector('.modal');

document.querySelector('.btn-change').addEventListener('click', () => {
    modal.classList.remove('hide');
    Object.entries(USER_FORM.elements).forEach(([key, val]) => {
        val.value = DATA.USER[key];
    });
});

//4. Сохранение данных после редактирования
document.querySelector('.btn-save').addEventListener('click', () => {
    modal.classList.add('hide');
    Object.entries(USER_FORM.elements).forEach(([key, val]) => {
        DATA.USER[key] = val.value;
    });

    renderUserInfo(DATA.USER);
});