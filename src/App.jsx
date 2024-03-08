import Board from './components/Board'
import Button from './components/Button'
import Header from './components/Header'
import useGameStore from './store/game'

function App() {
	const { gameOver, resetProgress } = useGameStore()

	return (
		<>
			<Header />
			<Board />

			{gameOver && <Button onClick={resetProgress}>Play again</Button>}
		</>
	)
}

export default App
