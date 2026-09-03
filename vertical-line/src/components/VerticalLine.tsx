import { motion } from 'motion/react'

export default function VerticalLine() {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true, amount: 0.01 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{
        transformOrigin: 'top',
        width: 2,
        height: 300,
        backgroundColor: '#000',
      }}
    />
  )
}
