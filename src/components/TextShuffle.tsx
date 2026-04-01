import { useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

interface TextShuffleProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const TextShuffle = ({ text, className, style }: TextShuffleProps) => {
  const [output, setOutput] = useState(text);
  const frameRef = useRef<number | undefined>(undefined);
  const iterationRef = useRef(0);

  const scramble = () => {
    cancelAnimationFrame(frameRef.current!);
    iterationRef.current = 0;

    const animate = () => {
      const iter = iterationRef.current;
      setOutput(
        text
          .split("")
          .map((char, index) => {
            // once iteration has passed this character's index, lock it in
            if (index < Math.floor(iter)) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iterationRef.current < text.length) {
        iterationRef.current += 0.4;
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setOutput(text);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
  };

  return (
    <span
      className={className}
      style={{ ...style, cursor: "default" }}
      onMouseEnter={scramble}
    >
      {output}
    </span>
  );
};

export default TextShuffle;

