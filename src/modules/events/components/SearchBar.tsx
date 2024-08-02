import React, { ChangeEvent } from 'react';
import { styled } from '@mui/system';
import { TextField, InputAdornment, SxProps, Box } from '@mui/material';
import SearchIcon from '@assets/icons/search.icon.svg?react';
import { Theme } from '@mui/material/styles';

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.background.paper,
  '& .MuiInputBase-root > input': {
    padding: '10px 0',
  },
}));

interface SearchBarProps {
  searchQuery: string;
  onSearch: (query: string) => void;
  sx?: SxProps<Theme>;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, onSearch, sx }) => {
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <Box sx={{ width: '100%', ...sx }}>
      <StyledTextField
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearchChange}
        variant="outlined"
        InputProps={{
          style: {
            borderRadius: '8px',
          },
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon style={{ cursor: 'pointer' }} />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;
