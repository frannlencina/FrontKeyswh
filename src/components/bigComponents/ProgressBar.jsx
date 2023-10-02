import React from 'react'

// Library
import { motion, useScroll, useSpring } from "framer-motion";

function ProgressBar() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
  return (
    <div className='w-full'>
        <motion.div className="progress-bar h-2 fixed top-0 left-0 right-0 bg-[var(--black-main)] z-20" style={{ scaleX }} />
        </div>
  )
}

export default ProgressBar