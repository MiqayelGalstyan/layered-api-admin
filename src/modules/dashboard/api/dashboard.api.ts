import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReAuth } from '@app/api/baseQueryWithReAuth';
import { IMetricsResponse, IMetricsRequest } from '../types';

export const dashboardApi = createApi({
  reducerPath: 'dashboardApi',
  baseQuery: baseQueryWithReAuth('transactions'),
  endpoints: builder => ({
    getMetrics: builder.query<IMetricsResponse, IMetricsRequest>({
      query: ({ startDate, endDate }) => ({
        url: '/metrics',
        method: 'GET',
        params: { startDate, endDate },
      }),
    }),
  }),
});

export const { useLazyGetMetricsQuery } = dashboardApi;
