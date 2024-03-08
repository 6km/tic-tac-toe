import React from "react"
import Logo from "../assets/logo.svg?react"

function Header() {
	return <div>
		<Logo height={23} />
	</div>
}

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(Header)