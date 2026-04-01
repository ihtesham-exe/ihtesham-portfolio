import { useEffect, useRef } from "react";

interface TextPressureProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  minWeight?: number;
  maxWeight?: number;
  radius?: number;
}

const TextPressure = ({
  text,
  className,
  style,
  minWeight = 100,
  maxWeight = 900,
  radius = 160,
}: TextPressureProps) => {
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      spansRef.current.forEach((span) => {
        if (!span) return;
        const rect = span.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dist = Math.sqrt((e.clientX - cx) ** 2 + (e.clientY - cy) ** 2);
        const ratio = Math.max(0, 1 - dist / radius);
        const weight = Math.round(minWeight + ratio * (maxWeight - minWeight));
        span.style.fontVariationSettings = `'wght' ${weight}`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [minWeight, maxWeight, radius]);

  return (
    <span className={className} style={style}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          ref={(el) => {
            spansRef.current[i] = el;
          }}
          style={{
            display: "inline-block",
            transition: "font-variation-settings 0.12s ease",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

export default TextPressure;
