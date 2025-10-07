'use client';

import { useMemo } from 'react';

interface ProgressRingProps {
  radius?: number;
  stroke?: number;
  progress: number;
}

export function ProgressRing({ radius = 30, stroke = 6, progress }: ProgressRingProps) {
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;

  const dashOffset = useMemo(() => {
    const clamped = Math.min(Math.max(progress, 0), 1);
    return circumference - clamped * circumference;
  }, [progress, circumference]);

  return (
    <svg height={radius * 2} width={radius * 2} className="text-apple-200">
      <circle
        stroke="rgba(60, 60, 67, 0.1)"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="url(#progressGradient)"
        fill="transparent"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset: dashOffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <defs>
        <linearGradient id="progressGradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#4cd964" />
          <stop offset="100%" stopColor="#30c15d" />
        </linearGradient>
      </defs>
    </svg>
  );
}
