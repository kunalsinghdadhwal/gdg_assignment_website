'use client';
import { SlidingNumber } from '@/components/ui/sliding-number';
import { useEffect, useState } from 'react';

export function Countdown({ targetDate }: { targetDate: Date }) {
  const calculateRemaining = () => {
    const now = new Date().getTime();
    const diff = targetDate.getTime() - now;

    if (diff <= 0) return { hours: 0, minutes: 0, seconds: 0 };

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  };

  const [time, setTime] = useState(calculateRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex items-center gap-0.5 font-mono">
      <SlidingNumber value={time.hours} padStart={true} />
      <span className="text-zinc-500">:</span>
      <SlidingNumber value={time.minutes} padStart={true} />
      <span className="text-zinc-500">:</span>
      <SlidingNumber value={time.seconds} padStart={true} />
    </div>
  );
}
