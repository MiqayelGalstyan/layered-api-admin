export interface IMetricsResponse {
  xAxisLabels: string[];
  yAxisValues: {
    revenue: number[];
    platformFees: number[];
    receiversTotalEarnings: number[];
    totalGiftsGiven: number[];
    newUsers: number[];
  };
  aggregatedMetrics: {
    totalRevenue: number;
    totalPlatformFees: number;
    totalReceiversEarnings: number;
    totalGiftsGiven: number;
    totalNewUsers: number;
  };
}

export interface IMetricsRequest {
  startDate: string;
  endDate: string;
}
