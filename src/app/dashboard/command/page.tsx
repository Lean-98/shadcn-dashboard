'use client';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  CommandDialog,
} from '@/components/ui/command';
import { useEffect, useState } from 'react';
import { DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { CalendarIcon, RocketIcon } from 'lucide-react';
import {
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
} from '@radix-ui/react-icons';

export default function CommandPage() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        aria-describedby="dialog-description"
      >
        <div id="dialog-content">
          <DialogTitle className="text-center font-light mt-3">
            Title Example
          </DialogTitle>
          {/* FIXME: */}
          <DialogDescription className="mt-2 ml-4" id="dialog-description">
            This dialog provides various commands and settings.
          </DialogDescription>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem onSelect={() => console.log('Calendar')}>
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem onSelect={() => console.log('Search Emoji')}>
                <FaceIcon className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem onSelect={() => console.log('Launch')}>
                <RocketIcon className="mr-2 h-4 w-4" />
                <span>Launch</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem onSelect={() => console.log('Profile')}>
                <PersonIcon className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => console.log('Mail')}>
                <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
                <span>Mail</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => console.log('Settings')}>
                <GearIcon className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </div>
      </CommandDialog>

      <div className="mt-10 h-[200px] flex justify-center items-center">
        <p className="text-sm text-muted-foreground">
          Press{' '}
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>J
          </kbd>{' '}
          or{' '}
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">CTRL</span> + J
          </kbd>
        </p>
      </div>
    </div>
  );
}
