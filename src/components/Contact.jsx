import { useState } from 'react';
import * as Icons from 'lucide-react';
import { Send, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { profile } from '../data/profile';
import { socialLinks } from '../data/socialLinks';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sent

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // -----------------------------------------------------------------
    // TODO: this form is currently frontend-only. To make it functional,
    // wire it up to an email/API service, for example:
    //   - Formspree (https://formspree.io) — swap this handler for a
    //     plain <form action="https://formspree.io/f/YOUR_ID" method="POST">
    //   - EmailJS (https://www.emailjs.com) — call emailjs.send() here
    //     with your service/template IDs.
    //   - Your own backend endpoint — replace this block with a fetch()
    //     POST call to that API, e.g.:
    //       await fetch('/api/contact', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(form)
    //       });
    // -----------------------------------------------------------------
    console.log('Contact form submitted (frontend-only):', form);
    setStatus('sent');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contact" className="section">
      <ScrollReveal>
        <p className="eyebrow">// contact</p>
        <h2 className="section-heading">Let&apos;s build something</h2>
        <p className="mt-4 max-w-2xl text-ink-muted">
          Open to internships, collaborations, and interesting AI/ML problems. Reach out through the form, email, or
          any of the links below.
        </p>
      </ScrollReveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Socials hub */}
        <ScrollReveal delay={0.05}>
          <div className="glass-card h-full p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-ink">Find me elsewhere</h3>
            <p className="mt-1.5 text-sm text-ink-muted">
              All links below are pulled from <code className="chip">src/data/socialLinks.js</code> — edit that one
              file to update every link on the site.
            </p>

            <div className="mt-6 space-y-3">
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
                      className="group flex items-center gap-4 rounded-xl border border-border bg-surface-raised/50 p-4 transition-all duration-200 hover:border-violet/40 hover:bg-surface-raised"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-grad-soft text-violet transition-colors group-hover:text-cyan">
                        <Icon size={20} />
                      </span>
                      <div className="min-w-0">
                        <p className="font-medium text-ink">{social.label}</p>
                        <p className="truncate text-xs text-ink-faint">{social.url.replace('mailto:', '')}</p>
                      </div>
                    </a>
                  );
                })}
            </div>

            <div className="mt-6 rounded-xl border border-dashed border-border p-4">
              <p className="font-mono text-xs text-ink-faint">
                👉 Replace the placeholder URLs in <span className="text-cyan">socialLinks.js</span> with your real
                GitHub, LinkedIn, and Instagram profile links.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Contact form */}
        <ScrollReveal delay={0.1}>
          <form onSubmit={handleSubmit} className="glass-card h-full space-y-5 p-6 sm:p-8">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-lg border border-border bg-surface-raised/60 px-4 py-3 text-ink placeholder:text-ink-faint focus:border-violet/50 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-border bg-surface-raised/60 px-4 py-3 text-ink placeholder:text-ink-faint focus:border-violet/50 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the opportunity or idea..."
                className="w-full resize-none rounded-lg border border-border bg-surface-raised/60 px-4 py-3 text-ink placeholder:text-ink-faint focus:border-violet/50 focus:outline-none"
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              {status === 'sent' ? (
                <>
                  <CheckCircle2 size={18} />
                  Message Ready
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>

            {status === 'sent' && (
              <p className="text-center text-sm text-cyan">
                Thanks! This demo form logs to the console — connect an API to send it to {profile.email}.
              </p>
            )}
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
