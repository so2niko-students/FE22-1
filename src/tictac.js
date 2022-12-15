import React, {useState} from "react";
import "./tictac.css";

function Square({ value, onClick }) {
  console.log(Date.now(), value);
  return (
    <button 
      className="square" 
      onClick={() => onClick()}>
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const whoIsNext = () => xIsNext ? 'X' : 'O';

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
        return squares[a];
      }
    }
    return null;
  }

  const handleClick = (i) => {
    console.log("click", i);
    const newSquares = squares.slice();
    newSquares[i] = whoIsNext();
    console.log('before', xIsNext);
    setSquares(newSquares);
    setXIsNext(!xIsNext);
    console.log('after', xIsNext);
  };

  const renderSquare = (i) => <Square value={squares[i]} onClick={() => handleClick(i)} />;

  const winner = calculateWinner(squares);
  const status = winner ? `Winner: ${ winner }` : `Next player: ${ whoIsNext() }`;

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}
