import { AppSidebar } from '@/components/dashboard/app-sidebar'
import { columns, Designation } from './columns'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import React from 'react'
import { DataTable } from './data-table'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'


async function getData(): Promise<Designation[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed521",
      code: "NO",
      title: "Nursing Officer",
      is_active: true
    },
    {
      id: "728ed521",
      code: "MO",
      title: "Medical Officer",
      is_active: true
    },
    {
      id: "728ed521",
      code: "DO",
      title: "Development Officer",
      is_active: true
    },
    
    
  ]
}


async function page() {
  const unit = await getData();
  return (
    <main className='bg-muted/50 p-5 w-1/2 ml-5 rounded-md'>
      <header>Manage Designation</header>
      <Separator className='my-5' />

      <section className='flex flex-col gap-5 '>
        
        <div>
           <Dialog>
              <form>
                <div className='flex justify-end'>
                  <DialogTrigger asChild>
                    <Button variant="outline">Add new designation</Button>
                  </DialogTrigger>
                </div>
                <DialogContent className="sm:max-w-sm">
                  <DialogHeader>
                    <DialogTitle>Create Unit</DialogTitle>
                    <Separator />
                    <DialogDescription>
                      Make changes to your profile here. Click save when you&apos;re
                      done.
                    </DialogDescription>
                  </DialogHeader>
                  <FieldGroup>
                    <Field>
                      <Label htmlFor="code">Code</Label>
                      <Input id="code" name="code" />
                    </Field>
                    <Field>
                      <Label htmlFor="title">Title</Label>
                      <Input id="title" name="title" />
                    </Field>

                    <Field>
                      <RadioGroup defaultValue="option-one">
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value="option-one" id="option-one" />
                          <Label htmlFor="option-one">Active</Label>
                        </div>
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value="option-two" id="option-two" />
                          <Label htmlFor="option-two">Inactive</Label>
                        </div>
                      </RadioGroup>
                    </Field>

                  </FieldGroup>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </form>
          </Dialog>
        </div>

        <div>
          <DataTable columns={columns} data={unit} />
        </div>
      </section>
    </main>   
  )
}

export default page