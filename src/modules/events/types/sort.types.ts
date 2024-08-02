import { EventStatusType, ICountry } from "./event.types";

export enum EventsSortFields {
    Id = 'id',
    Name = 'name',
    Location = 'location',
    Status = 'status',
    Started = 'started',
    Impression = 'impression',
    Tap = 'tap',
    Conversion = 'conversion',
}

export enum SortOrder {
    ASC = 'ASC',
    DESC = 'DESC',
}

export interface IFilters {
    status?: EventStatusType;
    state?: string;
}