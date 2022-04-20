import { motion } from "framer-motion"

export default function Square({ value, isMe, isWinner, onSquareClick, disabled }) {
  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      onClick={onSquareClick}
      style={{
        background: 'auto',
        cursor: value && 'default'
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 100, scale: 1 }}
      transition={{ duration: 0.15 }}
      className={`${isMe ? "active" : ""} ${isWinner ? "winner" : ""}`}
    >
      {value}
    </motion.div>
  )
}