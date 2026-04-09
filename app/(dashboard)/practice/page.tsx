"use client"

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogHeader, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from "date-fns";
import React, { useState } from 'react'

const NAMES_LIST = ["Alice Johnson", "Bob Smith", "Charlie Davis"];
function page() {
  
  // Store selections as an object: { [name]: { checked: boolean, date: Date | undefined } }
  const [selections, setSelections] = useState<Record<string, any>>({});

  const toggleName = (name: string, isChecked: boolean) => {
    setSelections((prev) => ({
      ...prev,
      [name]: { ...prev[name], checked: isChecked },
    }));
  };

  const setDate = (name: string, date: Date | undefined) => {
    setSelections((prev) => ({
      ...prev,
      [name]: { ...prev[name], date: date },
    }));
  };
  
  const date = selections.date;
  
    return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open User List</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[80vh] overflow-y-auto" onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Assign Dates to Users</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {NAMES_LIST.map((name) => (
            <div key={name} className="flex flex-col space-y-3 border-b pb-4 last:border-0">

                <div className='flex justify-between'>
                    <div className="flex items-center space-x-2">
                        <Checkbox 
                        id={name} 
                        onCheckedChange={(checked) => toggleName(name, !!checked)}
                        checked={selections[name]?.checked || false}
                        />
                        <label htmlFor={name} className="text-sm font-medium leading-none">
                        {name}
                        </label>
                    </div>

                    {/* Date Picker appearing only if checked */}
                    {selections[name]?.checked && (
                        <Popover>
                        <PopoverTrigger asChild>
                            <Button
                            variant={"outline"}
                            className={cn(
                                "w-[240px] justify-start text-left font-normal",
                                !selections[name]?.date && "text-muted-foreground"
                            )}
                            >
                            
                            {/* This logic shows the selected date or a placeholder */}
                            {/* {selections[name]?.date instanceof Date && !isNaN(selections[name]?.date.getTime()) ? format(selections[name]?.date, "PPP") : (<span>Pick a date</span>)} */}
                            {selections[name]?.date ? format(new Date(selections[name]?.date), "dd/MM/yyyy") : (<span>Pick a date</span>)}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                            mode="single"
                            selected={selections[name]?.date}
                            onSelect={(date) => setDate(name, date)}
                            initialFocus
                            />

                            
                        </PopoverContent>
                        </Popover>
                        )}
                </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default page