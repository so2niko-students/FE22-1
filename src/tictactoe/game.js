import React, {useState} from "react";
import "./tictac.css";
import Board from "./board";
import ChangeHistoryOrderBtn from "./change-history-order-btn";
import History from "./history";

const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    const linesLen = lines.length;
    for (let i = 0; i < linesLen; i += 1) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return {'winner':squares[a], winLine:lines[i]};
        }
    }
    return null;
}

export default function Game() {
    const [history, setHistory] = useState([{squares:Array(9).fill(null)}]);
    const [xIsNext, setXIsNext] = useState(true);
    const [stepNumber, setStepNumber] = useState(0);
    const [ascHistory, setAscHistory] = useState(true); 

    const jumpTo = (step) => {
        setHistory(history.slice(0,step+1));
        setStepNumber(step);
        setXIsNext(!step%2);    
    }

    const handleClick = (i) => {
        if (winner || squares[i]) {
            return;
        }
        
        const newSquares = squares.slice();
        newSquares[i] = whoIsNext();
        const index = i + 1;
        const row = Math.ceil(index / 3);
        const col = index - (3 * (row - 1));
        setHistory([...history, {
            squares: newSquares,
            move: `(${col},${row})`
        }]);
        setXIsNext(!xIsNext);
        setStepNumber(history.length);
    }

    const whoIsNext = () => xIsNext ? 'X' : 'O';
    const squares = history[stepNumber].squares.slice();
    const winner = calculateWinner(squares);
    const isDraw = squares.every((e) => e);
    // const statuses = {
    //     'nullfalse' : `Next player: ${ whoIsNext() } `,
    //     '[object Object]false' : `Winner: ${ winner?.winner } `,
    //     '[object Object]true' : `Winner: ${ winner?.winner } `,
    //     'nulltrue' : `it's Draw `
    // }
    // let status = statuses[`${winner}${isDraw}`];
    const status = winner ? `Winner: ${ winner?.winner } ` : isDraw ? `it's Draw ` : `Next player: ${ whoIsNext() } `;


    return (
        <div className="game">
            <div className="game-board">
                <Board 
                    squares={squares}
                    winLine={winner?winner.winLine:[]}
                    onClick={(i) => handleClick(i)}
                />
            </div>
            <div className="game-info">
                <div>{status} 
                    <ChangeHistoryOrderBtn
                        ascHistory={ascHistory} 
                        onClick = {(ascHistory) => setAscHistory(ascHistory)}
                    />
                </div>
                <ol>
                    <History 
                        ascHistory={ascHistory}
                        history = {history}
                        onClick = {(move) => jumpTo(move)}
                    />
                </ol>
            </div>
        </div>
    );
}