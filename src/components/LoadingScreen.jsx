import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-base"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-grad-primary">
          <span className="font-mono text-lg font-bold text-[#0A0E14]">DS</span>
        </div>
        <p className="font-mono text-xs text-ink-faint">
          initializing<span className="animate-blink">_</span>
        </p>
      </div>
    </motion.div>
  );
}
