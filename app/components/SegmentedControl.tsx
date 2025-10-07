'use client';

import { clsx } from 'clsx';

interface SegmentedControlProps<T extends string> {
  segments: { label: string; value: T }[];
  value: T;
  onChange: (value: T) => void;
}

export function SegmentedControl<T extends string>({ segments, value, onChange }: SegmentedControlProps<T>) {
  return (
    <div className="relative grid grid-cols-3 rounded-full bg-white/60 p-1 backdrop-blur border border-white/40 shadow-card">
      {segments.map((segment) => {
        const active = segment.value === value;
        return (
          <button
            key={segment.value}
            className={clsx(
              'relative z-10 rounded-full px-3 py-2 text-sm font-medium transition',
              active ? 'text-neutral-950' : 'text-neutral-500'
            )}
            onClick={() => onChange(segment.value)}
            type="button"
          >
            {segment.label}
            {active && (
              <span className="absolute inset-0 -z-10 rounded-full bg-white shadow-sm shadow-white/70" />
            )}
          </button>
        );
      })}
    </div>
  );
}
