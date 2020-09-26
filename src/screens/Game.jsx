/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";
import { calculateWinner } from "../utils/helper";
import Board from "../components/board/Board";
import { Wrapper, Holder } from './styles';

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(history[stepNumber]);
  const x0 = xIsNext ? "X" : "0";

  const handleClick = index => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];

    if (winner || squares[index]) {
      return;
    }

    squares[index] = x0;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXIsNext(!xIsNext);
  };

  const goToStep = step => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
    const historyPoint = history.slice(0, step + 1);
    setHistory(historyPoint)
  };

  const renderHistory = () =>
  history.map((_step, move) => {
    const destination = move ? `Go to move #${move}` : "Go to Start";
    return (
      <li key={move}>
        <button onClick={() => goToStep(move)}>{destination}</button>
      </li>
    );
  });

  return (
    <Holder>
      <h1>Tic Tac Toe</h1>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <Wrapper>
        <div>
          <h3>History</h3>
          {renderHistory()}
        </div>
        <h3>{winner ? "Winner : " + winner : "Next Player :" + x0}</h3>
      </Wrapper>
    </Holder>
  );
};

export default Game;
