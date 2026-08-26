import { motion } from 'framer-motion';

// Static layout for a small 4-3-3-1 style network graph.
const LAYERS = [
  [{ y: 40 }, { y: 100 }, { y: 160 }, { y: 220 }],
  [{ y: 60 }, { y: 130 }, { y: 200 }],
  [{ y: 60 }, { y: 130 }, { y: 200 }],
  [{ y: 130 }]
];
const LAYER_X = [30, 130, 230, 330];

function buildConnections() {
  const lines = [];
  for (let l = 0; l < LAYERS.length - 1; l++) {
    LAYERS[l].forEach((from, i) => {
      LAYERS[l + 1].forEach((to, j) => {
        lines.push({
          key: `${l}-${i}-${j}`,
          x1: LAYER_X[l],
          y1: from.y,
          x2: LAYER_X[l + 1],
          y2: to.y,
          delay: (l + i * 0.15 + j * 0.08) * 0.35
        });
      });
    });
  }
  return lines;
}

const connections = buildConnections();

export default function NeuralGraphic() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[2rem] bg-grad-soft blur-2xl" aria-hidden="true" />

      <div className="glass-card relative overflow-hidden shadow-card">
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-ink-faint">model_train.py</span>
        </div>

        {/* network visualization */}
        <div className="border-b border-border bg-base/40 p-4">
          <svg viewBox="0 0 360 260" className="h-44 w-full">
            {connections.map((c) => (
              <motion.line
                key={c.key}
                x1={c.x1}
                y1={c.y1}
                x2={c.x2}
                y2={c.y2}
                stroke="url(#lineGrad)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.55 }}
                transition={{ duration: 1.2, delay: c.delay, ease: 'easeInOut' }}
              />
            ))}
            {LAYERS.map((layer, l) =>
              layer.map((node, i) => (
                <motion.circle
                  key={`${l}-${i}`}
                  cx={LAYER_X[l]}
                  cy={node.y}
                  r={l === 0 || l === LAYERS.length - 1 ? 6 : 5}
                  fill={l === LAYERS.length - 1 ? '#43D9C8' : '#7C6FF0'}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: l * 0.15 + i * 0.08 }}
                >
                  <animate
                    attributeName="opacity"
                    values="1;0.5;1"
                    dur={`${2.4 + l * 0.3 + i * 0.15}s`}
                    repeatCount="indefinite"
                  />
                </motion.circle>
              ))
            )}
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#7C6FF0" />
                <stop offset="100%" stopColor="#43D9C8" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* fake terminal output */}
        <div className="space-y-1.5 p-4 font-mono text-[12px] leading-relaxed text-ink-muted">
          <p><span className="text-violet">$</span> python train.py --model cnn --epochs 25</p>
          <p className="text-ink-faint">Loading dataset... done</p>
          <p>
            Epoch <span className="text-cyan">18/25</span> — loss: 0.184 — val_acc: <span className="text-cyan">0.912</span>
          </p>
          <p className="flex items-center gap-1">
            <span className="text-ink-faint">status:</span>
            <span className="text-cyan">training</span>
            <span className="inline-block h-3.5 w-1.5 animate-blink bg-cyan" />
          </p>
        </div>
      </div>
    </div>
  );
}
