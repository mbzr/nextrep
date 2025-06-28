import clsx from 'clsx'

import { Button as ButtonHeadless } from '@headlessui/react'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'outline-light'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

export const Button = ({
  children,
  className,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  const variantClasses = {
    primary: 'bg-primary text-white border border-primary hover:bg-primary/90',
    secondary:
      'bg-foreground text-white border border-foreground hover:bg-foreground/90',
    outline:
      'bg-transparent text-foreground border border-foreground hover:bg-foreground/10',
    'outline-light':
      'bg-transparent text-white border border-white hover:bg-white/10',
  }

  return (
    <ButtonHeadless
      className={clsx(
        `inline-flex h-10 flex-none cursor-pointer items-center justify-center rounded-md px-4 py-2 font-medium transition-colors md:h-12`,
        variantClasses[variant],
        className,
        props.disabled && 'cursor-default opacity-50',
      )}
      {...props}
    >
      {children}
    </ButtonHeadless>
  )
}
