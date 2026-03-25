"use client"

import { ColumnDef } from "@tanstack/react-table"
import { FilePen, MoreHorizontal, ScanEye, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Unit = {
  id: string
  book_no: string
  name: string
  Category: string
  is_active: boolean
}

export const columns: ColumnDef<Unit>[] = [
  {
    accessorKey: "id",
    header: "id",
  },
  {
    accessorKey: "book_no",
    header: "Book No",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "Category",
    header: "Category",
  },
  {
    accessorKey: "is_active",
    header: "State",
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const payment = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>   
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel><p>Actions</p></DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              <FilePen />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-400"
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              <Trash2 />
              Delete
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem><ScanEye />View details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]