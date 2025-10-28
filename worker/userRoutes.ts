import { Hono } from "hono";
import { Env } from './core-utils';
import { kpiData, platformPerformanceData, organicKpiData, organicPlatformPerformanceData } from './data';
export function userRoutes(app: Hono<{ Bindings: Env }>) {
    app.get('/api/paid-performance', (c) => {
        return c.json({
            kpiData,
            platformPerformanceData,
        });
    });
    app.get('/api/organic-performance', (c) => {
        return c.json({
            organicKpiData,
            organicPlatformPerformanceData,
        });
    });
}