function getDescr(history, step){
    return history[step].move ?
    `Go to move #${step} ${history[step].move}` :
    'Go to game start';
}

export default function History({ascHistory, history, onClick}) {
    const moves = [...Array(history.length).keys()];
    ascHistory || moves.reverse();   
    
    return (
        moves.map((step) => (
                <li key={step}>
                    <button 
                        onClick={() => onClick(step)}>
                    {getDescr(history, step)}
                    </button>
                </li>
            )
        )
    )
}