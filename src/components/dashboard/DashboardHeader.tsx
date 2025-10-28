import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, PlusCircle } from "lucide-react";
import { DateRangePicker } from "./DateRangePicker";
import { useDashboardStore } from "@/stores/dashboardStore";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
export function DashboardHeader() {
  const activeTab = useDashboardStore((state) => state.activeTab);
  const setActiveTab = useDashboardStore((state) => state.setActiveTab);
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Social Media Dashboard
        </h1>
        <p className="text-muted-foreground">
          An overview of your social media performance.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-auto">
        <DateRangePicker />
        <Tabs
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as 'paid' | 'organic')}
          className="w-full sm:w-auto"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="paid">Paid Social</TabsTrigger>
            <TabsTrigger value="organic">Organic Social</TabsTrigger>
          </TabsList>
        </Tabs>
        <TooltipProvider>
          <div className="flex gap-2 w-full sm:w-auto">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" className="w-full sm:w-auto">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Export data as CSV</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="w-full sm:w-auto">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  New Campaign
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Create a new ad campaign</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </div>
    </div>
  );
}