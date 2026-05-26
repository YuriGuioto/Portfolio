'use client';

import { motion, useScroll } from 'framer-motion';

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-red-400 to-red-600 origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
