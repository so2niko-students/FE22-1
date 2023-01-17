import { useState } from 'react';
import Stat from './stat';

const DICE_MAX = 6;
const DICE_MIN = 1;

const random = (from, to) => {
    return Math.floor(Math.random() * (to - from + 1)) + from;
}

const Random4ik = () => {
    const [history, setHistory] = useState([]);

    const addHistory = () => {
        const r =  random(DICE_MIN, DICE_MAX);
        const newH = [...history, r];
        setHistory(newH);
    }

    const clearHistory = () => setHistory([]);
    
    return (
        <div>
            <p>Вы сгенерировали { history.slice(-1) }</p>
            <p>История: { history.toString() }</p>
            <button onClick={ addHistory }>Бросить кубик</button>
            <button onClick={ clearHistory }>Сбросить историю</button>
            <Stat history={ history } />
        </div>
    );
}

export default Random4ik;