'use client';

import { useEffect, useState } from 'react';

import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

export default function PogressPage() {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressValue((prev) => {
        if (prev > 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Progress
      value={progressValue}
      indicatorColor={cn({
        'bg-red-500': progressValue < 50,
        'bg-yellow-500': progressValue > 50 && progressValue < 80,
        'bg-green-500': progressValue > 80,
      })}
    />
  );
}
