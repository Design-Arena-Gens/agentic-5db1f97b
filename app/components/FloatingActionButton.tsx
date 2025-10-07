'use client';

import { ComponentPropsWithoutRef } from 'react';
import { clsx } from 'clsx';

interface FloatingActionButtonProps extends ComponentPropsWithoutRef<'button'> {
  icon?: React.ReactNode;
}

export function FloatingActionButton({ icon, className, ...rest }: FloatingActionButtonProps) {
  return (
    <button
      className={clsx(
        'h-14 w-14 rounded-full bg-neutral-950 text-white shadow-lg shadow-neutral-950/25 transition hover:scale-[1.02] active:scale-95',
        'flex items-center justify-center text-2xl',
        className
      )}
      {...rest}
    >
      {icon ?? '+'}
    </button>
  );
}
