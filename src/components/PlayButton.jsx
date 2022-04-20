import { motion } from 'framer-motion'

export default function PlayButton({ onPlayClick }) {
	return (
		<motion.button
			style={{
				width: '100%',
				height: '3.5em',
				borderRadius: 20,
				marginTop: 20,
				border: 'none',
				cursor: 'pointer',
				background: '#0089ff',
				fontSize: 19,
				fontFamily: 'Nunito',
				color: 'white'
			}}
			whileHover={{
				scale: 1.02
			}}
			whileTap={{
				scale: 1.05
			}}
			initial={{
				scale: 0
			}}
			animate={{
				scale: 1
			}}
			transiton={{
				duration: 0.5
			}}
			onClick={onPlayClick}
		>
			Play Again
		</motion.button>
	)
}