import ScrollReveal from './ScrollReveal';
import { journeySteps } from '../data/journey';

export default function Journey() {
  return (
    <section id="journey" className="section">
      <ScrollReveal>
        <p className="eyebrow">// experience &amp; learning</p>
        <h2 className="section-heading">My Developer Journey</h2>
        <p className="mt-4 max-w-2xl text-ink-muted">
          No formal job history yet — here&apos;s the path I&apos;ve taken so far as a student building toward AI/ML
          engineering.
        </p>
      </ScrollReveal>

      <div className="relative mt-14">
        {/* vertical line */}
        <div className="absolute left-[15px] top-2 h-[calc(100%-2rem)] w-px bg-border sm:left-1/2" />

        <div className="space-y-10">
          {journeySteps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <ScrollReveal key={step.id} delay={i * 0.06}>
                <div className={`relative flex items-start gap-6 sm:items-center ${isLeft ? '' : 'sm:flex-row-reverse'}`}>
                  {/* node */}
                  <div className="absolute left-0 top-1.5 z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-base bg-grad-primary font-mono text-[11px] font-bold text-[#0A0E14] sm:left-1/2 sm:-translate-x-1/2">
                    {i + 1}
                  </div>

                  <div className={`w-full pl-14 sm:w-[calc(50%-2.5rem)] sm:pl-0 ${isLeft ? 'sm:pr-0' : 'sm:pl-0'}`}>
                    <div className="glass-card glass-card-hover p-5">
                      {step.date && (
                        <p className="mb-1 font-mono text-xs uppercase tracking-widest text-cyan">{step.date}</p>
                      )}
                      <h3 className="font-display text-lg font-semibold text-ink">{step.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{step.description}</p>
                    </div>
                  </div>

                  <div className="hidden sm:block sm:w-[calc(50%-2.5rem)]" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
