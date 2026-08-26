import { motion } from 'framer-motion';
import { ArrowRight, Mail, Github } from 'lucide-react';
import { profile } from '../data/profile';
import { getSocial } from '../data/socialLinks';
import NeuralGraphic from './NeuralGraphic';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }
  })
};

export default function Hero() {
  const github = getSocial('github');

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 sm:pt-28"
    >
      {/* Ambient grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(230,233,240,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(230,233,240,0.035) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 100%)'
        }}
      />

      <div className="section grid items-center gap-16 py-0 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0} className="eyebrow">
            <span className="h-2 w-2 animate-pulse-slow rounded-full bg-cyan" />
            Available for internships &amp; collaborations
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m{' '}
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-4 font-mono text-base text-cyan sm:text-lg"
          >
            {profile.role}
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary"
            >
              View Projects
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-secondary"
            >
              <Mail size={18} />
              Contact Me
            </a>
            <a
              href={github?.url}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <Github size={18} />
              GitHub
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <NeuralGraphic />
        </motion.div>
      </div>
    </section>
  );
}
