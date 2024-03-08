import React from "react"

function Cell({ value, isWinner, onMove }) {
	return <div
		className={`cell ${value ? "has-move" : ""} ${isWinner ? "winner" : ""}`}
		onClick={onMove}
	>
		<span>{value}</span>
	</div>
}

export default React.memo(Cell, (prevProps, nextProps) => (JSON.stringify(prevProps) === JSON.stringify(nextProps)))