import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  IGetPlaceInfoResponse,
  IGetPredictionsRequest,
  IGetPredictionsResponse,
  IGetTimezoneParams,
  IGetTimezoneResponse,
} from '../types';
import { getAddressComponent } from '../helper/getAddressComponent.helper';

const key = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

interface IGetAddressResponse {
  results: {
    formatted_address: string;
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
    };
    address_components: {
      long_name: string;
      short_name: string;
      types: string[];
    }[];
  }[];
  status: string;
}
interface IGetAddressQueryParams {
  latitude?: number;
  longitude?: number;
}

export const googlePlaceApi = createApi({
  reducerPath: 'googlePlaceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/maps/api',
  }),
  endpoints: builder => ({
    getPredictions: builder.query<
      IGetPredictionsResponse,
      IGetPredictionsRequest
    >({
      query: params => {
        const { language = 'en' } = params;
        return {
          url: 'place/autocomplete/json',
          params: {
            key,
            language,
            ...params,
          },
        };
      },
    }),
    getAddress: builder.query<IGetAddressResponse, IGetAddressQueryParams>({
      query: ({ latitude, longitude }) => {
        return {
          url: 'geocode/json',
          params: {
            latlng: `${latitude},${longitude}`,
            key,
          },
        };
      },
      transformResponse: (response: unknown): IGetAddressResponse => {
        const jsonResponse = response as IGetAddressResponse;
        if (jsonResponse.status === 'OK') {
          const addressComponents = jsonResponse.results[0].address_components;

          const city = getAddressComponent(addressComponents, 'locality');
          const state = getAddressComponent(
            addressComponents,
            'administrative_area_level_1',
          );
          const country = getAddressComponent(addressComponents, 'country');

          const formattedAddress = `${city}, ${state}, ${country}`;

          return {
            ...jsonResponse,
            results: [
              {
                ...jsonResponse.results[0],
                formatted_address: formattedAddress,
              },
            ],
          };
        }

        return jsonResponse;
      },
    }),
    getPlaceInfo: builder.query<IGetPlaceInfoResponse, string>({
      query: placeid => ({
        url: 'place/details/json',
        params: {
          key,
          placeid,
        },
      }),
    }),
    getTimezoneByLocation: builder.query<
      IGetTimezoneResponse,
      IGetTimezoneParams
    >({
      query: params => ({
        url: 'timezone/json',
        params: {
          key,
          ...params,
        },
      }),
    }),
  }),
});
