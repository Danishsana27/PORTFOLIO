import { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projects, projectCategories } from '../data/projects';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="section">
      <ScrollReveal>
        <p className="eyebrow">// projects</p>
        <h2 className="section-heading">Things I&apos;ve built</h2>
        <p className="mt-4 max-w-2xl text-ink-muted">
          A mix of AI/ML experiments and practical builds. Adding a new project here is as simple as appending one
          object to <code className="chip">src/data/projects.js</code>.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.1} className="mt-10 flex flex-wrap gap-2">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
              activeFilter === cat
                ? 'border-transparent bg-grad-primary text-[#0A0E14]'
                : 'border-border bg-surface/60 text-ink-muted hover:border-violet/40 hover:text-ink'
            }`}
          >
            {cat}
          </button>
        ))}
      </ScrollReveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} onOpenDetails={setSelectedProject} />
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-ink-muted">No projects in this category yet — check back soon.</p>
      )}

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
