import * as Icons from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { skillCategories } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <ScrollReveal>
        <p className="eyebrow">// skills</p>
        <h2 className="section-heading">What I work with</h2>
        <p className="mt-4 max-w-2xl text-ink-muted">
          A blend of AI/ML tooling and strong programming fundamentals — the two halves of how I approach building
          intelligent software.
        </p>
      </ScrollReveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {skillCategories.map((category, idx) => {
          const Icon = Icons[category.icon] || Icons.Code2;
          return (
            <ScrollReveal key={category.id} delay={idx * 0.08}>
              <div className="glass-card glass-card-hover h-full p-6">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-grad-soft text-violet">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-ink">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span key={skill} className="chip transition-colors hover:border-cyan/40 hover:text-ink">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
