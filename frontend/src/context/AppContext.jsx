import React, { createContext, useContext, useState, useMemo } from 'react';
import { api } from '../services/api';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Navigation & Worksheet State
  const [activeWorksheetId, setActiveWorksheetId] = useState('ws-06');
  const [activeTab, setActiveTab] = useState('worksheet_list'); // 'worksheet_list' | 'analytics'
  const [analyticsView, setAnalyticsView] = useState('overview'); // 'overview' | 'drilldown' | 'tickets'
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  // Timeframe Filter: 'All time' | 'Last 30 days' | 'Last 7 days'
  const [timeframe, setTimeframe] = useState('All time');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sidebarLoading, setSidebarLoading] = useState(false);
  const [tableLoading, setTableLoading] = useState(false);

  // Search in drilldown/opened
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTicketId, setSelectedTicketId] = useState(1);
  const [activeTicket, setActiveTicket] = useState(null);

  // Credits & Modals
  const [credits, setCredits] = useState(78);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showUseCasesModal, setShowUseCasesModal] = useState(false);
  const [showPendingJobs, setShowPendingJobs] = useState(false);

  const activeWorksheetName = activeWorksheetId === 'ws-04' 
    ? 'UNTITLED WORKSHEET 04' 
    : 'UNTITLED WORKSHEET 06';

  // Dynamic metrics based on timeframe
  const metricsData = useMemo(() => {
    switch (timeframe) {
      case 'Last 30 days':
        return {
          title: 'ALL CAMPAIGNS ANALYTICS (600)',
          totalCount: 600,
          replyRate: '16.9 %',
          replyDetail: '298 replies from 1,842 sent',
          openRate: '68%',
          opened: 500,
          sent: 200,
          replied: 250,
          bounced: 250,
          websiteVisited: 200,
          unsubscribed: 250
        };
      case 'Last 7 days':
        return {
          title: 'ALL CAMPAIGNS ANALYTICS (250)',
          totalCount: 250,
          replyRate: '18.2 %',
          replyDetail: '95 replies from 520 sent',
          openRate: '72.5%',
          opened: 180,
          sent: 80,
          replied: 95,
          bounced: 45,
          websiteVisited: 70,
          unsubscribed: 30
        };
      case 'All time':
      default:
        return {
          title: 'ALL CAMPAIGNS ANALYTICS (1200)',
          totalCount: 1200,
          replyRate: '16.9 %',
          replyDetail: '298 replies from 1,842 sent',
          openRate: '68%',
          opened: 500,
          unsubscribed: 250,
          bounced: 200
        };
    }
  }, [timeframe]);

  const switchTimeframe = (tf) => {
    setIsDropdownOpen(false);
    setSidebarLoading(true);
    setTimeframe(tf);
    setTimeout(() => {
      setSidebarLoading(false);
    }, 400);
  };

  const switchWorksheet = (id) => {
    setTableLoading(true);
    setActiveWorksheetId(id);
    setSelectedRowIndex(null);
    setTimeout(() => {
      setTableLoading(false);
    }, 350);
  };

  const openOpenedDrilldown = () => {
    setSidebarLoading(true);
    setAnalyticsView('drilldown');
    setTimeout(() => {
      setSidebarLoading(false);
    }, 350);
  };

  const openTicketsList = (wsId = 'ws-04') => {
    setSidebarLoading(true);
    setActiveWorksheetId(wsId);
    setSelectedRowIndex(3);
    setAnalyticsView('tickets');
    setTimeout(() => {
      setSidebarLoading(false);
    }, 350);
  };

  const handleEnrich = async () => {
    if (credits > 0) {
      setCredits(prev => prev - 1);
      try {
        await api.enrichLead();
      } catch (e) {
        // fallback
      }
    }
  };

  return (
    <AppContext.Provider
      value={{
        activeWorksheetId,
        activeWorksheetName,
        switchWorksheet,
        activeTab,
        setActiveTab,
        analyticsView,
        setAnalyticsView,
        selectedRowIndex,
        setSelectedRowIndex,
        timeframe,
        setTimeframe: switchTimeframe,
        isDropdownOpen,
        setIsDropdownOpen,
        sidebarLoading,
        tableLoading,
        metricsData,
        openOpenedDrilldown,
        openTicketsList,
        searchQuery,
        setSearchQuery,
        selectedTicketId,
        setSelectedTicketId,
        activeTicket,
        setActiveTicket,
        credits,
        handleEnrich,
        showSettingsModal,
        setShowSettingsModal,
        showUseCasesModal,
        setShowUseCasesModal,
        showPendingJobs,
        setShowPendingJobs
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
