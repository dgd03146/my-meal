import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const buttonVariants = cva(
  // layout
  'cursor:pointer',
  {
    variants: {
      variant: {
        default:
          'bg-secondary text-black hover:opacity-70 transition-opacity border-2 border-r-8 border-b-8 border-neutral font-semibold text-lg',
        destructive: 'bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600',
        outline: 'bg-transparent border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100',
        subtle: 'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100',
        ghost:
          'bg-transparent dark:bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent',
        link: 'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-300 hover:bg-transparent dark:hover:bg-transparent',
      },
      size: {
        default: 'py-2 px-4 rounded-2xl',
        sm: 'px-2 rounded-md',
        lg: 'px-8 py-4 rounded-3xl',
      },
    },
    // set up default value
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  href?: string;
  text?: string;
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, children, href, variant, size, text, ...props }, ref) => {
    if (href) {
      return (
        <Link href={href} className={cn(buttonVariants({ variant, size, className }))}>
          {children}
        </Link>
      );
    }
    return (
      <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {text && text}
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
