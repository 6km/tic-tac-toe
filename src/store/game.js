import { create } from "zustand"

const useGameStore = create((set) => ({
	turn: "X",
	moves: Array(9).fill(null),
	winner: null,
	winnerMoves: [],
	gameOver: false,

	addMove: (cell, player) => {
		set((state) => {
			if (state.winner || state.moves[cell]) return state

			const moves = [...state.moves]
			moves[cell] = player || state.turn

			return { moves, turn: state.turn === "X" ? "O" : "X" }
		})
	},

	setWinner: (winner, winnerMoves) => set({ winner, winnerMoves }),

	resetProgress: () => set({
		turn: "X",
		moves: Array(9).fill(null),
		winner: null,
		winnerMoves: [],
		gameOver: false,
	}),

	setGameOver: (newState) => set({ gameOver: newState }),
}))

export default useGameStore
