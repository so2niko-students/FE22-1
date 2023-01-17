import { useState, useEffect } from 'react';
import Random4ik from './random4ik';

const Hooks = () => {
    const [c, setC] = useState(0);
    const cc = useState(100);
    const [data, setData] = useState({ c : 0, cc : 100 });
    const [tenClick, setTenClick] = useState(0);

    let i = 0;

    const counter = () => {
        i++;
        // setC(c + 1);
        // cc[1](cc[0] - 1);

        // data.c++;
        // data.cc--;

        //скопируйте объект 

        // const newData = {...data};
        
        // const newData = {};
        // newData.c = data.c;
        // newData.cc = data.cc;

        // const newData = Object.entries(data).reduce((acc, [key, val]) => {
        //     acc[key] = val;
        //     return acc;
        // }, {});

        // console.log(Object.entries(data));
        // console.log(newData);

        // const newData = JSON.parse(JSON.stringify(data));

        const newData = Object.assign({}, data);

        //изменить данные в объекте
        newData.c++;
        newData.cc--;

        if(!(newData.cc % 10)){
            setTenClick(tenClick + 1);
        }

        //записать объект через собственный метод
        setData(newData);
    }

    useEffect(() => {
        console.count('useEffect');
    });

    useEffect(() => {
        console.count('useEffect listening tenClick');
    }, [tenClick]);

    useEffect(() => {
        //выполнится только 1 раз при загрузке страницы
    }, []);

    return (
      <div>
        <p>Вы кликнули {c} раз(а). I = { i }</p>
        <p><mark>CC</mark> осталось <strong>{ cc[0] }</strong></p>
        <p>{data.c} : {data.cc}</p>
        <button onClick={counter}>
          Нажми на меня
        </button>
        <hr />
        <Random4ik />
      </div>
    );
}


export default Hooks;