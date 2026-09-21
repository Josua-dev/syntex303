import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/content';
import { Reveal } from './Reveal';

export function ProjectShowcase() {
  return (
    <section
      id="projects"
      className="relative z-10 bg-mist"
    >
      <div className="mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-32">
        {/* Heading */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="font-mono text-xs tracking-wide3 uppercase text-ink-400">
                / 08 — Projects
              </span>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <h2 className="font-display text-[clamp(2rem,4.5vw,4rem)] font-medium leading-[1.0] tracking-ultra-tight text-ink-900">
                Selected project
                <br />
                <span className="text-ink-400">implementations.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-base leading-[1.6] text-ink-500">
                Systems delivered across government, enterprise, utilities and
                infrastructure — each engineered, integrated and supported
                end-to-end.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Projects grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`col-span-1 ${project.span}`}
            >
              <a href="#contact" className="group block">
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink-900/0 transition-colors duration-500 group-hover:bg-ink-900/20" />
                </div>

                {/* Info */}
                <div className="mt-6 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-ink-400">
                      {project.number}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-ink-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ink-900" />
                  </div>

                  <h3 className="font-display text-2xl font-medium leading-tight tracking-tight text-ink-900 transition-transform duration-300 group-hover:translate-x-1 lg:text-3xl">
                    {project.name}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-ink-500">
                    <span>{project.sector}</span>
                    <span className="h-1 w-1 rounded-full bg-ink-300" />
                    <span>{project.location}</span>
                  </div>

                  {/* Systems tags */}
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.systems.map((system) => (
                      <span
                        key={system}
                        className="border border-line bg-paper px-3 py-1 font-mono text-[11px] tracking-wide text-ink-500"
                      >
                        {system}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
