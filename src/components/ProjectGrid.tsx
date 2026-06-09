import Section from "@/components/Section";
import { projects } from "@/data";

export default function ProjectGrid() {
  return (
    <Section
      id="projects"
      name="Projects"
      command="terraform plan ./projects"
      comment="# selected work, infrastructure and platform tooling"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.name}
            className="flex flex-col rounded-lg border border-iron bg-obsidian/60 p-5 transition-colors hover:border-accent/40"
          >
            <div className="flex items-baseline gap-2 font-mono text-sm">
              <span className="text-accent">+</span>
              <span className="font-semibold text-bright">{p.name}</span>
            </div>
            <div className="mt-1 font-mono text-xs text-muted">
              @ {p.context}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-fg">
              {p.description}
            </p>
            <div className="mt-auto flex flex-wrap gap-2 pt-4">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded border border-iron bg-graphite px-2 py-0.5 font-mono text-xs text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
