"use client";

import { motion } from "framer-motion";

interface StaggerParentProps {
  children: React.ReactNode;
  className?: string;
}

interface StaggerChildProps {
  children: React.ReactNode;
  className?: string;
}

export function StaggerParent({ children, className }: StaggerParentProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChild({ children, className }: StaggerChildProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
