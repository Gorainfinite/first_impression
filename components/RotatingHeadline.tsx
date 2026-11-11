"use client";
import { useEffect, useState } from "react";

/** Replaces the blocks/rotating-headline custom Gutenberg block. */
export default function RotatingHeadline({
  lead,
  line,
  words,
  interval = 2600,
}: {
  lead: string;
  line: string;
  words: string[];
  interval?: number;
}) {
  const [i, setI] = useState(0);
  const [out, setOut] = useState(false);

  useEffect(() => {
    if (words.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let swap: ReturnType<typeof setTimeout>;
    const t = setInterval(() => {
      setOut(true);
      swap = setTimeout(() => {
        setI((n) => (n + 1) % words.length);
        setOut(false);
      }, 350);
    }, interval);
    return () => {
      clearInterval(t);
      clearTimeout(swap);
    };
  }, [words, interval]);

  return (
    <h1 className="tfi-rotator">
      <span className="tfi-rotator__lead">{lead}</span>
      <span className="tfi-rotator__line">
        {line}{" "}
        <span className={`tfi-rotator__word${out ? " is-out" : ""}`} aria-live="polite">
          {words[i]}
        </span>
      </span>
    </h1>
  );
}
