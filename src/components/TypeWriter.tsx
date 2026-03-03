"use client";

import { useEffect, useState } from "react";

interface TypeWriterProps {
  phrases: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  className?: string;
}

export default function TypeWriter({
  phrases,
  typeSpeed = 80,
  deleteSpeed = 45,
  pauseTime = 1800,
  className,
}: TypeWriterProps) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];

    if (!isDeleting && text === current) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setText(
          isDeleting
            ? current.slice(0, text.length - 1)
            : current.slice(0, text.length + 1)
        );
      },
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases, typeSpeed, deleteSpeed, pauseTime]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-[3px] h-[0.8em] bg-[#00B4D8] ml-1 align-middle animate-pulse rounded-sm" />
    </span>
  );
}
