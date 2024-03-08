import Board from './components/Board'

function App() {
	return (
		<div className="container">
			{/* <p style={{ color: 'white' }}>Next Player: {xIsNext ? 'X' : 'O'}</p> */}

			<Board />

			{/* {(winner || squares.filter(s => s !== null).length === 9) && <PlayButton onPlayClick={playButtonClickHandler} />} */}
		</div>
	)
}

export default App
