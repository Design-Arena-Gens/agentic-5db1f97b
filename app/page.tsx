'use client';

import { useMemo, useState } from 'react';
import { TaskList, Task } from './components/TaskList';
import { TaskInput } from './components/TaskInput';
import { FloatingActionButton } from './components/FloatingActionButton';
import { ProgressRing } from './components/ProgressRing';
import { SegmentedControl } from './components/SegmentedControl';
import { clsx } from 'clsx';

const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Meditation session',
    time: 'Today · 7:30 AM',
    note: '10 minutes mindful breathing',
    completed: false,
    tag: 'Wellness'
  },
  {
    id: '2',
    title: 'Design system review',
    time: 'Today · 10:00 AM',
    note: 'Sync with product team',
    completed: false,
    tag: 'Work'
  },
  {
    id: '3',
    title: 'Pick up dry cleaning',
    time: 'Today · 6:00 PM',
    completed: true,
    tag: 'Personal'
  }
];

type Filter = 'all' | 'today' | 'scheduled';

export default function Home() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState<Filter>('all');

  const completedRatio = useMemo(() => {
    if (!tasks.length) return 0;
    const completed = tasks.filter((task) => task.completed).length;
    return completed / tasks.length;
  }, [tasks]);

  const scheduledCount = useMemo(() => tasks.filter((task) => !task.completed).length, [tasks]);

  const handleAddTask = (title: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      time: 'Today · 5:00 PM',
      completed: false,
      tag: 'Personal'
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const handleToggle = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed
            }
          : task
      )
    );
  };

  return (
    <main className="w-full max-w-sm">
      <section className="relative mx-auto flex h-[720px] max-w-sm flex-col gap-6 rounded-[40px] border border-white/70 bg-gradient-to-br from-white/95 via-white/90 to-white/65 p-6 backdrop-blur-2xl shadow-[0px_50px_80px_-40px_rgba(24,24,27,0.45)]">
        <header className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-neutral-400">
              <span>Today</span>
              <span>•</span>
              <span>{new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>
            </div>
            <h1 className="text-3xl font-semibold tracking-tight">Flowlist</h1>
          </div>
          <div className="relative flex flex-col items-center">
            <ProgressRing progress={completedRatio} radius={36} />
            <span className="absolute top-7 text-xs font-semibold text-neutral-600">
              {Math.round(completedRatio * 100)}%
            </span>
          </div>
        </header>

        <section className="space-y-4">
          <div className="rounded-3xl border border-white/60 bg-neutral-950 px-5 py-4 text-white shadow-[0px_35px_80px_-60px_rgba(15,15,15,0.65)]">
            <p className="text-sm uppercase tracking-[0.35em] text-white/60">Focus Session</p>
            <div className="mt-3 flex items-end justify-between">
              <div>
                <p className="text-4xl font-semibold leading-tight">{scheduledCount}</p>
                <p className="text-sm text-white/60">Reminders active</p>
              </div>
              <div className="rounded-2xl bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur">
                Deep Work
              </div>
            </div>
          </div>

          <SegmentedControl
            segments={[
              { label: 'All', value: 'all' },
              { label: 'Today', value: 'today' },
              { label: 'Scheduled', value: 'scheduled' }
            ]}
            value={filter}
            onChange={(value) => setFilter(value)}
          />
        </section>

        <TaskList tasks={tasks} onToggle={handleToggle} filter={filter} />

        <TaskInput onAdd={handleAddTask} />

        <FloatingActionButton
          className={clsx('absolute -bottom-7 right-6 shadow-[0px_25px_40px_-20px_rgba(0,0,0,0.5)]')}
          onClick={() => handleAddTask('Untitled reminder')}
          icon={
            <span className="flex items-center justify-center text-3xl font-light leading-none text-white">+</span>
          }
        />
      </section>
    </main>
  );
}
