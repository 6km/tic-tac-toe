import React from "react"

function Cell({ value, isWinner, onMove }) {
	return <div
		className={`${value && "has-move"} ${isWinner ? "winner" : ""}`}
		onClick={onMove}
	>
		<span>{value}</span>
	</div>
}

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(Cell, (prevProps, nextProps) => (JSON.stringify(prevProps) === JSON.stringify(nextProps)))