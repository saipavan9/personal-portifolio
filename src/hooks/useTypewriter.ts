import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

type Options = {
  speed?: number; // ms per character
  start?: boolean; // begin typing when true
  delay?: number; // ms before typing starts
};

/**
 * Types out `text` one character at a time. Respects prefers-reduced-motion
 * (renders the full text instantly) — the CSS reduced-motion kill-switch
 * cannot stop a JS interval, so we gate here. StrictMode-safe: the effect
 * fully restarts on each (double-)invoke rather than guarding with a ref.
 */
export function useTypewriter(text: string, opts: Options = {}) {
  const { speed = 22, start = true, delay = 0 } = opts;
  const reduced = useReducedMotion();
  const [out, setOut] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduced) {
      setOut(text);
      setDone(true);
      return;
    }
    if (!start) return;

    setOut("");
    setDone(false);

    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const startTimer = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setOut(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(startTimer);
      clearInterval(interval);
    };
  }, [text, start, speed, delay, reduced]);

  return { text: out, done };
}
