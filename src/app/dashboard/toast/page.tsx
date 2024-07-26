'use client';

import { Button } from '@/components/ui/button';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';
import { getLongDateFormat } from '../sonner/page';

export default function ToastPage() {
  const { toast } = useToast();

  return (
    <div className="grid grid-cols-4 gap-3">
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: 'Scheduled: Catch up ',
            description: `${getLongDateFormat()}`,
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
          });
        }}
      >
        Add to calendar
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast({
            description: 'Your message has been sent.',
          });
        }}
      >
        Show Toast simple
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: 'Uh oh! Something went wrong.',
            description: 'There was a problem with your request.',
          });
        }}
      >
        Show Toast with title
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: 'Uh oh! Something went wrong.',
            description: 'There was a problem with your request.',
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        }}
      >
        Show Toast with action
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast({
            variant: 'destructive',
            title: 'Uh oh! Something went wrong.',
            description: 'There was a problem with your request.',
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        }}
      >
        Show Toast destructive
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast({
            variant: 'success',
            title: 'Uh oh! Something went wrong.',
            description: 'There was a problem with your request.',
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        }}
      >
        Show Toast success
      </Button>
    </div>
  );
}
