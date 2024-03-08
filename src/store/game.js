import { create } from "zustand"

const useGameStore = create((set) => ({
	turn: "X",
	moves: Array(9).fill(null),
	addMove: (cell, player) => {
		set(({ winner, moves, turn }) => {
			if (winner || moves[cell]) return {}

			return {
				moves: [...moves.slice(0, cell), player || turn, ...moves.slice(cell + 1)],
				turn: turn === "X" ? "O" : "X"
			}
		})
	},
	toggleTurn: () => set(state => ({ turn: state.turn === "X" ? "O" : "X" })),

	winner: null,
	winnerMoves: [],
	setWinner: (winner, winnerMoves) => set(state => ({ ...state, winner, winnerMoves })),

	resetProgress: () => set({
		turn: "X",
		moves: Array(9).fill(null),
		winner: null,
		winnerMoves: [],
		gameOver: false,
	}),

	gameOver: false,
	setGameOver: (newState) => set({ gameOver: newState })
}))

export default useGameStore