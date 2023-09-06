import React, { useState } from 'react';
import Select from '@mui/material/Select';

const dropDownStyle = {
  width: 298,
  height: 50,
  backgroundColor: "#feecff",
  "& .MuiSvgIcon-root": {
    color: "#2c022e",
  },
  //     "& input::placeholder": {
  //     color: "black", 
  //   },
};

const InputDropDown = (props) => {
  const [occasion, setOccasion] = useState("Choose Occasion");

  const handleChange = (e) => {
    setOccasion(e.target.value);
  };

  return (
    <Select
      variant="outlined"
      sx={dropDownStyle}
      value={props.inputText}
      onChange={handleChange}
    >
    </Select>
  );
};

export default InputDropDown;

