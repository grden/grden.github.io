import { motion } from "framer-motion";

interface SlideUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function SlideUp({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  className = "" 
}: SlideUpProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: duration, 
        delay: delay / 1000, // Convert ms to seconds for Framer
        ease: "easeOut" 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}