'use client';

import { useState } from 'react';

interface TaskInputProps {
  onAdd: (title: string) => void;
}

export function TaskInput({ onAdd }: TaskInputProps) {
  const [value, setValue] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setValue('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-3 rounded-3xl bg-white/70 px-4 py-3 backdrop-blur border border-white/40 shadow-card"
    >
      <button
        type="submit"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-dashed border-neutral-300 text-neutral-400"
      >
        <span className="text-xl leading-none">+</span>
      </button>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="New reminder"
        className="w-full border-none bg-transparent text-base font-medium text-neutral-950 placeholder:text-neutral-400 focus:outline-none"
      />
    </form>
  );
}
