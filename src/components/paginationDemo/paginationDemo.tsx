import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
  PaginationEllipsis,
} from "@/components/ui/pagination"
import { ArrowLeft, ArrowLeftToLine, ArrowRight, ArrowRightToLine } from "lucide-react"

export default function PaginationDemo() {
  const currentPage = 1
  const totalItems = 120
  const itemsPerPage = 5
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const visiblePages = [1]

  return (
    <div className="flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6">
      <Pagination className="order-2 sm:order-1">
        <PaginationContent>
          {/* First page button */}
          <PaginationItem>
            <PaginationLink href="#" aria-label="Go to first page">
              <ArrowLeftToLine className="size-4" />
            </PaginationLink>
          </PaginationItem>

          {/* Previous page button */}
          <PaginationItem>
            <PaginationLink href="#">
              <ArrowLeft className="size-4" />
            </PaginationLink>
          </PaginationItem>

          {/* Page numbers */}
          {visiblePages.map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href={`?page=${page}`}
                isActive={page === currentPage}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}

          {/* Optional Ellipsis if many pages */}
          {totalPages > visiblePages.length && (
            <>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href={`?page=${totalPages}`}>
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            </>
          )}

          {/* Next page button */}
          <PaginationItem>
            <PaginationLink href="#">
              <ArrowRight className="size-4" />
            </PaginationLink>
          </PaginationItem>

          {/* Last page button */}
          <PaginationItem>
            <PaginationLink href="#" aria-label="Go to last page">
              <ArrowRightToLine className="size-4" />
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      {/* Items count */}
      <div className="text-sm text-muted-foreground order-1 sm:order-2">
        {(currentPage - 1) * itemsPerPage + 1}–{Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} items
      </div>
    </div>
  )
}
