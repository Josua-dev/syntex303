import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/content';
import { Reveal, Stagger, StaggerItem } from './Reveal';
import { AnimatedText } from './AnimatedText';

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
              <span className="font-mono text-[11px] tracking-wide3 uppercase text-ink-400">
                / 08 — Projects
              </span>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <div>
              <AnimatedText
                as="h2"
                text="Selected project"
                className="text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[0.92] tracking-ultra-tight text-ink-900"
              />
              <AnimatedText
                as="h2"
                text="implementations."
                delay={0.25}
                className="text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[0.92] tracking-ultra-tight text-ink-300"
              />
            </div>
          </div>
        </div>

        {/* Projects grid */}
        <Stagger className="mt-16 grid grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-12 lg:gap-8" stagger={0.12}>
          {projects.map((project) => (
            <StaggerItem
              key={project.number}
              y={60}
              className={`col-span-1 ${project.span}`}
            >
              <a href="#contact" className="group block">
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink-900/0 transition-colors duration-500 group-hover:bg-ink-900/15" />
                  <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-6">
                    <span className="font-mono text-sm text-white/90 drop-shadow-lg">
                      {project.number}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-white/90 drop-shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Info */}
                <div className="mt-6 flex flex-col gap-3">
                  <h3 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-medium leading-tight tracking-tight text-ink-900 transition-transform duration-300 group-hover:translate-x-1">
                    {project.name}
                  </h3>

                  <div className="flex flex-wrap items-center gap-3 text-sm text-ink-500">
                    <span>{project.sector}</span>
                    <span className="h-1 w-1 rounded-full bg-ink-300" />
                    <span>{project.location}</span>
                  </div>

                  {/* Systems tags */}
                  <div className="mt-3 flex flex-wrap gap-2">
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
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
