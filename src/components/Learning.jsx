import * as Icons from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { currentlyLearning } from '../data/learning';

export default function Learning() {
  return (
    <section id="learning" className="section">
      <ScrollReveal>
        <p className="eyebrow">// currently learning</p>
        <h2 className="section-heading">Currently Learning</h2>
        <p className="mt-4 max-w-2xl text-ink-muted">
          Always shipping something new. Here&apos;s what&apos;s on my desk right now.
        </p>
      </ScrollReveal>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {currentlyLearning.map((item, i) => {
          const Icon = Icons[item.icon] || Icons.Sparkles;
          return (
            <ScrollReveal key={item.id} delay={i * 0.05}>
              <div className="glass-card glass-card-hover flex h-full flex-col items-center gap-3 p-5 text-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-grad-soft text-cyan">
                  <Icon size={20} />
                </span>
                <span className="text-sm font-medium text-ink">{item.title}</span>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
