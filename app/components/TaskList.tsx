'use client';

import { Switch } from './ToggleSwitch';
import { clsx } from 'clsx';

export interface Task {
  id: string;
  title: string;
  time: string;
  note?: string;
  completed: boolean;
  tag?: 'Personal' | 'Work' | 'Wellness';
}

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  filter: 'all' | 'today' | 'scheduled';
}

const filterByView = (tasks: Task[], view: TaskListProps['filter']) => {
  if (view === 'today') {
    return tasks.filter((task) => task.tag !== 'Work');
  }
  if (view === 'scheduled') {
    return tasks.filter((task) => !!task.note);
  }
  return tasks;
};

export function TaskList({ tasks, onToggle, filter }: TaskListProps) {
  const filtered = filterByView(tasks, filter);

  return (
    <div className="space-y-3">
      {filtered.map((task) => (
        <button
          key={task.id}
          onClick={() => onToggle(task.id)}
          className={clsx(
            'group flex w-full items-center gap-4 rounded-3xl bg-white/80 px-4 py-3 backdrop-blur border border-white/40 shadow-card transition',
            task.completed ? 'opacity-65' : 'hover:-translate-y-0.5'
          )}
        >
          <Switch checked={task.completed} />
          <div className="flex-1 text-left">
            <p className={clsx('text-base font-semibold tracking-tight', task.completed && 'line-through text-neutral-400')}>
              {task.title}
            </p>
            <div className="mt-1 flex items-center gap-2 text-xs text-neutral-500">
              <span>{task.time}</span>
              {task.note && <span>• {task.note}</span>}
            </div>
          </div>
          {task.tag && (
            <span className="rounded-full bg-neutral-950 px-3 py-1 text-xs font-semibold text-white">
              {task.tag}
            </span>
          )}
        </button>
      ))}
      {filtered.length === 0 && (
        <div className="rounded-3xl border border-dashed border-neutral-300 bg-white/50 px-6 py-10 text-center text-sm text-neutral-400">
          Everything is clear. Add a new reminder to stay on track.
        </div>
      )}
    </div>
  );
}
