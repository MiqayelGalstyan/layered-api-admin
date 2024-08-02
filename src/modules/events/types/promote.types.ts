import { AutocompleteItem } from "./event.types";

export interface PromoteRequest {
    state: AutocompleteItem | null;
    event: string;
}