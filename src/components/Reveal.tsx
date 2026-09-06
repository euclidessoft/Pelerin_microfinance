import { type ReactNode } from 'react';
import { useScrollReveal } from '@/lib/hooks';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-in-up' | 'fade-in-down' | 'fade-in' | 'slide-in-left' | 'slide-in-right' | 'scale-in';
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  animation = 'fade-in-up',
}: RevealProps) {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`${className} ${visible ? `animate-${animation}` : 'opacity-0-init'}`}
      style={{ animationDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
}
