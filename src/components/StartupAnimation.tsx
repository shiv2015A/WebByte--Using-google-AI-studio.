import { motion } from 'motion/react';
import { useEffect } from 'react';

interface StartupAnimationProps {
  onComplete: () => void;
}

export default function StartupAnimation({ onComplete }: StartupAnimationProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1500); // Wait 1.5 seconds before starting the transition
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black pointer-events-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        layoutId="logo"
        className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-white"
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        WebByTe<span className="text-primary">.</span>
      </motion.div>
    </motion.div>
  );
}
