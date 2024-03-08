import { useEffect } from "react"
import useGameStore from "../../store/game"
import calculateWinner from '../../utils/calculateWinner'
import Cell from "./Cell"

export default function Board() {
	const { moves, winner, winnerMoves, addMove, setWinner, setGameOver } = useGameStore()

	useEffect(() => {
		const winnerData = calculateWinner(moves)

		if (winnerData || !moves.some(i => i == null))
			setGameOver(true)

		if (winnerData)
			setWinner(winnerData.winner, winnerData.winnerMoves)
	}, [moves, setGameOver, setWinner])

	const gameOverClass = winner || moves.filter(s => s !== null).length === 9 ? "game-over" : ""

	return (
		<div className={`board ${gameOverClass}`}>
			{moves.map((cellValue, idx) => (
				<Cell
					key={`cell_${idx}`}
					value={cellValue}
					isWinner={winnerMoves.includes(idx)}
					onMove={() => addMove(idx)}
				/>
			))}
		</div>
	)
}
