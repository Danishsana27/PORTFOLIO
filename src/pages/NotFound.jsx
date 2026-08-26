import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-sm text-cyan">Error 404</p>
        <h1 className="mt-4 font-display text-6xl font-bold text-gradient sm:text-8xl">404</h1>
        <p className="mx-auto mt-4 max-w-md text-ink-muted">
          This route doesn&apos;t exist — kind of like an unhandled exception. Let&apos;s get you back to safe
          ground.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Link to="/" className="btn-primary">
            <Home size={18} />
            Back to Home
          </Link>
          <button onClick={() => window.history.back()} className="btn-secondary">
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        <div className="mx-auto mt-10 max-w-sm rounded-lg border border-border bg-surface/60 p-4 text-left font-mono text-xs text-ink-faint">
          <p><span className="text-violet">Traceback</span> (most recent call last):</p>
          <p>&nbsp;&nbsp;File &quot;router.js&quot;, line 404</p>
          <p><span className="text-cyan">PageNotFoundError</span>: route not found</p>
        </div>
      </motion.div>
    </div>
  );
}
