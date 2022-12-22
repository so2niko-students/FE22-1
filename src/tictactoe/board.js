import Square from "./square";

export default function Board({squares, winLine, onClick}) {
    const ARRAY_3 = [...Array(3)];
    
    const renderSquare = (i, winLine) => (<Square key={i} winLine={winLine} value={squares[i]} onClick={() => onClick(i)} />);
     
    return (
        <div>
            {ARRAY_3.map((x, i) => {
                return (
                    <div className = "board-row" key={i}>
                        {ARRAY_3.map((x, j) => renderSquare(i*3+j, winLine.includes(i*3+j)))}
                    </div>
                )}
            )}
        </div>
    );
}