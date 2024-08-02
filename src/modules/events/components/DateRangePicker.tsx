import React, { useState, useEffect } from 'react';
import {
  TextField,
  Popover,
  Box,
  Button,
  Grid,
  Typography,
  InputAdornment,
  SxProps,
} from '@mui/material';
import {
  DateRangePicker as RDRDateRangePicker,
  RangeKeyDict,
  Range,
} from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { styled, Theme } from '@mui/material/styles';
import theme from '@app/theme';
import PredefinedRangesList from './PredefinedRangesList';
import CalendarIcon from '@assets/icons/calendar.icon.svg?react';

interface DateRangePickerProps {
  startDate: Date | undefined;
  endDate?: Date | undefined;
  onChange?: (range: Range) => void;
  sx?: SxProps<Theme>;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  startDate,
  endDate,
  onChange,
  sx,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [state, setState] = useState<Range[]>([
    {
      startDate,
      endDate,
      key: 'selection',
    },
  ]);

  useEffect(() => {
    setState([
      {
        startDate,
        endDate,
        key: 'selection',
      },
    ]);
  }, [startDate, endDate]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const applyDateRange = () => {
    onChange?.(state[0]);
    handleClose();
  };

  const setPredefinedRange = (range: { startDate: Date; endDate: Date }) => {
    setState([{ ...state[0], ...range }]);
  };

  const handleDateChange =
    (field: 'startDate' | 'endDate') =>
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
          ? new Date(event.target.value)
          : undefined;
        setState([{ ...state[0], [field]: value }]);
      };

  const dateRangeValue = () => {
    const startDate = state[0].startDate;
    const endDate = state[0].endDate;

    if (!startDate && !endDate) {
      return 'All Time';
    }

    return startDate && endDate ?
      `${format(startDate, 'MMM dd, yyyy')} - ${format(endDate, 'MMM dd, yyyy')}`
      : startDate
        ? `${format(startDate, 'MMM dd, yyyy')} - End`
        : `Start - ${format(endDate!, 'MMM dd, yyyy')}`;
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, ...sx }}>
      <TextField
        variant="outlined"
        value={dateRangeValue()}
        onClick={handleClick}
        InputProps={{
          readOnly: true,
          startAdornment: (
            <InputAdornment position="start">
              <CalendarIcon />
            </InputAdornment>
          ),
        }}
        fullWidth
        sx={{
          '.MuiInputBase-input': {
            padding: '10px 5px',
            fontSize: '14px',
          },
        }}
      />
      <StyledPopover
        slotProps={{
          paper: {
            style: {
              borderRadius: '8px',
            },
          },
        }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}>
        <Box display="flex">
          <PredefinedRangesList setPredefinedRange={setPredefinedRange} />
          <Box p={2}>
            <StyledDateRangePicker
              onChange={(item: RangeKeyDict) => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={state}
              direction="horizontal"
              showDateDisplay={false}
              showPreview={false}
            />
            <Grid
              display={'flex'}
              justifyContent={'space-between'}
              gap={'24px'}
              container
              spacing={2}
              mt={2}>
              <Grid
                display={'flex'}
                gap={'12px'}
                alignItems={'center'}
                item
                xs={6}>
                <StyledTextField
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={
                    state[0].startDate
                      ? format(state[0].startDate, 'yyyy-MM-dd')
                      : ''
                  }
                  onChange={handleDateChange('startDate')}
                  fullWidth
                />
                <Typography>-</Typography>
                <StyledTextField
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={
                    state[0].endDate
                      ? format(state[0].endDate, 'yyyy-MM-dd')
                      : ''
                  }
                  onChange={handleDateChange('endDate')}
                  fullWidth
                />
              </Grid>
              <Grid display={'flex'} gap={'12px'} item>
                <Button variant="outlined" onClick={handleClose}>
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={applyDateRange}>
                  Apply
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </StyledPopover>
    </Box>
  );
};

const StyledDateRangePicker = styled(RDRDateRangePicker)`
  .rdrDefinedRangesWrapper {
    display: none;
  }
  .rdrWeekDays {
    max-width: 280px;
  }
  .rdrCalendarWrapper {
    background: white;
  }

  .rdrMonth {
    .rdrDays {
      .rdrDay {
        width: 40px;
        height: 40px;
        position: relative;

        .rdrDayNumber {
          width: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
          font-size: 14px;

          span {
            line-height: 30px;
            z-index: 9;
          }
        }

        .rdrStartEdge,
        .rdrEndEdge {
          width: 40px;
          height: 40px;
          background: #f9fafb;
          color: white;
          border-radius: 0;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 0;

          &::before {
            content: '';
            display: inline-block;
            width: 40px;
            height: 40px;
            background: #000;
            border-radius: 50%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
          }
        }

        .rdrStartEdge {
          border-top-left-radius: 50%;
          border-bottom-left-radius: 50%;
        }

        .rdrEndEdge {
          border-top-right-radius: 50%;
          border-bottom-right-radius: 50%;
        }

        .rdrInRange {
          background: #f9fafb;
          color: black;
          position: absolute;
          top: 0;
          left: 0;
          width: 40px;
          height: 40px;
          z-index: 0;

          + .rdrDayNumber span {
            color: black;
          }
        }

        &.rdrDayStartPreview,
        &.rdrDayEndPreview,
        &.rdrDaySelected {
          border-radius: 50%;

          .rdrDayNumber span {
            background: #7f56d9;
            color: white;
          }
        }

        &.rdrDayInPreview .rdrDayNumber span,
        &.rdrDayInRange .rdrDayNumber span {
          background: #f9fafb;
          color: black;
        }

        &.rdrDayStartOfWeek {
          .rdrInRange {
            border-top-left-radius: 50%;
            border-bottom-left-radius: 50%;
          }
        }

        &.rdrDayEndOfWeek {
          .rdrInRange {
            border-top-right-radius: 50%;
            border-bottom-right-radius: 50%;
          }
        }
      }
    }
  }
`;

// MuiInputBase - input - MuiOutlinedInput - input
//10px 14px

const StyledTextField = styled(TextField)(() => ({
  width: '150px',
  borderRadius: '8px',
  '& fieldset': {
    borderColor: `${theme.palette.common.black}`,
  },
  '& input': {
    padding: '10px 14px',
  },
  '&:hover fieldset': {
    borderColor: `${theme.palette.common.black}`,
  },
  '&.Mui-focused fieldset': {
    borderColor: `${theme.palette.common.black}`,
  },
  '&.css-11t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
    borderColor: `${theme.palette.common.black}`,
  },
  borderColor: `${theme.palette.common.black}`,
}));

const StyledPopover = styled(Popover)(() => ({
  width: '864px',
  padding: '0',

  '& .css-1fxxlc3': {
    padding: 0,
  },

  '& .css-1oawihx-MuiPaper-root-MuiPopover-paper': {
    padding: '20px 0 16px 0',
  },
}));

export default DateRangePicker;