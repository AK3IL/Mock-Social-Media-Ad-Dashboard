import { AppLayout } from "@/components/layout/AppLayout";
import { ThemeToggle } from "@/components/ThemeToggle";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { PlatformPerformanceCard } from "@/components/dashboard/PlatformPerformanceCard";
import { useDashboardStore } from "@/stores/dashboardStore";
import { useEffect, useMemo, useState } from "react";
import { filterDataByDateRange } from "@/lib/utils";
import { KpiData, OrganicKpiData, PlatformPerformanceData, OrganicPlatformPerformanceData } from "@shared/types";
import { Skeleton } from "@/components/ui/skeleton";
type PaidData = {
  kpiData: KpiData[];
  platformPerformanceData: PlatformPerformanceData[];
}
type OrganicData = {
  organicKpiData: OrganicKpiData[];
  organicPlatformPerformanceData: OrganicPlatformPerformanceData[];
}
export function HomePage() {
  const activeTab = useDashboardStore((state) => state.activeTab);
  const dateRange = useDashboardStore((state) => state.dateRange);
  const [paidData, setPaidData] = useState<PaidData | null>(null);
  const [organicData, setOrganicData] = useState<OrganicData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [paidRes, organicRes] = await Promise.all([
          fetch('/api/paid-performance'),
          fetch('/api/organic-performance')
        ]);
        if (!paidRes.ok || !organicRes.ok) {
          throw new Error('Failed to fetch performance data');
        }
        const paidJson = await paidRes.json();
        const organicJson = await organicRes.json();
        setPaidData(paidJson);
        setOrganicData(organicJson);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const { currentKpiData, currentPlatformData, summaryTitle, breakdownTitle } = useMemo(() => {
    const isPaid = activeTab === 'paid';
    if (isPaid) {
      return {
        currentKpiData: paidData?.kpiData,
        currentPlatformData: paidData?.platformPerformanceData
          ? filterDataByDateRange(paidData.platformPerformanceData, dateRange)
          : [],
        summaryTitle: 'Paid High-Level Summary',
        breakdownTitle: 'Paid Platform Breakdown',
      };
    } else {
      return {
        currentKpiData: organicData?.organicKpiData,
        currentPlatformData: organicData?.organicPlatformPerformanceData
          ? filterDataByDateRange(organicData.organicPlatformPerformanceData, dateRange)
          : [],
        summaryTitle: 'Organic High-Level Summary',
        breakdownTitle: 'Organic Platform Breakdown',
      };
    }
  }, [activeTab, dateRange, paidData, organicData]);
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background text-destructive-foreground">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }
  return (
    <AppLayout container={true} className="space-y-8 mt-8">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <DashboardHeader />
        <section>
          <h2 className="text-2xl font-semibold tracking-tight mb-4">
            {summaryTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading || !currentKpiData ? (
              Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} className="h-[168px] w-full" />)
            ) : (
              currentKpiData.map((kpi) => (
                <KpiCard key={kpi.title} data={kpi} />
              ))
            )}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold tracking-tight mb-4">
            {breakdownTitle}
          </h2>
          <div className="space-y-6">
            {loading || !currentPlatformData ? (
               Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-[380px] w-full" />)
            ) : (
              currentPlatformData.map((platformData) => (
                <PlatformPerformanceCard key={platformData.platform} data={platformData} />
              ))
            )}
          </div>
        </section>
    </AppLayout>
  );
}