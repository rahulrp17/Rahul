import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const letters = ["R", "A", "H", "U", "L", "."];

export default function Loader() {
  const reduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const displayProgress = reduceMotion ? 100 : progress;

  useEffect(() => {
    if (reduceMotion) {
      return undefined;
    }

    const duration = 2000;
    const start = performance.now();
    let frame;

    const tick = (now) => {
      const next = Math.min(
        100,
        Math.round(((now - start) / duration) * 100),
      );

      setProgress(next);

      if (next < 100) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [reduceMotion]);

  return (
    <motion.div
      className="nb-loader"
      role="status"
      aria-label="Loading Rahul's portfolio"
      exit={reduceMotion ? { opacity: 0 } : { y: "-100%" }}
      transition={{
        duration: reduceMotion ? 0.001 : 0.7,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      <div className="nb-loader__rail nb-loader__rail--signal" aria-hidden="true" />
      <div className="nb-loader__rail nb-loader__rail--violet" aria-hidden="true" />

      <div className="nb-loader__frame">
        <div className="nb-loader__top">
          <span>Rahul / Portfolio</span>
          <span>2026 — Intro</span>
        </div>

        <div className="nb-loader__center">
          <span className="nb-loader__eyebrow">MERN Stack Developer</span>

          <h1 className="nb-loader__name" aria-label="Rahul.">
            {letters.map((letter, index) => (
              <span
                className="nb-loader__letter"
                aria-hidden="true"
                key={`${letter}-${index}`}
              >
                <motion.span
                  initial={reduceMotion ? false : { y: "115%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.7,
                    delay: reduceMotion ? 0 : 0.12 + index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {letter}
                </motion.span>
              </span>
            ))}
          </h1>

          <p className="nb-loader__role">React / MERN / Interface Design</p>
        </div>

        <div className="nb-loader__bottom">
          <div className="nb-loader__meta">
            <span className="nb-loader__status">
              <span className="nb-loader__spinner" aria-hidden="true" />
              Loading experience
              <span className="nb-loader__dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            </span>
            <span>{displayProgress}%</span>
          </div>

          <div
            className="nb-loader__track"
            role="progressbar"
            aria-label="Loading portfolio"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={displayProgress}
          >
            <div
              className="nb-loader__fill"
              style={{ width: `${displayProgress}%` }}
            />
          </div>

          <div className="nb-loader__footer">
            <span>Portfolio 2026</span>
            <span>Scroll to explore</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
