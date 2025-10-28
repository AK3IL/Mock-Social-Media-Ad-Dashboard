import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { KpiData } from "@shared/types";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";
import { formatCompactNumber } from '@/lib/utils';
interface KpiCardProps {
  data: KpiData;
}
export function KpiCard({ data }: KpiCardProps) {
  const { title, value, comparisonValue, isPositive, chartData } = data;
  const TrendIcon = isPositive ? ArrowUp : ArrowDown;
  const trendColor = isPositive ? "text-green-500" : "text-red-500";
  return (
    <Card className="relative overflow-hidden transition-all hover:shadow-md hover:-translate-y-1 duration-200">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-4">
          <div className="text-4xl font-bold tracking-tighter">{value}</div>
          <div className={`flex items-center text-sm font-semibold ${trendColor}`}>
            <TrendIcon className="h-4 w-4 mr-1" />
            {comparisonValue}
          </div>
        </div>
        <div className="h-20 w-full absolute bottom-0 left-0 opacity-50">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id={isPositive ? "colorPositive" : "colorNegative"} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={isPositive ? "#10b981" : "#ef4444"} stopOpacity={0.8}/>
                  <stop offset="95%" stopColor={isPositive ? "#10b981" : "#ef4444"} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Tooltip
                contentStyle={{
                  background: "hsl(var(--background))",
                  borderColor: "hsl(var(--border))",
                  color: "hsl(var(--foreground))",
                  fontSize: '12px',
                  borderRadius: '0.5rem',
                }}
                formatter={(value: number) => [formatCompactNumber(value), title]}
                labelFormatter={() => ''}
                cursor={false}
              />
              <Area type="monotone" dataKey="value" stroke={isPositive ? "#10b981" : "#ef4444"} fillOpacity={1} fill={`url(#${isPositive ? "colorPositive" : "colorNegative"})`} strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}