import * as React from "react"
import { cn } from "@/lib/utils"

// Table container with blur and semi-transparent background
function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto" 
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  )
}

// Gradient header bar
function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn(
        "bg-gradient-to-b from-sky-600 to-sky-700 text-white first:rounded-tl-[20px] first:rounded-bl-[20px] last:rounded-tr-[20px] last:rounded-br-[20px]",
        className
      )}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0 ", className)}
      {...props}
    />
  )
}

// Gradient footer bar
function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-gradient-to-b from-sky-600 to-sky-700 text-white rounded-[20px] backdrop-blur-[9.92px]",
        className
      )}
      {...props}
    />
  )
}

// Row with hover style
function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "hover:bg-sky-100 border-b transition-colors ",
        className
      )}
      {...props}
    />
  )
}


// Headings with padding and white text
function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "h-12 px-4 text-left align-middle font-medium text-white whitespace-nowrap first:rounded-tl-[20px] first:rounded-bl-[20px] last:rounded-tr-[20px] last:rounded-br-[20px]",
        className
      )}
      {...props}
    />
  )
}

// Table cell with padding and text alignment
function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      // <div class="w-48 h-12 bg-gradient-to-b from-white/0 to-white/60 rounded-tl-[20px] rounded-bl-[20px] backdrop-blur-[9.92px]"></div>
      className={cn(
        // "p-4 align-middle whitespace-nowrap text-black  last:rounded-br-[20px] last:rounded-tr-[20px] first:rounded-tl-[20px] first:rounded-bl-[20px] bg-gradient-to-b from-white/0 to-white/60 backdrop-blur-[9.92px]",
        "p-4 align-middle whitespace-nowrap text-black",
        // Only apply gradient and blur if inside <tbody>
        "[tbody_&]:bg-gradient-to-b [tbody_&]:from-white/0 [tbody_&]:to-white/60",
        // Rounded corners only for last row of <tbody>
        "last:rounded-br-[20px] last:rounded-tr-[20px] first:rounded-tl-[20px] first:rounded-bl-[20px] backdrop-blur-[9.92px]",
        // Base border
        "border border-[#D7E1EC]",
        // Remove left/right borders for first and last cell
        "[&:first-child]:border-l-0 [&:first-child]:border-r-0",
        "[&:last-child]:border-l-0 [&:last-child]:border-r-0",
        className
      )}
      {...props}
    />
  )
}



// Optional caption with spacing
function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-sm", className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
