function getClass(winLine){
    return `square  ${winLine?'winLine':''}`;
}

export default function Square({ value, onClick, winLine}) {
    return (
        <button 
            className={getClass(winLine)} 
            onClick={onClick}>
            {value}
        </button>
    );
}