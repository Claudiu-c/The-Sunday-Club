"use client";

import { useEffect, useRef, type HTMLAttributes } from "react";

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  direction?: "up" | "right";
  delay?: number;
  variant?: "default" | "text" | "image";
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  variant = "default",
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (
      !element ||
      !("IntersectionObserver" in window) ||
      typeof element.animate !== "function"
    ) {
      return;
    }

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (motion.matches) return;

    const initialTarget =
      variant === "image" ? (element.parentElement ?? element) : element;

    const initialBounds = initialTarget.getBoundingClientRect();

    const initiallyVisible =
      initialBounds.top < window.innerHeight && initialBounds.bottom > 0;

    if (initiallyVisible) return;

    const mobile = window.matchMedia("(max-width: 760px)").matches;
    const animations: Animation[] = [];

    function prepare(
      target: HTMLElement,
      keyframes: Keyframe[],
      options: KeyframeAnimationOptions,
    ) {
      const animation = target.animate(keyframes, {
        fill: "both",
        ...options,
      });

      animation.pause();
      animation.currentTime = 0;
      animation.onfinish = () => animation.cancel();

      animations.push(animation);
    }

    if (variant === "image") {
      prepare(
        element,
        [
          {
            opacity: 0,
            clipPath: "inset(0 0 100% 0)",
            transform: "translateY(45px) rotate(4deg) scale(0.96)",
          },
          {
            opacity: 1,
            clipPath: "inset(0 0 0% 0)",
            transform: "translateY(0) rotate(0deg) scale(1)",
          },
        ],
        {
          duration: mobile ? 1100 : 1400,
          delay,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        },
      );
    } else if (variant === "text") {
      Array.from(element.children).forEach((child, index) => {
        if (!(child instanceof HTMLElement)) return;

        prepare(
          child,
          [
            {
              opacity: 0,
              transform: "translateY(38px)",
            },
            {
              opacity: 1,
              transform: "translateY(0)",
            },
          ],
          {
            duration: mobile ? 850 : 1100,
            delay: delay + index * (mobile ? 100 : 140),
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          },
        );
      });
    } else {
      const distance = mobile ? 24 : 45;

      prepare(
        element,
        [
          {
            opacity: 0,
            transform:
              direction === "right"
                ? `translateX(${distance}px)`
                : `translateY(${distance}px)`,
          },
          {
            opacity: 1,
            transform: "translate(0, 0)",
          },
        ],
        {
          duration: 1000,
          delay,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        },
      );
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.some(
          (entry) => entry.isIntersecting && entry.intersectionRatio >= 0.15,
        );

        if (!visible) return;

        observer.disconnect();

        animations.forEach((animation) => {
          if (motion.matches) animation.cancel();
          else animation.play();
        });
      },
      {
        threshold: 0.15,
        rootMargin: mobile ? "0px 0px -60px 0px" : "0px 0px -120px 0px",
      },
    );

    function showImmediately() {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
    }

    function handleMotionChange() {
      if (motion.matches) showImmediately();
    }

    const observedElement =
      variant === "image" ? (element.parentElement ?? element) : element;

    observer.observe(observedElement);
    element.addEventListener("focusin", showImmediately);
    motion.addEventListener("change", handleMotionChange);

    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());

      element.removeEventListener("focusin", showImmediately);
      motion.removeEventListener("change", handleMotionChange);
    };
  }, [direction, delay, variant]);

  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
}
