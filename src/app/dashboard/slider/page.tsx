'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Slider } from '@/components/ui/slider';

type SliderProps = React.ComponentProps<typeof Slider>;

export default function SliderPage({ className, ...props }: SliderProps) {
  const [sliderValue, setSliderValue] = useState(10);
  const [rangeValue, setRangeValue] = useState([10, 40]);

  return (
    <div className="grid grid-cols-1 gap-1">
      <span>Slider value: {sliderValue}</span>
      <Slider
        defaultValue={[sliderValue]}
        onValueChange={(value) => setSliderValue(value[0])}
        max={100}
        step={1}
        className={cn('w-[60%]', className)}
        {...props}
      />

      <span>Range value: {rangeValue.join(',')}</span>
      <Slider
        defaultValue={rangeValue}
        onValueChange={setRangeValue}
        max={100}
        step={1}
        className={cn('w-[60%]', className)}
        {...props}
      />
    </div>
  );
}
