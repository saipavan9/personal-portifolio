import { motion } from "motion/react";
import Section from "@/components/Section";
import { skills } from "@/data";
import {
  listContainer,
  listItem,
  pillContainer,
  pillItem,
} from "@/motionVariants";

export default function SkillsList() {
  return (
    <Section
      id="skills"
      name="Skills"
      command="gcloud components list"
      comment="# the tools I reach for"
    >
      <motion.div
        className="grid gap-5 md:grid-cols-2"
        variants={listContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        {skills.map((group) => (
          <motion.div
            key={group.label}
            variants={listItem}
            className="rounded-lg border border-iron bg-obsidian/60 p-5"
          >
            <div className="font-mono text-sm text-accent">{group.label}:</div>
            <motion.div
              className="mt-3 flex flex-wrap gap-2"
              variants={pillContainer}
            >
              {group.items.map((item) => (
                <motion.span
                  key={item}
                  variants={pillItem}
                  className="rounded border border-iron bg-graphite px-2.5 py-1 font-mono text-xs text-fg"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
