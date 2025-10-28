import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SocialIcon } from "./SocialIcon";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { cn, formatCompactNumber } from "@/lib/utils";
import { EmptyState } from './EmptyState';
import { AnyPerformanceData } from '@/types';
type PlatformPerformanceCardProps = {
  data: AnyPerformanceData;
};
export function PlatformPerformanceCard({ data }: PlatformPerformanceCardProps) {
  const [activeMetric, setActiveMetric] = useState(data.metrics[0]);
  useEffect(() => {
    // When data prop changes (e.g., due to date filtering),
    // find the corresponding metric in the new data and update the activeMetric state.
    // This prevents the component from holding stale data.
    const newActiveMetric = data.metrics.find(m => m.name === activeMetric.name) || data.metrics[0];
    setActiveMetric(newActiveMetric);
  }, [data, activeMetric.name]);
  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader>
        <div className="flex items-center gap-3">
          <SocialIcon platform={data.platform} className="h-8 w-8" />
          <CardTitle className="text-xl font-bold">{data.platform} Performance</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-2">
            {data.metrics.map((metric) => {
              const TrendIcon = metric.isPositive ? ArrowUp : ArrowDown;
              const trendColor = metric.isPositive ? "text-green-500" : "text-red-500";
              return (
                <div
                  key={metric.name}
                  onClick={() => setActiveMetric(metric)}
                  className={cn(
                    "p-3 rounded-lg cursor-pointer transition-colors",
                    "hover:bg-accent",
                    activeMetric.name === metric.name && "bg-primary/10"
                  )}
                >
                  <p className="text-sm text-muted-foreground">{metric.name}</p>
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-semibold">{metric.value}</span>
                    <span className={`flex items-center text-xs font-medium ${trendColor}`}>
                      <TrendIcon className="h-3 w-3 mr-1" />
                      {metric.comparisonValue}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="md:col-span-2 h-80">
            {activeMetric.historicalData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={activeMetric.historicalData}>
                  <XAxis
                    dataKey="date"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => formatCompactNumber(value as number)}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "hsl(var(--background))",
                      borderColor: "hsl(var(--border))",
                      color: "hsl(var(--foreground))",
                      fontSize: '12px',
                      borderRadius: '0.5rem',
                    }}
                    formatter={(value: number) => [formatCompactNumber(value), activeMetric.name]}
                    cursor={{ fill: 'hsl(var(--accent))', radius: 4 }}
                  />
                  <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <EmptyState message="No data available for this period." />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}