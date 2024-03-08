import { useEffect } from "react"
import useGameStore from "../../store/game"
import calculateWinner from '../../utils/calculateWinner'
import Cell from "./Cell"

export default function Board() {
	const { moves, turn, addMove, winner, winnerMoves, setWinner, setGameOver } = useGameStore()

	useEffect(() => {
		let winnerData = calculateWinner(moves)

		if (winnerData) {
			setWinner(winnerData.winner, winnerData.winnerMoves)
			setGameOver(true)
		}
	}, [moves, setGameOver, setWinner, turn])

	return <div className={`board ${winner || moves.filter(s => s !== null).length === 9 ? "game-over" : ""}`}>
		{moves.map((cellValue, idx) => (
			<Cell
				key={`cell_${idx}`}
				index={idx}
				value={cellValue}
				isWinner={winnerMoves.includes(idx)}
				onMove={() => addMove(idx)}
				isGameOver={typeof winnerData === "object"}
				disabled={undefined} />
		))}
	</div>
}