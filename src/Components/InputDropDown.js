import React, { useState } from 'react';
import Select from '@mui/material/Select';
import { FormControl, InputLabel } from '@mui/material';

const dropDownStyle = (theme) => ({
  width: 298,
  height: 50,
  backgroundColor: theme.palette.text.main,
  "& .MuiSvgIcon-root": {
        color: theme.palette.background.main,
    },
  color: theme.palette.background.main
//     "& input::placeholder": {
//     color: "black", 
//   },
});

const InputDropDown = ({ theme }) => {
    console.log(theme);

  const [occasion, setOccasion] = useState("Choose Occasion");

  const handleChange = (e) => {
    setOccasion(e.target.value);
  };

    return (
        <FormControl>
            <Select
                placeholder='Hello'
                id="dropdown"
                value={occasion}
                label="Occasion"
                onChange={handleChange}
                sx={dropDownStyle(theme)}
            >
            </Select>
        </FormControl>
  );
};

export default InputDropDown;

