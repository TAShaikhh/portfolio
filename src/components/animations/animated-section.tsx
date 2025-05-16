"use client";

import { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// Subtle animation config inspired by seanhalpin.xyz
const fadeUpConfig = {
  hidden: { 
    opacity: 0,
    y: 10
  },
  visible: { 
    opacity: 1,
    y: 0
  },
  transition: {
    duration: 0.5,
    ease: [0.22, 1, 0.36, 1]
  }
};

export function AnimatedSection({
  children,
  className = "",
  delay = 0
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    margin: "-10% 0px" 
  });

  return (
    <motion.div
      ref={ref}
      initial={fadeUpConfig.hidden}
      animate={isInView ? fadeUpConfig.visible : fadeUpConfig.hidden}
      transition={{
        ...fadeUpConfig.transition,
        delay
      }}
      className={`transform-gpu ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedText({
  children,
  className = "",
  delay = 0
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    margin: "-10% 0px"
  });

  return (
    <motion.div
      ref={ref}
      initial={fadeUpConfig.hidden}
      animate={isInView ? fadeUpConfig.visible : fadeUpConfig.hidden}
      transition={{
        ...fadeUpConfig.transition,
        delay
      }}
      className={`transform-gpu ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedCard({
  children,
  className = "",
  delay = 0
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    margin: "-10% 0px"
  });

  return (
    <motion.div
      ref={ref}
      initial={fadeUpConfig.hidden}
      animate={isInView ? fadeUpConfig.visible : fadeUpConfig.hidden}
      transition={{
        ...fadeUpConfig.transition,
        delay
      }}
      className={`transform-gpu ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedImage({
  children,
  className = "",
  delay = 0
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    margin: "-10% 0px"
  });

  return (
    <motion.div
      ref={ref}
      initial={fadeUpConfig.hidden}
      animate={isInView ? fadeUpConfig.visible : fadeUpConfig.hidden}
      transition={{
        ...fadeUpConfig.transition,
        delay
      }}
      className={`transform-gpu ${className}`}
    >
      {children}
    </motion.div>
  );
}
