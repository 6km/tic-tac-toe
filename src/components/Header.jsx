import React from "react"
import Logo from "../assets/logo.svg?react"

function Header() {
	return <div className="header">
		<Logo height={23} />
		<p className="author">
			{"by "}
			<a href="https://github.com/6km/tic-tac-toe" target="_blank">@6km</a>
		</p>
	</div>
}

export default React.memo(Header)