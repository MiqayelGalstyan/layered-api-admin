import { googlePlaceApi } from './api/googlePlace.api';
import { getAddressComponent } from './helper/getAddressComponent.helper';

import { IPrediction, IGetPredictionsRequest, IGetPredictionsResponse } from './types';

export type { IPrediction, IGetPredictionsRequest, IGetPredictionsResponse };

export const {
  useLazyGetAddressQuery,
  useLazyGetPredictionsQuery,
  useLazyGetPlaceInfoQuery,
  useLazyGetTimezoneByLocationQuery,
} = googlePlaceApi;

export { googlePlaceApi, getAddressComponent };
