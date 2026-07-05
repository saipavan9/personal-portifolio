import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { profile } from "@/data";
import { useTypewriter } from "@/hooks/useTypewriter";
import CountUp from "@/components/CountUp";
import TechMarquee from "@/components/TechMarquee";

const outputContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.035 } },
};
const outputLine: Variants = {
  hidden: { opacity: 0, y: 4 },
  show: { opacity: 1, y: 0, transition: { duration: 0.15, ease: "easeOut" } },
};

const YAML_LINES = [
  <>
    <span className="text-muted">apiVersion:</span> career/v1
  </>,
  <>
    <span className="text-muted">kind:</span> Engineer
  </>,
  <>
    <span className="text-muted">metadata:</span>
  </>,
  <>{"  name: sai-pavan-nunna"}</>,
  <>{"  labels:"}</>,
  <>
    {"    role: "}
    <span className="text-accent">sre</span>
  </>,
  <>
    {"    focus: "}
    <span className="text-accent">platforms</span>
  </>,
  <>
    <span className="text-muted">spec:</span>
  </>,
  <>{"  experience: 7y"}</>,
  <>{"  certs: [CKA, CKAD, AWS-SAA, GCP-PCA]"}</>,
  <>{"  stack: [kubernetes, terraform, go, aws]"}</>,
  <>
    <span className="text-muted">status:</span>
  </>,
  <>
    {"  phase: "}
    <span className="text-ok">Available</span>
  </>,
];

function TerminalPanel() {
  const cmd = "kubectl get me -o yaml";
  const { text: typed, done: cmdDone } = useTypewriter(cmd, {
    speed: 22,
    delay: 150,
  });
  const kw = "kubectl";
  const shownKw = typed.slice(0, kw.length);
  const shownRest = typed.slice(kw.length);

  return (
    <div className="overflow-hidden rounded-lg border border-iron bg-obsidian font-mono text-[13px] leading-relaxed shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-iron bg-graphite px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-2 text-xs text-muted">~/saipavan</span>
      </div>
      <div className="px-4 py-4 text-fg">
        <div className="whitespace-pre">
          <span className="text-muted">❯</span>{" "}
          <span className="text-accent">{shownKw}</span>
          <span>{shownRest}</span>
          {!cmdDone && <span className="cursor-blink" />}
        </div>
        <motion.div
          variants={outputContainer}
          initial="hidden"
          animate={cmdDone ? "show" : "hidden"}
        >
          {YAML_LINES.map((ln, i) => (
            <motion.div key={i} variants={outputLine} className="whitespace-pre">
              {ln}
              {cmdDone && i === YAML_LINES.length - 1 && (
                <span className="cursor-blink" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function parseStat(v: string) {
  const m = v.match(/^([\d.]+)(.*)$/);
  const numStr = m?.[1] ?? "0";
  const suffix = m?.[2] ?? "";
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return { value: parseFloat(numStr), suffix, decimals };
}

export default function Hero() {
  return (
    <section id="top" className="relative z-10 flex min-h-screen flex-col">
      <div className="mx-auto flex w-full max-w-5xl flex-1 items-center px-6 pt-24 pb-10">
        <div className="grid w-full items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-iron bg-obsidian px-3 py-1 font-mono text-xs text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ok" />
              </span>
              {profile.availability}
            </div>

            <p className="mb-3 font-mono text-sm text-muted">
              ❯ kubectl auth whoami
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-bright sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-3 font-mono text-base text-accent sm:text-lg">
              {profile.role}
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
              {profile.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-6">
              {profile.stats.map((s, i) => {
                const { value, suffix, decimals } = parseStat(s.value);
                return (
                  <div key={s.label}>
                    <div className="font-mono text-2xl font-bold text-bright">
                      <CountUp
                        value={value}
                        decimals={decimals}
                        suffix={suffix}
                        delay={0.35 + i * 0.08}
                      />
                    </div>
                    <div className="font-mono text-xs text-muted">{s.label}</div>
                  </div>
                );
              })}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center rounded-md bg-accent px-5 py-2.5 font-mono text-sm font-semibold text-[#04201c] transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <span className="inline-block w-0 -translate-x-1 overflow-hidden opacity-0 transition-all duration-150 group-hover:w-[1.2ch] group-hover:translate-x-0 group-hover:opacity-100">
                  ❯
                </span>
                aws s3 cp resume.pdf
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center rounded-md border border-iron px-5 py-2.5 font-mono text-sm text-fg transition-colors hover:border-accent hover:text-accent active:scale-[0.98]"
              >
                <span className="inline-block w-0 -translate-x-1 overflow-hidden opacity-0 transition-all duration-150 group-hover:w-[1.2ch] group-hover:translate-x-0 group-hover:opacity-100">
                  ❯
                </span>
                kubectl get contact
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <TerminalPanel />
          </motion.div>
        </div>
      </div>
      <TechMarquee />
    </section>
  );
}
