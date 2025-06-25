import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "relative inline-flex h-6 w-12 cursor-pointer items-center rounded-[100px] transition-colors outline outline-2 outline-sky-500 shadow-[inset_0px_3px_20px_0px_rgba(0,0,0,0.15)]",
        "bg-gradient-to-b from-gray-200 to-stone-300 data-[state=checked]:from-sky-600 data-[state=checked]:to-sky-700",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "absolute top-0 h-6 w-6 rounded-[100px] transition-transform duration-200",
          "bg-gradient-to-b from-gray-200 to-stone-300 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.35)] outline outline-2 outline-sky-600",
          "data-[state=checked]:translate-x-6 translate-x-0"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
