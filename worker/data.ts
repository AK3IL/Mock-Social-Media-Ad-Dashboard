import { KpiData, OrganicPlatformPerformanceData, PlatformPerformanceData } from '@shared/types';
// Paid Social Data
export const kpiData: KpiData[] = [
  {
    title: 'Total Spend',
    value: '$14,320',
    comparisonValue: '+12.5%',
    isPositive: true,
    chartData: Array.from({ length: 20 }, () => ({ value: Math.floor(Math.random() * 1000) + 200 })),
  },
  {
    title: 'Total Impressions',
    value: '2.1M',
    comparisonValue: '+8.2%',
    isPositive: true,
    chartData: Array.from({ length: 20 }, () => ({ value: Math.floor(Math.random() * 5000) + 1000 })),
  },
  {
    title: 'Total Likes',
    value: '45.8K',
    comparisonValue: '-1.8%',
    isPositive: false,
    chartData: Array.from({ length: 20 }, () => ({ value: Math.floor(Math.random() * 800) + 100 })),
  },
];
export const platformPerformanceData: PlatformPerformanceData[] = [
  {
    platform: 'Facebook',
    iconColor: 'text-blue-600',
    metrics: [
      { name: 'Clicks', value: '12.5K', comparisonValue: '+15%', isPositive: true, historicalData: generateHistoricalData(30, 500) },
      { name: 'Impressions', value: '1.2M', comparisonValue: '+10%', isPositive: true, historicalData: generateHistoricalData(30, 50000) },
      { name: 'Spend', value: '$7.2K', comparisonValue: '+20%', isPositive: false, historicalData: generateHistoricalData(30, 250) },
      { name: 'Conversions', value: '850', comparisonValue: '+5%', isPositive: true, historicalData: generateHistoricalData(30, 30) },
    ],
  },
  {
    platform: 'Twitter',
    iconColor: 'text-sky-500',
    metrics: [
      { name: 'Clicks', value: '8.2K', comparisonValue: '+12%', isPositive: true, historicalData: generateHistoricalData(30, 300) },
      { name: 'Impressions', value: '800K', comparisonValue: '+5%', isPositive: true, historicalData: generateHistoricalData(30, 30000) },
      { name: 'Spend', value: '$4.1K', comparisonValue: '+18%', isPositive: false, historicalData: generateHistoricalData(30, 150) },
      { name: 'Conversions', value: '420', comparisonValue: '-2%', isPositive: false, historicalData: generateHistoricalData(30, 15) },
    ],
  },
  {
    platform: 'LinkedIn',
    iconColor: 'text-blue-700',
    metrics: [
      { name: 'Clicks', value: '4.1K', comparisonValue: '+8%', isPositive: true, historicalData: generateHistoricalData(30, 150) },
      { name: 'Impressions', value: '350K', comparisonValue: '+3%', isPositive: true, historicalData: generateHistoricalData(30, 12000) },
      { name: 'Spend', value: '$2.0K', comparisonValue: '+10%', isPositive: false, historicalData: generateHistoricalData(30, 70) },
      { name: 'Conversions', value: '150', comparisonValue: '+10%', isPositive: true, historicalData: generateHistoricalData(30, 5) },
    ],
  },
  {
    platform: 'Instagram',
    iconColor: 'text-pink-500',
    metrics: [
      { name: 'Clicks', value: '15.8K', comparisonValue: '+25%', isPositive: true, historicalData: generateHistoricalData(30, 600) },
      { name: 'Impressions', value: '1.8M', comparisonValue: '+15%', isPositive: true, historicalData: generateHistoricalData(30, 60000) },
      { name: 'Spend', value: '$9.5K', comparisonValue: '+22%', isPositive: false, historicalData: generateHistoricalData(30, 320) },
      { name: 'Conversions', value: '1.2K', comparisonValue: '+8%', isPositive: true, historicalData: generateHistoricalData(30, 40) },
    ],
  },
];
// Organic Social Data
export const organicKpiData: KpiData[] = [
  {
    title: 'Total Followers',
    value: '125.4K',
    comparisonValue: '+5.2%',
    isPositive: true,
    chartData: Array.from({ length: 20 }, () => ({ value: Math.floor(Math.random() * 2000) + 500 })),
  },
  {
    title: 'Total Engagement',
    value: '8.9%',
    comparisonValue: '+1.1%',
    isPositive: true,
    chartData: Array.from({ length: 20 }, () => ({ value: Math.floor(Math.random() * 100) + 20 })),
  },
  {
    title: 'Total Reach',
    value: '850K',
    comparisonValue: '-0.5%',
    isPositive: false,
    chartData: Array.from({ length: 20 }, () => ({ value: Math.floor(Math.random() * 3000) + 800 })),
  },
];
export const organicPlatformPerformanceData: OrganicPlatformPerformanceData[] = [
  {
    platform: 'Facebook',
    iconColor: 'text-blue-600',
    metrics: [
      { name: 'Followers', value: '50.1K', comparisonValue: '+2.1%', isPositive: true, historicalData: generateHistoricalData(30, 100) },
      { name: 'Engagement Rate', value: '4.5%', comparisonValue: '+0.5%', isPositive: true, historicalData: generateHistoricalData(30, 1, 10, true) },
      { name: 'Post Reach', value: '300K', comparisonValue: '-1.2%', isPositive: false, historicalData: generateHistoricalData(30, 10000) },
      { name: 'Profile Visits', value: '5.2K', comparisonValue: '+8%', isPositive: true, historicalData: generateHistoricalData(30, 200) },
    ],
  },
  {
    platform: 'Twitter',
    iconColor: 'text-sky-500',
    metrics: [
      { name: 'Followers', value: '25.8K', comparisonValue: '+3.5%', isPositive: true, historicalData: generateHistoricalData(30, 80) },
      { name: 'Engagement Rate', value: '2.1%', comparisonValue: '+0.2%', isPositive: true, historicalData: generateHistoricalData(30, 0.5, 5, true) },
      { name: 'Post Reach', value: '150K', comparisonValue: '+2.0%', isPositive: true, historicalData: generateHistoricalData(30, 5000) },
      { name: 'Profile Visits', value: '2.1K', comparisonValue: '+5%', isPositive: true, historicalData: generateHistoricalData(30, 70) },
    ],
  },
  {
    platform: 'LinkedIn',
    iconColor: 'text-blue-700',
    metrics: [
      { name: 'Followers', value: '10.5K', comparisonValue: '+1.8%', isPositive: true, historicalData: generateHistoricalData(30, 30) },
      { name: 'Engagement Rate', value: '6.2%', comparisonValue: '+1.1%', isPositive: true, historicalData: generateHistoricalData(30, 2, 15, true) },
      { name: 'Post Reach', value: '80K', comparisonValue: '+5.5%', isPositive: true, historicalData: generateHistoricalData(30, 2500) },
      { name: 'Profile Visits', value: '1.5K', comparisonValue: '+12%', isPositive: true, historicalData: generateHistoricalData(30, 50) },
    ],
  },
  {
    platform: 'Instagram',
    iconColor: 'text-pink-500',
    metrics: [
      { name: 'Followers', value: '39.0K', comparisonValue: '+4.2%', isPositive: true, historicalData: generateHistoricalData(30, 120) },
      { name: 'Engagement Rate', value: '8.8%', comparisonValue: '+0.8%', isPositive: true, historicalData: generateHistoricalData(30, 3, 20, true) },
      { name: 'Post Reach', value: '420K', comparisonValue: '-2.5%', isPositive: false, historicalData: generateHistoricalData(30, 15000) },
      { name: 'Profile Visits', value: '8.9K', comparisonValue: '+15%', isPositive: true, historicalData: generateHistoricalData(30, 300) },
    ],
  },
];
// Helper function to generate mock historical data
function generateHistoricalData(days: number, max: number, min = 0, isFloat = false) {
  const data = [];
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const value = isFloat
      ? parseFloat((Math.random() * (max - min) + min).toFixed(1))
      : Math.floor(Math.random() * (max - min + 1)) + min;
    data.push({
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      value: value,
    });
  }
  return data;
}