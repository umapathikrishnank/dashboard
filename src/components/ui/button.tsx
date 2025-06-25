import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-b from-sky-400 to-sky-700 text-white rounded-2xl focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 hover:bg-gradient-to-b hover:from-sky-500 hover:to-sky-800",
        outline:
          "bg-white outline outline-1 outline-sky-500 text-black rounded-2xl hover:bg-sky-50 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 hover:outline-sky-600",
        destructive:
          "bg-gradient-to-b from-red-400 to-pink-800 text-white rounded-2xl focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 hover:bg-gradient-to-b hover:from-red-500 hover:to-pink-900",
        secondary:
          "bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 underline leading-tight hover:text-primary/80",
      },
      size: {
        default: "h-9 px-4 w-60",
        sm: "h-8 px-3 text-sm",
        lg: "h-10 px-6 text-base",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)


function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
