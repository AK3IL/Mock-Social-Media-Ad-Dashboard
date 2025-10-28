import { KpiData, PlatformPerformanceData, OrganicKpiData, OrganicPlatformPerformanceData } from '@/types';
// --- Common Utility ---
const generateHistoricalData = (base: number, variance: number, length = 7) => {
  return Array.from({ length }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (length - i - 1));
    return {
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      value: Math.floor(base + (Math.random() - 0.5) * variance),
    };
  });
};
// --- Paid Social Data ---
export const kpiData: KpiData[] = [
  {
    title: 'Total Spend',
    value: '$12,345',
    comparisonValue: '+12.5%',
    isPositive: false, // Higher spend is not necessarily "good"
    chartData: [
      { value: 300 }, { value: 450 }, { value: 400 }, { value: 600 },
      { value: 550 }, { value: 700 }, { value: 650 }, { value: 800 }
    ],
  },
  {
    title: 'Total Impressions',
    value: '2.1M',
    comparisonValue: '+21.3%',
    isPositive: true,
    chartData: [
      { value: 100000 }, { value: 120000 }, { value: 110000 }, { value: 150000 },
      { value: 140000 }, { value: 180000 }, { value: 170000 }, { value: 200000 }
    ],
  },
  {
    title: 'Total Likes',
    value: '45.8K',
    comparisonValue: '+8.2%',
    isPositive: true,
    chartData: [
      { value: 1200 }, { value: 1500 }, { value: 1400 }, { value: 1800 },
      { value: 1700 }, { value: 2200 }, { value: 2100 }, { value: 2500 }
    ],
  },
];
export const platformPerformanceData: PlatformPerformanceData[] = [
  {
    platform: 'Facebook',
    iconColor: 'text-blue-600',
    metrics: [
      { name: 'Clicks', value: '12.5K', comparisonValue: '+15%', isPositive: true, historicalData: generateHistoricalData(1800, 500) },
      { name: 'Impressions', value: '1.2M', comparisonValue: '+20%', isPositive: true, historicalData: generateHistoricalData(170000, 20000) },
      { name: 'Spend', value: '$5.2K', comparisonValue: '+10%', isPositive: false, historicalData: generateHistoricalData(750, 100) },
      { name: 'Conversions', value: '850', comparisonValue: '+5%', isPositive: true, historicalData: generateHistoricalData(120, 30) },
    ],
  },
  {
    platform: 'Twitter',
    iconColor: 'text-sky-500',
    metrics: [
      { name: 'Clicks', value: '8.2K', comparisonValue: '+12%', isPositive: true, historicalData: generateHistoricalData(1200, 300) },
      { name: 'Impressions', value: '600K', comparisonValue: '+18%', isPositive: true, historicalData: generateHistoricalData(85000, 15000) },
      { name: 'Spend', value: '$3.1K', comparisonValue: '+8%', isPositive: false, historicalData: generateHistoricalData(450, 80) },
      { name: 'Conversions', value: '420', comparisonValue: '-2%', isPositive: false, historicalData: generateHistoricalData(60, 15) },
    ],
  },
  {
    platform: 'LinkedIn',
    iconColor: 'text-blue-700',
    metrics: [
      { name: 'Clicks', value: '4.1K', comparisonValue: '+25%', isPositive: true, historicalData: generateHistoricalData(600, 150) },
      { name: 'Impressions', value: '250K', comparisonValue: '+30%', isPositive: true, historicalData: generateHistoricalData(35000, 8000) },
      { name: 'Spend', value: '$2.8K', comparisonValue: '+15%', isPositive: false, historicalData: generateHistoricalData(400, 70) },
      { name: 'Conversions', value: '310', comparisonValue: '+18%', isPositive: true, historicalData: generateHistoricalData(45, 10) },
    ],
  },
  {
    platform: 'Instagram',
    iconColor: 'text-pink-500',
    metrics: [
      { name: 'Clicks', value: '18.9K', comparisonValue: '+10%', isPositive: true, historicalData: generateHistoricalData(2700, 600) },
      { name: 'Impressions', value: '1.8M', comparisonValue: '+22%', isPositive: true, historicalData: generateHistoricalData(250000, 40000) },
      { name: 'Spend', value: '$6.5K', comparisonValue: '+12%', isPositive: false, historicalData: generateHistoricalData(900, 150) },
      { name: 'Conversions', value: '1.2K', comparisonValue: '+8%', isPositive: true, historicalData: generateHistoricalData(170, 40) },
    ],
  },
];
// --- Organic Social Data ---
export const organicKpiData: OrganicKpiData[] = [
  {
    title: 'Total Followers',
    value: '78.2K',
    comparisonValue: '+1,200',
    isPositive: true,
    chartData: [
      { value: 72000 }, { value: 73000 }, { value: 74500 }, { value: 75000 },
      { value: 76000 }, { value: 77000 }, { value: 77500 }, { value: 78200 }
    ],
  },
  {
    title: 'Engagement Rate',
    value: '3.4%',
    comparisonValue: '+0.5%',
    isPositive: true,
    chartData: [
      { value: 2.5 }, { value: 2.8 }, { value: 2.7 }, { value: 3.0 },
      { value: 3.1 }, { value: 2.9 }, { value: 3.2 }, { value: 3.4 }
    ],
  },
  {
    title: 'Total Reach',
    value: '890K',
    comparisonValue: '+15%',
    isPositive: true,
    chartData: [
      { value: 500000 }, { value: 550000 }, { value: 600000 }, { value: 680000 },
      { value: 720000 }, { value: 780000 }, { value: 820000 }, { value: 890000 }
    ],
  },
];
export const organicPlatformPerformanceData: OrganicPlatformPerformanceData[] = [
  {
    platform: 'Facebook',
    iconColor: 'text-blue-600',
    metrics: [
      { name: 'Followers', value: '25.1K', comparisonValue: '+300', isPositive: true, historicalData: generateHistoricalData(24000, 500) },
      { name: 'Engagement Rate', value: '2.8%', comparisonValue: '+0.2%', isPositive: true, historicalData: generateHistoricalData(2.5, 0.5) },
      { name: 'Post Reach', value: '350K', comparisonValue: '+12%', isPositive: true, historicalData: generateHistoricalData(300000, 50000) },
      { name: 'Profile Visits', value: '5.2K', comparisonValue: '+8%', isPositive: true, historicalData: generateHistoricalData(4800, 400) },
    ],
  },
  {
    platform: 'Twitter',
    iconColor: 'text-sky-500',
    metrics: [
      { name: 'Followers', value: '15.8K', comparisonValue: '+500', isPositive: true, historicalData: generateHistoricalData(15000, 600) },
      { name: 'Engagement Rate', value: '4.1%', comparisonValue: '+0.8%', isPositive: true, historicalData: generateHistoricalData(3.5, 0.8) },
      { name: 'Post Reach', value: '210K', comparisonValue: '+20%', isPositive: true, historicalData: generateHistoricalData(180000, 40000) },
      { name: 'Profile Visits', value: '3.1K', comparisonValue: '+15%', isPositive: true, historicalData: generateHistoricalData(2800, 300) },
    ],
  },
  {
    platform: 'LinkedIn',
    iconColor: 'text-blue-700',
    metrics: [
      { name: 'Followers', value: '8.5K', comparisonValue: '+150', isPositive: true, historicalData: generateHistoricalData(8000, 300) },
      { name: 'Engagement Rate', value: '5.2%', comparisonValue: '+1.1%', isPositive: true, historicalData: generateHistoricalData(4.5, 1) },
      { name: 'Post Reach', value: '95K', comparisonValue: '+25%', isPositive: true, historicalData: generateHistoricalData(80000, 20000) },
      { name: 'Profile Visits', value: '1.8K', comparisonValue: '+10%', isPositive: true, historicalData: generateHistoricalData(1600, 200) },
    ],
  },
  {
    platform: 'Instagram',
    iconColor: 'text-pink-500',
    metrics: [
      { name: 'Followers', value: '28.8K', comparisonValue: '+250', isPositive: true, historicalData: generateHistoricalData(28000, 400) },
      { name: 'Engagement Rate', value: '3.9%', comparisonValue: '+0.3%', isPositive: true, historicalData: generateHistoricalData(3.6, 0.5) },
      { name: 'Post Reach', value: '450K', comparisonValue: '+18%', isPositive: true, historicalData: generateHistoricalData(400000, 60000) },
      { name: 'Profile Visits', value: '8.9K', comparisonValue: '+22%', isPositive: true, historicalData: generateHistoricalData(8000, 900) },
    ],
  },
];