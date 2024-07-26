'use client';

import { toast } from 'sonner';

import { Button } from '@/components/ui/button';

export function getLongDateFormat() {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const today = new Date();
  return today.toLocaleDateString('en-US', options);
}

export default function SonnerPage() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Button
        variant="outline"
        onClick={() =>
          toast('Event has been created', {
            description: `${getLongDateFormat()}`,
            duration: 2000,
            position: 'top-right',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        Show Toast
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.success('Event has been created', {
            className: 'bg-green-500 text-white',
            duration: 2000,
            position: 'top-right',
            description: `${getLongDateFormat()}`,
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        Show custom colors
      </Button>
    </div>
  );
}
