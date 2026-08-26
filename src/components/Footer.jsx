import * as Icons from 'lucide-react';
import { profile } from '../data/profile';
import { socialLinks } from '../data/socialLinks';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="section flex flex-col items-center gap-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-lg font-semibold text-ink">
            {profile.name.split(' ')[0]}
            <span className="text-cyan">.</span>
          </p>
          <p className="mt-1 text-sm text-ink-muted">{profile.role}</p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks
            .filter((s) => s.show)
            .map((social) => {
              const Icon = Icons[social.icon] || Icons.Link;
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target={social.id === 'email' ? undefined : '_blank'}
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface/60 text-ink-muted transition-all duration-200 hover:border-violet/40 hover:text-ink"
                >
                  <Icon size={17} />
                </a>
              );
            })}
        </div>
      </div>

      <div className="border-t border-border/60 py-5 text-center font-mono text-xs text-ink-faint">
        © {year} {profile.name}. Built with React &amp; Tailwind CSS.
      </div>
    </footer>
  );
}
