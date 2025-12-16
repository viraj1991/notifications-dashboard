'use client';

import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';
import { Notification, FilterState, KPI } from '../lib/types';
import { filterNotifications, computeKPIs, groupByCategory } from '../lib/utils';
import { useNotifications } from '../hooks/useNotifications';

interface AppContextValue {
  allNotifications: Notification[];
  filteredNotifications: Notification[];
  filters: FilterState;
  kpis: KPI;
  loading: boolean;
  error: boolean;
  uniqueCategories: string[];
  updateFilters: (update: Partial<FilterState>) => void;
  toggleRead: (id: number) => void;
  markAllVisibleAsRead: () => void;
  refreshData: () => void;
  categoryData: { category: string; count: number }[]; 
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

const initialFilters: FilterState = { status: 'All', category: 'All', search: '' };

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const { notifications: rawNotifications, loading, error, refresh } = useNotifications();

  const [allNotifications, setAllNotifications] = useState<Notification[]>([]);
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  useMemo(() => {
    setAllNotifications(rawNotifications);
  }, [rawNotifications]);

  const filteredNotifications = useMemo(() => {
    return filterNotifications(allNotifications, filters);
  }, [allNotifications, filters]);

  const kpis = useMemo(() => {
    return computeKPIs(filteredNotifications);
  }, [filteredNotifications]);

  const uniqueCategories = useMemo(() => {
    return [...new Set(allNotifications.map((n) => n.categoryId.toString()))].sort(
      (a, b) => parseInt(a) - parseInt(b)
    );
  }, [allNotifications]);

  const categoryData = useMemo(() => {
    return groupByCategory(filteredNotifications);
  }, [filteredNotifications]);

  const updateFilters = (update: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...update }));
  };

  const toggleRead = (id: number) => {
    setAllNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: !n.isRead } : n))
    );
  };

  const markAllVisibleAsRead = () => {
    const visibleIds = new Set(filteredNotifications.map((n) => n.id));
    setAllNotifications((prev) =>
      prev.map((n) => (visibleIds.has(n.id) ? { ...n, isRead: true } : n))
    );
  };

  const value: AppContextValue = {
    allNotifications,
    filteredNotifications,
    filters,
    kpis,
    loading,
    error,
    uniqueCategories,
    updateFilters,
    toggleRead,
    markAllVisibleAsRead,
    refreshData: refresh,
    categoryData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};


