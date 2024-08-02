export interface ITerm {
  offset: number;
  value: string;
}

export interface IMainTextMatchedSubstring {
  offset: number;
  length: number;
}

export interface IStructuredFormatting {
  main_text: string;
  secondary_text: string;
  main_text_matched_substrings?: readonly IMainTextMatchedSubstring[];
}

export interface IPlaceType {
  description: string;
  structured_formatting: IStructuredFormatting;
}

export interface IPrediction {
  description: string;
  matched_substrings: IMainTextMatchedSubstring[];
  place_id: string;
  reference: string;
  structured_formatting: IStructuredFormatting;
  terms: ITerm[];
  types: string[];
}

export interface IGetPredictionsRequest {
  input: string;
  types: string;
  componentRestrictions?: { country: string };
  language?: string;
}

export interface IGetPredictionsResponse {
  predictions: IPrediction[];
}

export interface IGetPlaceInfoResponse {
  result: {
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
    };
  };
}

export interface IGetTimezoneResponse {
  dstOffset: number;
  rawOffset: number;
  status: string;
  timeZoneId: string;
  timeZoneName: string;
}

export interface IGetTimezoneParams {
  location: string;
  timestamp: number;
}
