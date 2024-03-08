import { motion } from 'framer-motion'

const buttonVariants = {
	initial: {
		scale: 0.95,
	},
	animate: {
		scale: 1,
	},
	hover: {
		scale: 0.95,
	},
}

export default function Button({ onClick, children }) {
	return (
		<motion.button
			style={{
				padding: '10px 28px',
				borderRadius: 12,
				background: '#202A52',
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
