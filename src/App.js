import { useState, useEffect, useCallback, useRef } from 'react';
// import logo from './logo.svg';
import './App.css';

import Square from './components/Square';
import PlayButton from './components/PlayButton';

import calculateWinner from './utilities/calculateWinner';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setIsNextX] = useState(true)
  const [player] = useState("X")
  const [winnerData, setWinner] = useState()
  const {winner, winnerSquares} = winnerData || {
      winner: null,
      winnerSquares: []
  };

  const buttonsContainerRef = useRef()

  const buttonClickHandler = useCallback((idx) => {
    if (winner) return;

    if (squares[idx] && !winner) return;

    setIsNextX(!xIsNext)

    const newSquares = squares.slice()
    newSquares[idx] = xIsNext ? 'X' : 'O'
    setSquares(newSquares)
  }, [winner, squares, xIsNext])

  const playButtonClickHandler = () => {
    setSquares(Array(9).fill(null))
    setWinner(null)
    setIsNextX(true)
  }

  useEffect(() => {
    let winner = calculateWinner(squares)

    if (winner) {
      setWinner(winner)
    }

    if (xIsNext) return;
  }, [squares, xIsNext])

  return (
    <div className="container">
      {/*<img src={logo} className="App-logo" style={{width: '100%'}} alt="logo" />*/}

      <p style={{ color: 'white' }}>Next Player: {xIsNext ? 'X' : 'O'}</p>

      <div className="grid" ref={buttonsContainerRef}>
        {squares.map((squareValue, idx) => (
          <Square key={idx + '_button'} value={squareValue} isMe={squares[idx] === player} isWinner={winnerSquares.includes(idx)} onSquareClick={() => buttonClickHandler(idx)} />
        ))}
      </div>

      {(winner || squares.filter(s => s !== null).length === 9) && <PlayButton onPlayClick={playButtonClickHandler} />}
    </div>
  );
}

export default App;
