import { create } from 'zustand';
import { DateRange } from 'react-day-picker';
import { subDays } from 'date-fns';
type DashboardState = {
  activeTab: 'paid' | 'organic';
  dateRange: DateRange | undefined;
  setActiveTab: (tab: 'paid' | 'organic') => void;
  setDateRange: (dateRange: DateRange | undefined) => void;
};
export const useDashboardStore = create<DashboardState>((set) => ({
  activeTab: 'paid',
  dateRange: {
    from: subDays(new Date(), 29),
    to: new Date(),
  },
  setActiveTab: (tab) => set({ activeTab: tab }),
  setDateRange: (dateRange) => set({ dateRange }),
}));