import { motion } from 'framer-motion'

export default function Button({ onClick, children }) {
	return (
		<motion.button
			style={{
				padding: '10px 28px',
				borderRadius: 12,
				background: '#202A52',
			}}
			whileHover={{
				scale: 0.95
			}}
			initial={{
				scale: 0.95,
			}}
			animate={{
				scale: 1,
			}}
			onClick={onClick}
		>
			{children}
		</motion.button>
	)
}