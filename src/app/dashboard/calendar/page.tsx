'use client';

import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [multiplesDates, setMultiplesDates] = useState<Date[] | undefined>([]);

  const formatterDate = date?.toLocaleDateString('es-ES', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });

  return (
    <div className="flex-col flex-wrap sm:flex sm:flex-row gap-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
        disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
      />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
        disabled={(date) => date < new Date()}
      />
      <Calendar
        mode="multiple"
        selected={multiplesDates}
        onSelect={setMultiplesDates}
        className="rounded-md border shadow"
      />
      <div>
        <h1 className="text-3xl">Información</h1>
        <div className="border-b">
          <p>{formatterDate}</p>
          <p>
            {multiplesDates
              ?.map((date) => date.toLocaleDateString())
              .join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
}
