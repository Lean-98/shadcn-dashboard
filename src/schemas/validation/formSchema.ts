'use client';

import { z } from 'zod';

export const formSchema = z
  .object({
    username: z.string().min(2).max(20),
    email: z.string().email(),
    gender: z.enum(['male', 'female'], {
      message: 'Please select.',
    }),
    dateOfBirth: z.date({
      required_error: 'A date of birth is required.',
    }),
    marketing_emails: z.boolean().default(false),
    security_emails: z.boolean().default(false),
  })
  .refine((data) => data.marketing_emails === true, {
    message: 'Yout must agree to receive marketing emails',
    path: ['marketing_emails'],
  })
  .refine((data) => data.security_emails === true, {
    message: 'You must agree to segurity emails',
    path: ['security_emails'],
  });
