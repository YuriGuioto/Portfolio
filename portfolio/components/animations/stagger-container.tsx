'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { staggerContainer } from '@/lib/animations';

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
}

export function StaggerContainer({ children, className }: StaggerContainerProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}
