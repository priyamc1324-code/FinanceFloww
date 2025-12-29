
"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { cn } from '@/lib/utils';

type TypewriterButtonProps = {
  text: string;
  href?: string;
  startDelay?: number;
  download?: boolean;
  className?: string;
  onClick?: () => void;
};

const TypewriterButton: React.FC<TypewriterButtonProps> = ({
  text,
  href,
  startDelay = 0,
  download = false,
  className,
  onClick,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const startTyping = () => {
      setIsTyping(true);
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedText(text.substring(0, i + 1));
        i++;
        if (i > text.length) {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 75);
    };

    const timeout = setTimeout(startTyping, startDelay);

    return () => clearTimeout(timeout);
  }, [text, startDelay]);

  const buttonContent = (
    <span className="relative">
      {displayedText}
      {isTyping && <span className="animate-blink">|</span>}
    </span>
  );

  const button = (
    <Button
      size="lg"
      variant="outline"
      className={cn("font-bold", className)}
      onClick={onClick}
    >
      {buttonContent}
    </Button>
  );

  if (href) {
    if (download) {
      return (
        <a href={href} download className={cn(className, "w-48")}>
          {button}
        </a>
      );
    }
    return (
      <Link href={href} passHref>
          {button}
      </Link>
    );
  }

  return button;
};

export default TypewriterButton;
