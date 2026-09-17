import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
 
  const [activeTab, setActiveTab] = useState('worksheet_list'); // 'worksheet_list' | 'analytics'
  const [activeWorksheetId, setActiveWorksheetId] = useState('ws-06');
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  
  
  const [analyticsView, setAnalyticsView] = useState('overview'); // 'overview' | 'drilldown' | 'tickets'
  const [timeframe, setTimeframe] = useState('all_time'); // 'all_time' | 'last_30_days' | 'last_7_days'
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState('opened');
  const [searchQuery, setSearchQuery] = useState('');
  
  
  const [sidebarLoading, setSidebarLoading] = useState(false);
  const [tableLoading, setTableLoading] = useState(false);

  
  const [credits, setCredits] = useState(78);
  
  
  const [activeTicket, setActiveTicket] = useState(null);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showUseCasesModal, setShowUseCasesModal] = useState(false);

  const handleEnrich = async () => {
    if (credits > 0) {
      setCredits(prev => prev - 1);
      try {
        await api.enrichLead();
      } catch (e) {
       
      }
    }
  };

  const switchWorksheet = (wsId, rowIndex = null) => {
    setTableLoading(true);
    setActiveWorksheetId(wsId);
    setSelectedRowIndex(rowIndex);
    setTimeout(() => {
      setTableLoading(false);
    }, 350);
  };

  const switchTimeframe = (tf) => {
    setIsDropdownOpen(false);
    setSidebarLoading(true);
    setTimeframe(tf);
    setTimeout(() => {
      setSidebarLoading(false);
    }, 350);
  };

  const openDrillDown = (metric = 'opened') => {
    setSidebarLoading(true);
    setSelectedMetric(metric);
    setAnalyticsView('drilldown');
    setTimeout(() => {
      setSidebarLoading(false);
    }, 350);
  };

  const openTickets = (wsId = 'ws-04') => {
    setSidebarLoading(true);
    setAnalyticsView('tickets');
    setTimeout(() => {
      setSidebarLoading(false);
    }, 350);
  };

  const backToDrillDown = () => {
    setSidebarLoading(true);
    setAnalyticsView('drilldown');
    setTimeout(() => {
      setSidebarLoading(false);
    }, 350);
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        activeWorksheetId,
        setActiveWorksheetId: switchWorksheet,
        selectedRowIndex,
        setSelectedRowIndex,
        analyticsView,
        setAnalyticsView,
        timeframe,
        setTimeframe: switchTimeframe,
        isDropdownOpen,
        setIsDropdownOpen,
        selectedMetric,
        openDrillDown,
        openTickets,
        backToDrillDown,
        searchQuery,
        setSearchQuery,
        sidebarLoading,
        tableLoading,
        credits,
        handleEnrich,
        activeTicket,
        setActiveTicket,
        showSettingsModal,
        setShowSettingsModal,
        showUseCasesModal,
        setShowUseCasesModal
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
