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
export type Correspondence = {
  compliant_id : string,
  date: string,
  complainer: string,
  page_no: number,
  title: string,
  category: string,
  description: string,
  response_nature: string,
  approved_on: string,
}

export const columns: ColumnDef<Correspondence>[] = [
  {
    accessorKey: "compliant_id",
    header: "Compliant ID",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "complainer",
    header: "Complainer",
  },
  {
    accessorKey: "page_no",
    header: "Page No",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "response_nature",
    header: "Response Nature",
  },
  {
    accessorKey: "approved_on",
    header: "Approved On",
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