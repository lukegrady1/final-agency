"use client";

import { motion } from "framer-motion";

interface BlurInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function BlurIn({
  children,
  delay = 0,
  duration = 0.6,
  className,
}: BlurInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true }}
      transition={{ ease: "easeOut", delay, duration }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
