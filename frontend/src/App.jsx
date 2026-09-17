import React from 'react';
import { AppProvider } from './context/AppContext';
import { MiniNav } from './components/Layout/MiniNav';
import { SidebarContainer } from './components/Sidebar/SidebarContainer';
import { SpreadsheetTable } from './components/Table/SpreadsheetTable';
import { FloatingDock } from './components/Layout/FloatingDock';
import { ConversationModal } from './components/Modals/ConversationModal';
import { LeadGenModal } from './components/Modals/LeadGenModal';

function MainAppLayout() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#FAFAFA] font-sans text-slate-800 select-none">
      {/* 1. Leftmost Mini Navigation Strip (Logo, pink table icon, speaker, gear, online avatar) */}
      <MiniNav />

      {/* 2. Secondary Collapsible Navigation & Analytics Sidebar */}
      <SidebarContainer />

      {/* 3. Center Main Spreadsheet Table View */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        <SpreadsheetTable />
        {/* Floating Quick Access Dock */}
        <FloatingDock />
      </div>

      {/* 4. Interactive Modals */}
      <ConversationModal />
      <LeadGenModal />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainAppLayout />
    </AppProvider>
  );
}
