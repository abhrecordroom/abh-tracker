"use client"

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Calendar as CalendarIcon } from "lucide-react"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { format } from 'date-fns'
import React from 'react'
import  useState  from 'react'

function page() {
    const [date, setDate] = React.useState<Date>()
  return (
    <main className='bg-muted/80 w-full md:w-1/3 p-5 ml-5 rounded-md'>
      <header>Complainer Register</header>
      <Separator className='my-5' />

      <section className='flex flex-col gap-5 '>
        
        <div>
            <form>
                  <FieldGroup>
                    <Field>
                      <Label htmlFor="code">Name</Label>
                      <Input required id="code" name="code" />
                    </Field>

                    <Field>
                      <FieldLabel htmlFor="form-country">Unit</FieldLabel>
                      <Select defaultValue="us">
                        <SelectTrigger id="form-country">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Choose complainer</SelectLabel>
                            <SelectItem value="w1">Ward 01</SelectItem>
                            <SelectItem value="w2">ward 02</SelectItem>
                            <SelectItem value="rr">Medical record room</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </Field>
                    
                    <Field>
                      <FieldLabel htmlFor="form-country">Designation</FieldLabel>
                      <Select defaultValue="us">
                        <SelectTrigger id="form-country">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Choose category</SelectLabel>
                            <SelectItem value="ad">Administrative</SelectItem>
                            <SelectItem value="me">Medical</SelectItem>
                            <SelectItem value="eq">Equipment</SelectItem>
                            <SelectItem value="ma">Maintainance</SelectItem>
                            <SelectItem value="ot">Others</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </Field>
  
                    <Separator />

                  <div className='flex gap-2 justify-end'>
                    <Button type='reset' variant={'outline'} className='mt-5'>Reset</Button>
                    <Button type="submit" className='mt-5'>Save details</Button>
                  </div>
                  </FieldGroup>
            </form>
        </div>
        <div>
          {/* <DataTable columns={columns} data={unit} /> */}
        </div>
      </section>
    </main> 
  )
}

export default page