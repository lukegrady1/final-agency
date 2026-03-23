"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delayBetweenWords?: number;
  duration?: number;
  initialDelay?: number;
}

export default function SplitText({
  text,
  className,
  wordClassName,
  delayBetweenWords = 0.08,
  duration = 0.6,
  initialDelay = 0,
}: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const words = text.split(" ");

  return (
    <motion.span ref={ref} style={{ display: "inline" }} className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          style={{ display: "inline-block", marginRight: "0.25em" }}
          className={wordClassName}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{
            delay: initialDelay + index * delayBetweenWords,
            duration,
            ease: "easeOut",
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
