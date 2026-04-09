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
    const [approvedDate, setApprovedDate] = React.useState<Date>()
  return (
    <main className='bg-muted/80 w-full md:w-1/3 p-5 ml-5 rounded-md '>
      <header>Correspondence Register</header>
      <Separator className='my-3' />

      <section className='flex flex-col gap-5'>
        
        <div>
                
              <form>
                  <FieldGroup>
                    <Field >
                        <FieldLabel htmlFor="date">Date</FieldLabel>
                        <Popover>
                            <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                id="date"
                                className="justify-start font-normal"
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                defaultMonth={date}
                            />
                            </PopoverContent>
                        </Popover>
                    </Field>

                    <Field>
                      <FieldLabel htmlFor="form-country">Complainer</FieldLabel>
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
                      <Label htmlFor="code">Page No</Label>
                      <Input required id="code" name="code" />
                    </Field>

                    <Field>
                      <Label htmlFor="title">Title</Label>
                      <Input required id="title" name="title" />
                    </Field>

                    <Field>
                      <FieldLabel htmlFor="form-country">Category</FieldLabel>
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

                    <Field>
                      <Label htmlFor="description">Description</Label>
                      <Textarea required id="description" name="description" />
                    </Field>
                    <Separator />
                    <Field>
                        <Label htmlFor="description">Response Nature</Label>
                        <RadioGroup defaultValue="option-one">
                            <div className="flex items-center gap-3">
                                <RadioGroupItem value="option-one" id="option-one" />
                                <Label htmlFor="option-one">Emergency <span className='text-xs'>(Less than 2 Days)</span></Label>
                            </div>
                            <div className="flex items-center gap-3">
                                <RadioGroupItem value="option-two" id="option-two" />
                                <Label htmlFor="option-two">Urgent <span className='text-xs'>(Within 3-7 Days)</span></Label>
                            </div>
                            <div className="flex items-center gap-3">
                                <RadioGroupItem value="option-three" id="option-three" />
                                <Label htmlFor="option-three">Not Urgent <span className='text-xs'>(Within 2 Weeks)</span></Label>
                            </div>
                            
                        </RadioGroup>
                    </Field>

                    <Field >
                        <FieldLabel htmlFor="approved-on">Approved on</FieldLabel>
                        <Popover>
                            <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                id="approved-on"
                                className="justify-start font-normal"
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {approvedDate ? format(approvedDate, "PPP") : <span>Pick a date</span>}
                            </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={approvedDate}
                                onSelect={setApprovedDate}
                                defaultMonth={approvedDate}
                            />
                            </PopoverContent>
                        </Popover>
                    </Field>
                  
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