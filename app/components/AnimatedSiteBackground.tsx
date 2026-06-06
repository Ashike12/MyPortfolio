"use client";

import { useEffect, useRef } from "react";

type OrbConfig = {
  className: string;
  size: number;
  startX: number;
  startY: number;
  speed: number;
  angle: number;
};

type OrbState = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
};

const ORBS: OrbConfig[] = [
  {
    className: "portfolio-orb-one",
    size: 80,
    startX: 0.1,
    startY: 0.14,
    speed: 96,
    angle: 34,
  },
  {
    className: "portfolio-orb-two",
    size: 120,
    startX: 0.74,
    startY: 0.56,
    speed: 84,
    angle: 214,
  },
  {
    className: "portfolio-orb-three",
    size: 64,
    startX: 0.58,
    startY: 0.18,
    speed: 108,
    angle: 132,
  },
  {
    className: "portfolio-orb-four hidden md:block",
    size: 92,
    startX: 0.22,
    startY: 0.68,
    speed: 90,
    angle: 308,
  },
  {
    className: "portfolio-orb-five",
    size: 56,
    startX: 0.36,
    startY: 0.4,
    speed: 116,
    angle: 78,
  },
  {
    className: "portfolio-orb-six",
    size: 104,
    startX: 0.88,
    startY: 0.18,
    speed: 78,
    angle: 246,
  },
  {
    className: "portfolio-orb-seven hidden sm:block",
    size: 72,
    startX: 0.16,
    startY: 0.82,
    speed: 102,
    angle: 310,
  },
  {
    className: "portfolio-orb-eight hidden sm:block",
    size: 44,
    startX: 0.8,
    startY: 0.82,
    speed: 124,
    angle: 154,
  },
  {
    className: "portfolio-orb-nine",
    size: 88,
    startX: 0.52,
    startY: 0.72,
    speed: 86,
    angle: 192,
  },
  {
    className: "portfolio-orb-ten hidden lg:block",
    size: 52,
    startX: 0.64,
    startY: 0.34,
    speed: 112,
    angle: 24,
  },
];

export default function AnimatedSiteBackground() {
  const orbRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const bounds = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    const states: OrbState[] = ORBS.map((orb) => {
      const radians = (orb.angle * Math.PI) / 180;
      const travel = orb.speed / 1000;
      return {
        x: Math.max(0, bounds.width * orb.startX - orb.size / 2),
        y: Math.max(0, bounds.height * orb.startY - orb.size / 2),
        vx: Math.cos(radians) * travel,
        vy: Math.sin(radians) * travel,
        size: orb.size,
      };
    });

    const syncTransforms = () => {
      states.forEach((state, index) => {
        const element = orbRefs.current[index];
        if (element) {
          element.style.transform = `translate3d(${state.x}px, ${state.y}px, 0)`;
        }
      });
    };

    const clampToBounds = () => {
      states.forEach((state) => {
        state.x = Math.min(Math.max(state.x, 0), Math.max(0, bounds.width - state.size));
        state.y = Math.min(Math.max(state.y, 0), Math.max(0, bounds.height - state.size));
      });
      syncTransforms();
    };

    const handleResize = () => {
      bounds.width = window.innerWidth;
      bounds.height = window.innerHeight;
      clampToBounds();
    };

    syncTransforms();

    if (prefersReducedMotion) {
      return () => undefined;
    }

    let frame = 0;
    let previous = performance.now();

    const tick = (now: number) => {
      const elapsed = Math.min(32, now - previous);
      previous = now;

      states.forEach((state) => {
        state.x += state.vx * elapsed;
        state.y += state.vy * elapsed;

        let bounced = false;
        const maxX = Math.max(0, bounds.width - state.size);
        const maxY = Math.max(0, bounds.height - state.size);

        if (state.x <= 0) {
          state.x = 0;
          state.vx = Math.abs(state.vx);
          bounced = true;
        } else if (state.x >= maxX) {
          state.x = maxX;
          state.vx = -Math.abs(state.vx);
          bounced = true;
        }

        if (state.y <= 0) {
          state.y = 0;
          state.vy = Math.abs(state.vy);
          bounced = true;
        } else if (state.y >= maxY) {
          state.y = maxY;
          state.vy = -Math.abs(state.vy);
          bounced = true;
        }

        if (bounced) {
          const speed = Math.hypot(state.vx, state.vy) * (0.98 + Math.random() * 0.06);
          const direction = Math.atan2(state.vy, state.vx) + (Math.random() - 0.5) * 0.28;
          state.vx = Math.cos(direction) * speed;
          state.vy = Math.sin(direction) * speed;
        }
      });

      syncTransforms();
      frame = window.requestAnimationFrame(tick);
    };

    window.addEventListener("resize", handleResize);
    frame = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div data-site-background aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="portfolio-animated-bg absolute inset-0" />
      <div className="portfolio-soft-vignette absolute inset-0" />
      {ORBS.map((orb, index) => (
        <div
          key={orb.className}
          ref={(node) => {
            orbRefs.current[index] = node;
          }}
          className={`portfolio-orb absolute ${orb.className}`}
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            transform: "translate3d(0, 0, 0)",
          }}
        />
      ))}
    </div>
  );
}
