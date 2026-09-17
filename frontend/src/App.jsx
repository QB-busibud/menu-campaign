import React from 'react';
import { AppProvider } from './context/AppContext';
import { MiniNav } from './components/Layout/MiniNav';
import { SidebarContainer } from './components/Sidebar/SidebarContainer';
import { SpreadsheetTable } from './components/Table/SpreadsheetTable';
import { FloatingDock } from './components/Layout/FloatingDock';
import { ConversationModal } from './components/Modals/ConversationModal';
import { LeadGenModal } from './components/Modals/LeadGenModal';

function AppContent() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#FAFAFA] font-poppins text-slate-800 select-none">
      
      <MiniNav />

      
      <SidebarContainer />

      
      <SpreadsheetTable />

      
      <FloatingDock />

      
      <ConversationModal />
      <LeadGenModal />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
