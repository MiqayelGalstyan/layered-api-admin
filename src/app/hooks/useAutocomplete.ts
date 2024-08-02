import { AutocompleteItem } from "@modules/events";
import { AutocompleteInputChangeReason } from "@mui/material";
import { useEffect, useState } from "react";

interface IAutocompleteProps {
    defaultOptions: AutocompleteItem[];
}

const useAutocomplete = ({ defaultOptions = [] }: IAutocompleteProps) => {
    const [options, setOptions] = useState<AutocompleteItem[]>(defaultOptions);
    const [inputValue, setInputValue] = useState<string>('');
    const [selectedValue, setSelectedValue] = useState<AutocompleteItem | null>(null);

    const onInputChange = (value: string, reason: AutocompleteInputChangeReason) => {
        if (reason === 'reset') {
            setSelectedValue(null);
            setInputValue("");
            setOptions(defaultOptions);
            return;
        }
        setInputValue(value);
    }

    return {
        onInputChange,
        setInputValue,
        inputValue,
        selectedValue,
        setSelectedValue,
        options,
        setOptions,
    }
}

export default useAutocomplete;