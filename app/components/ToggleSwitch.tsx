'use client';

import { motion } from 'framer-motion';

interface SwitchProps {
  checked: boolean;
}

export function Switch({ checked }: SwitchProps) {
  return (
    <div className="inline-flex h-10 w-10 items-center justify-center">
      <motion.span
        layout
        className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${
          checked ? 'border-[#30c15d] bg-[#4cd964]' : 'border-neutral-200'
        }`}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {checked && (
          <motion.span
            layout
            className="h-3 w-3 rounded-full bg-white"
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        )}
      </motion.span>
    </div>
  );
}
