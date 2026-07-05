import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Section from "@/components/Section";
import { profile } from "@/data";
import { listContainer, pillItem } from "@/motionVariants";

type Row = { key: string; value: string; href?: string; copy?: string };

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const rows: Row[] = [
    { key: "email", value: profile.email, copy: profile.email },
    { key: "linkedin", value: profile.linkedin, href: profile.linkedinUrl },
    { key: "github", value: profile.github, href: profile.githubUrl },
    { key: "resume", value: "SaiPavan_Resume.pdf", href: profile.resume },
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard?.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1300);
  };

  return (
    <Section
      id="contact"
      name="Contact"
      command="kubectl get contact -o json"
      comment="# open to senior platform / SRE roles and good problems"
    >
      <div className="overflow-hidden rounded-lg border border-iron bg-obsidian font-mono text-sm">
        <div className="flex items-center gap-2 border-b border-iron bg-graphite px-4 py-2.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
          <span className="ml-2 text-xs text-muted">~/saipavan</span>
        </div>
        <motion.div
          className="px-5 py-4 leading-relaxed"
          variants={listContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          <motion.div variants={pillItem} className="text-muted">
            {"{"}
          </motion.div>
          {rows.map((r, i) => (
            <motion.div variants={pillItem} key={r.key} className="pl-4">
              <span className="text-accent">"{r.key}"</span>
              <span className="text-muted">: </span>
              {r.href ? (
                <a
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fg underline decoration-iron underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  "{r.value}"
                </a>
              ) : (
                <button
                  onClick={() => handleCopy(r.copy!)}
                  className="text-fg underline decoration-iron underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  "{r.value}"
                </button>
              )}
              <span className="text-muted">
                {i < rows.length - 1 ? "," : ""}
              </span>
            </motion.div>
          ))}
          <motion.div variants={pillItem} className="text-muted">
            {"}"}
          </motion.div>
          <AnimatePresence>
            {copied && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="pl-4 text-muted"
              >
                # copied email to clipboard ✓
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </Section>
  );
}
