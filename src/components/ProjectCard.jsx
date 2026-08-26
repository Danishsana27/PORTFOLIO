import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import ProjectThumbnail from './ProjectThumbnail';

export default function ProjectCard({ project, onOpenDetails, index = 0 }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="glass-card glass-card-hover group flex h-full flex-col overflow-hidden"
    >
      <button
        onClick={() => onOpenDetails(project)}
        className="block h-44 w-full overflow-hidden border-b border-border text-left"
        aria-label={`View details for ${project.title}`}
      >
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
          <ProjectThumbnail category={project.category} image={project.image} title={project.title} />
        </div>
      </button>

      <div className="flex flex-1 flex-col p-6">
        <span className="chip mb-3 w-fit border-violet/30 text-violet">{project.category}</span>

        <button onClick={() => onOpenDetails(project)} className="text-left">
          <h3 className="font-display text-lg font-semibold text-ink transition-colors group-hover:text-gradient">
            {project.title}
          </h3>
        </button>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span key={tech} className="chip text-[11px]">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
          >
            <Github size={16} />
            Code
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan transition-colors hover:text-cyan/80"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
