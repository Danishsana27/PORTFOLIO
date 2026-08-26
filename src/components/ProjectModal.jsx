import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';
import ProjectThumbnail from './ProjectThumbnail';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} details`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card max-h-[85vh] w-full max-w-2xl overflow-y-auto bg-surface"
          >
            <div className="h-40 w-full border-b border-border">
              <ProjectThumbnail category={project.category} image={project.image} title={project.title} />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="chip mb-3 w-fit border-violet/30 text-violet">{project.category}</span>
                  <h3 className="font-display text-2xl font-semibold text-ink">{project.title}</h3>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close project details"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border text-ink-muted transition-colors hover:text-ink"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 space-y-6">
                <DetailBlock label="Overview" text={project.details?.overview} />
                <DetailBlock label="Problem Statement" text={project.details?.problem} />
                <DetailBlock label="Solution" text={project.details?.solution} />
                {project.details?.features?.length > 0 && (
                  <div>
                    <h4 className="mb-2 font-mono text-xs uppercase tracking-widest text-cyan">Features</h4>
                    <ul className="space-y-1.5">
                      {project.details.features.map((f) => (
                        <li key={f} className="flex gap-2 text-sm text-ink-muted">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <DetailBlock label="Results" text={project.details?.results} />
              </div>

              <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-6">
                <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary">
                  <Github size={18} />
                  View Code
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary">
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DetailBlock({ label, text }) {
  if (!text) return null;
  return (
    <div>
      <h4 className="mb-2 font-mono text-xs uppercase tracking-widest text-cyan">{label}</h4>
      <p className="text-sm leading-relaxed text-ink-muted">{text}</p>
    </div>
  );
}
