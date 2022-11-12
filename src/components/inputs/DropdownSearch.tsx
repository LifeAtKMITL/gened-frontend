import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { IInputErrors } from 'types/input';
import { Autocomplete, InputAdornment, TextField } from '@mui/material';
import { AiOutlineSearch } from 'react-icons/ai';

interface IDropdownSearch extends IInputErrors {
  name: string;
  label: string;
  control: Control<any>;
  options: { value: string; label: string }[];
}

export const DropdownSearch = ({ control, name, label, options, error }: IDropdownSearch) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=''
      render={({ field: { onChange, value } }) => (
        <Autocomplete
          fullWidth
          freeSolo
          disablePortal
          blurOnSelect
          value={value}
          options={options}
          isOptionEqualToValue={(option, value) => option?.value === value?.value}
          onChange={(_, data: any) => (data ? onChange(data) : onChange(''))}
          // onChange={(_, data: any) => (data ? onChange(data.value) : onChange(''))}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder={label}
              error={!!error}
              helperText={error?.message}
              size='small'
              autoFocus
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position='start'>
                    <AiOutlineSearch className='text-placeholder relative left-4 text-lg' />
                  </InputAdornment>
                ),
              }}
            />
          )}
          ListboxProps={{
            style: {
              maxHeight: '200px',
            },
          }}
        />
      )}
    />
  );
};
