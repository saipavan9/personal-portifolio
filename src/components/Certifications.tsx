import { motion } from "motion/react";
import type { Variants } from "motion/react";
import Section from "@/components/Section";
import { awards, certifications } from "@/data";
import { listContainer, listItem } from "@/motionVariants";

const checkPop: Variants = {
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 420, damping: 20, delay: 0.12 },
  },
};

export default function Certifications() {
  return (
    <Section
      id="certifications"
      name="Certifications"
      command="kubectl get certificates"
      comment="# verified, current"
    >
      <motion.div
        className="overflow-hidden rounded-lg border border-iron bg-obsidian/60"
        variants={listContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        {certifications.map((c, i) => (
          <motion.div
            key={c.short}
            variants={listItem}
            className={`flex items-center gap-4 px-5 py-4 ${
              i !== 0 ? "border-t border-iron" : ""
            }`}
          >
            <motion.span variants={checkPop} className="font-mono text-accent">
              ✓
            </motion.span>
            <span className="w-20 shrink-0 font-mono text-sm font-semibold text-bright">
              {c.short}
            </span>
            <span className="flex-1 text-sm text-fg">{c.name}</span>
            <span className="hidden font-mono text-xs text-muted sm:block">
              {c.issuer}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-6">
        <div className="mb-3 font-mono text-sm text-muted">
          ❯ kubectl get events
        </div>
        <motion.div
          className="grid gap-3 sm:grid-cols-2"
          variants={listContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          {awards.map((a) => (
            <motion.div
              key={a.title}
              variants={listItem}
              className="rounded-lg border border-iron bg-obsidian/60 px-5 py-4"
            >
              <div className="text-sm font-semibold text-bright">{a.title}</div>
              <div className="mt-1 font-mono text-xs text-muted">
                {a.org} · {a.year}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
