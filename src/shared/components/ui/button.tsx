import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import type { VariantProps } from "class-variance-authority"
import { mergeClass } from "@shared/libs"

const buttonVariants = cva(
  "flex items-center justify-center font-medium whitespace-nowrap text-sm leading-none! transition-all duration-300 gap-2 group relative cursor-pointer select-none",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground",
        outline: "border border-border bg-background text-foreground",
        text: "text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground border border-transparent hover:bg-secondary/60 hover:border-border",
      },
      size: {
        base: "h-10 px-4 rounded-xl text-sm",
        sm: "h-9 px-3 rounded-full",
        lg: "h-14 px-5 rounded-2xl",
        icon: "h-10 w-10 rounded-2xl text-sm bg-surface",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "base",
    },
  },
)

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

const Button = ({
  ref,
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps & { ref?: React.RefObject<HTMLButtonElement | null> }) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={mergeClass(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
}

Button.displayName = "Button"

export { Button, buttonVariants }
