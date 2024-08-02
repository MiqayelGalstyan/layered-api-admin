import { MixinsOptions } from '@mui/material/styles/createMixins';

export const mixins: MixinsOptions = {
  toolbar: {
    minHeight: 72, // Set the initial minHeight to the smallest height
    '@media (min-width:0px) and (orientation: landscape)': {
      minHeight: 56, // Adjust as needed
    },
    '@media (min-width:600px)': {
      minHeight: 64, // Adjust as needed
    },
    '@media (min-width:960px)': {
      minHeight: 70, // Set to the largest height
    },
  },
};
