import { motion } from 'framer-motion'

const buttonVariants = {
	initial: {
		scale: 0.95,
		borderRadius: 12
	},
	animate: {
		scale: 1,
	},
	hover: {
		scale: 0.95,
		borderRadius: 14
	},
}

export default function Button({ onClick, children }) {
	return (
		<motion.button
			style={{
				padding: '10px 28px',
				background: '#272933',
			}}
			variants={buttonVariants}
			whileHover="hover"
			initial="initial"
			animate="animate"
			onClick={onClick}
		>
			{children}
		</motion.button>
	)
}
