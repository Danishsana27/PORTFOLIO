import { Sparkle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { profile } from '../data/profile';

export default function About() {
  return (
    <section id="about" className="section">
      <ScrollReveal>
        <p className="eyebrow">// about</p>
        <h2 className="section-heading">{profile.about.heading}</h2>
      </ScrollReveal>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <ScrollReveal delay={0.05} className="space-y-5">
          {profile.about.paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-ink-muted sm:text-lg">
              {p}
            </p>
          ))}

          <div className="flex flex-wrap gap-2 pt-4">
            {profile.about.interests.map((interest) => (
              <span key={interest} className="chip flex items-center gap-1.5">
                <Sparkle size={12} className="text-cyan" />
                {interest}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="glass-card grid grid-cols-2 gap-px overflow-hidden bg-border">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="bg-surface/80 p-6">
                <div className="font-display text-3xl font-semibold text-gradient">{stat.value}</div>
                <div className="mt-2 text-sm text-ink-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
