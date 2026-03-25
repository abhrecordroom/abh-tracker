import { AppSidebar } from "@/components/dashboard/app-sidebar"
import { Button } from "@/components/ui/button"

import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

// Dummy data for overview counts
const overview_count = {
  complaint: 170,
  on_process: 60,
  overdue: 10,
  completed: 100
}


export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
           <h1 className="text-2xl font-semibold">Complaint & Correspondence Tracking System</h1>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <h1>Overview</h1>
          <div className="grid auto-rows-min gap-4 md:grid-cols-4">
            {/* <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" /> */}
            <div className="overview-card bg-blue-400">
              <h1 className="text-xl font-bold">Complaint</h1>
              <h1 className="overview-card-counter">{overview_count.complaint}</h1>
              <Button variant="ghost" size="sm">View details</Button>
            </div>
            <div className="overview-card bg-yellow-400">
              <h1 className="text-xl font-bold">On Process</h1>
              <h1 className="overview-card-counter">{overview_count.on_process}</h1>
              <Button variant="ghost" size="sm">View details</Button>
            </div>
            <div className="overview-card bg-red-500">
              <h1 className="text-xl font-bold">Overdue</h1>
              <h1 className="overview-card-counter">{overview_count.overdue}</h1>
              <Button variant="ghost" size="sm">View details</Button>
            </div>
            <div className="overview-card bg-green-500">
              <h1 className="text-xl font-bold">Completed</h1>
              <h1 className="overview-card-counter">{overview_count.completed}</h1>
              <Button variant="ghost" size="sm">View details</Button>
            </div>
            
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
