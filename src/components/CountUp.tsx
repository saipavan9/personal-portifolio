import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

type Props = {
  value: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
  delay?: number;
  className?: string;
};

/** Counts from 0 up to `value` when scrolled into view — SLO-dashboard feel. */
export default function CountUp({
  value,
  decimals = 0,
  suffix = "",
  duration = 0.9,
  delay = 0,
  className,
}: Props) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(
    reduced ? value.toFixed(decimals) : (0).toFixed(decimals),
  );

  useEffect(() => {
    if (reduced) {
      setDisplay(value.toFixed(decimals));
      return;
    }
    if (!inView) return;
    const controls = animate(0, value, {
      duration,
      delay,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, value, decimals, duration, delay, reduced]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
