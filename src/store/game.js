import { create } from "zustand"

const useGame = create((set) => ({
	turn: "X",
	moves: [],
}))

export default useGame