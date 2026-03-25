import { Separator } from '@/components/ui/separator'
import React from 'react'
import { columns, Correspondence } from './columns'
import { DataTable } from './data-table'
async function getData(): Promise<Correspondence[]> {
  // Fetch data from your API here.
  return [
    {
      compliant_id : "COM-001",
      date: "12/03/2026",
      complainer: "Ward 01",
      page_no: 26,
      title: "Request for Medical Supplies",
      category: "Medical",
      description: "ahsdhasjhkdgashjkdgywyquieuiqwyeuiqyweytgyuqwge",
      response_nature: "Urgent",
      approved_on: "12/03/2026",
    },
    {
      compliant_id : "COM-002",
      date: "12/03/2026",
      complainer: "Ward 02",
      page_no: 27,
      title: "Request for Administrative Support",
      category: "Administrative",
      description: "ahsdhasjhkdgashjkdgywyquieuiqwyeuiqyweytgyuqwge",
      response_nature: "Urgent",
      approved_on: "12/03/2026",
    },
   
  ]
}

async function page() {
  const data = await await getData()
  return (
    <main className='bg-muted/80 rounded-lg p-4 m-4'>
      <header>
        <h1>Correspondence Table</h1>
      </header>
      <Separator className='my-4' />
      <section>
        <DataTable columns={columns} data={data} />
      </section>
    </main>
  )
}

export default page