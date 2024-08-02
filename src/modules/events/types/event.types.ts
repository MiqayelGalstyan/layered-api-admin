export interface IEvent {
    id: number;
    name: string;
    location: {
        latitude: number;
        longitude: number;
    };
    status: EventStatusType;
    started: Date;
    impression: string;
    tap: string;
    conversion: string;
}


export enum EventStatusType {
    ACTIVE = 'active',
    STOPPED = 'stopped',
}

export type DropdownItem = {
    id: number;
    label: string;
    value: string | number;
}

export type AutocompleteItem = {
    id: string;
    name: string;
    value: string;
}


export interface ICountry {
    id: string;
    name: string;
    value: string;
}