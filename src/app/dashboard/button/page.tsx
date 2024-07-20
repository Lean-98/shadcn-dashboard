'use client';

import { Button } from '@/components/ui/button';
import { ChevronRight, Loader2, Mail } from 'lucide-react';
import Link from 'next/link';

export default function ButtonPage() {
  return (
    <div className="grid grid-cols-4 gap-2">
      <Button>default</Button>
      <Button variant={'destructive'}>destructive</Button>
      <Button variant={'ghost'}>ghost</Button>
      <Button variant={'link'}>link</Button>
      <Button variant={'outline'}>outline</Button>
      <Button variant={'secondary'}>secondary</Button>
      <Button disabled>disabled</Button>
      <Button onClick={() => console.log('first')}>Click Me</Button>
      <Button variant={'success'}>success</Button>
      <Button capitalize={false}>capitalize false</Button>
      <Button variant="outline" size="icon">
        <ChevronRight className="h-4 w-4" />
      </Button>
      <Button>
        <Mail className="mr-2 h-4 w-4" /> Login with Email
      </Button>
      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
      <Button asChild>
        <Link href="/dashboard/button">Login</Link>
      </Button>
    </div>
  );
}
