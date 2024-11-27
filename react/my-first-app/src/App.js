import { useState } from "react";

/**
 * The Square function is a React component that renders a button with a value and an onClick event
 * handler.
 * @returns A React component called Square is being returned. It is a button element with a class name
 * of "square" and an onClick event handler that triggers the onSquareClick function. The value prop is
 * displayed inside the button.
 */
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

/**
 * The `Board` function in JavaScript represents a tic-tac-toe game board with functionality to handle
 * player turns and determine the winner.
 * @returns The `Board` component is returning JSX elements that represent a tic-tac-toe game board. It
 * includes a status message indicating the current player or the winner, and a grid of 3x3 squares
 * represented by the `Square` component. Each square has a value (either "X", "O", or null) and an
 * `onSquareClick` event handler that triggers the `handle
 */

function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  /**
   * The handleClick function updates the game board squares with "X" or "O" based on the player's
   * turn.
   * @param i - The parameter `i` in the `handleClick` function represents the index of the square that
   * was clicked in a tic-tac-toe game board.
   * @returns The `handleClick` function returns early if either `squares[i]` is truthy or if
   * `calculateWinner(squares)` returns a truthy value. If neither of these conditions are met, the
   * function continues to update the `nextSquares` array, set the new value at index `i` based on the
   * current player ("X" or "O"), update the state with the
   */
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O "}`;
  }

  /* The `return` statement you provided is returning JSX elements that represent the layout of a
 tic-tac-toe game board in React. Here's a breakdown of what it does: */
  return (
    <>
      <div className="status"> {status} </div>
      <div class="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div class="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div class="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

/**
 * The function `calculateWinner` checks for a winning combination in a tic-tac-toe game board
 * represented by an array of squares.
 * @param squares - The `calculateWinner` function you provided is a function that checks if there is a
 * winner in a Tic Tac Toe game based on the current state of the squares on the board.
 * @returns The `calculateWinner` function returns the symbol (X or O) of the player who has won the
 * game based on the current state of the `squares` array. If there is no winner yet, it returns
 * `null`.
 */
function calculateWinner(squares) {
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

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

/**
 * The Game function returns a JSX structure with a game board and game information section.
 * @returns A functional component named `Game` is being returned. Inside the `Game` component, there
 * is a `div` element with a class name of "game" containing two child elements:
 * 1. A `div` element with a class name of "game-board" which contains a `Board` component.
 * 2. Another `div` element with a class name of "game-info" which contains
 */

export default function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>

      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}
