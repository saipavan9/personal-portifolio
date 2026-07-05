import type { Variants } from "motion/react";

/** Container that reveals children top-to-bottom, like printed terminal output. */
export const listContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const listItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

/** Tighter stagger for small chips/pills that "tick in" like a package list. */
export const pillContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.02, delayChildren: 0.15 } },
};

export const pillItem: Variants = {
  hidden: { opacity: 0, y: 4 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
};
