import React from 'react';
import {AppSidebar} from '@/components/dashboard/app-sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <AppSidebar />
      <div className="flex flex-col flex-1">
        <main className="p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}