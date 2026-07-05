import { useRef } from "react";
import { motion, useInView } from "motion/react";
import type { ReactNode } from "react";
import { useTypewriter } from "@/hooks/useTypewriter";

type Props = {
  id: string;
  name: string;
  command: string;
  comment?: string;
  children: ReactNode;
};

export default function Section({ id, name, command, comment, children }: Props) {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-100px" });
  const { text: typed, done } = useTypewriter(command, {
    start: inView,
    speed: 22,
  });

  return (
    <motion.section
      id={id}
      aria-label={name}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative z-10 mx-auto w-full max-w-5xl scroll-mt-24 px-6 py-16 md:py-24"
    >
      <div className="mb-10" ref={headerRef}>
        <h2 className="font-mono text-base text-accent md:text-lg">
          <span className="sr-only">{name}</span>
          <span aria-hidden="true">
            <span className="text-muted">❯</span> {typed}
            {!done && <span className="cursor-blink" />}
          </span>
        </h2>
        {comment && (
          <motion.p
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: done ? 1 : 0 }}
            transition={{ duration: 0.25 }}
            className="mt-2 font-mono text-xs text-muted"
          >
            {comment}
          </motion.p>
        )}
      </div>
      {children}
    </motion.section>
  );
}
