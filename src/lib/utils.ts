import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { DateRange } from "react-day-picker";
import { AnyPerformanceData } from "@/types";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function formatCompactNumber(number: number) {
  if (number < 1000) {
    return number.toString();
  }
  if (number < 1000000) {
    return (number / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  if (number < 1000000000) {
    return (number / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  return (number / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
}
export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
export function filterDataByDateRange(
  data: AnyPerformanceData[],
  dateRange: DateRange | undefined
): AnyPerformanceData[] {
  if (!dateRange || !dateRange.from) {
    return data;
  }
  // Create new Date objects to avoid mutating the original dateRange state object
  const fromDate = new Date(dateRange.from);
  fromDate.setHours(0, 0, 0, 0);
  // If 'to' is not selected, use the 'from' date to filter for a single day.
  const toDate = new Date(dateRange.to || dateRange.from);
  toDate.setHours(23, 59, 59, 999);
  return data.map(platformData => ({
    ...platformData,
    metrics: platformData.metrics.map(metric => ({
      ...metric,
      historicalData: metric.historicalData.filter(item => {
        // The mock data dates are like "Jun 10". We append the current year for parsing.
        // This is a limitation of the mock data format.
        const itemDate = new Date(`${item.date} ${new Date().getFullYear()}`);
        // Check if the parsed date is valid before comparison
        if (isNaN(itemDate.getTime())) {
          return false;
        }
        return itemDate >= fromDate && itemDate <= toDate;
      }),
    })),
  }));
}