import { useCallback, useEffect, useRef, useState } from "react"
import calculateWinner from '../../utilities/calculateWinner'
import Square from "./Square"

export default function Board() {
	const [squares, setSquares] = useState(Array(9).fill(null))
	const [xIsNext, setIsNextX] = useState(true)
	const [player] = useState("X")
	const [winnerData, setWinner] = useState(null)
	const { winner, winnerSquares } = winnerData || {
		winner: null,
		winnerSquares: []
	}

	const buttonsContainerRef = useRef()

	const buttonClickHandler = useCallback((idx) => {
		if (winner) return

		if (squares[idx] && !winner) return

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
		let winningPlayer = calculateWinner(squares)

		if (winningPlayer) {
			setWinner(winningPlayer)
		}

		if (xIsNext) return
	}, [squares, xIsNext])

	return <div className={`grid ${winner || squares.filter(s => s !== null).length === 9 ? "game-over" : ""}`} ref={buttonsContainerRef}>
		{squares.map((squareValue, idx) => (
			<Square key={idx + '_button'} value={squareValue} isMe={squares[idx] === player} isWinner={winnerSquares.includes(idx)} onSquareClick={() => buttonClickHandler(idx)} isGameOver={typeof winnerData === "object"} disabled={undefined} />
		))}
	</div>
}