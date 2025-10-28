import { LucideProps } from 'lucide-react';
import React from 'react';
// Generic Types
export type Metric<T extends string> = {
  name: T;
  value: string;
  comparisonValue: string;
  isPositive: boolean;
  historicalData: { date: string; value: number }[];
};
export type PerformanceData<T extends string> = {
  platform: PlatformName;
  iconColor: string;
  metrics: Metric<T>[];
};
// Paid Social Types
export type KpiData = {
  title: string;
  value: string;
  comparisonValue: string;
  isPositive: boolean;
  chartData: { value: number }[];
};
export type PaidMetricName = 'Clicks' | 'Impressions' | 'Spend' | 'Conversions';
export type PlatformPerformanceData = PerformanceData<PaidMetricName>;
// Organic Social Types
export type OrganicKpiData = KpiData;
export type OrganicMetricName = 'Followers' | 'Engagement Rate' | 'Post Reach' | 'Profile Visits';
export type OrganicPlatformPerformanceData = PerformanceData<OrganicMetricName>;
// Common Types
export type PlatformName = 'Facebook' | 'Twitter' | 'LinkedIn' | 'Instagram';
export type SocialPlatform = {
  name: PlatformName;
  Icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  color: string;
};