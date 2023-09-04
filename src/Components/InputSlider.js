import { Slider } from '@mui/material'
import React from 'react'

const CustomSliderStyles = {
    '& .MuiSlider-thumb': {
    color: "#feecff",
    width: 8,
    height: 8,
    '&:hover': {
      boxShadow: '0px 0px 5px 2px rgba(255, 236, 255, 0.5)',
    },
    },
    '& .MuiSlider-track': {
      color: "#feecff",
      width: 116,
      height: 3
    },
    '& .MuiSlider-rail': {
      color: 'rgba(255, 236, 255, 0.2)',
      width: 116,
      height: 3
    },
    '& .MuiSlider-active': {
        color: "#feecff"
  },
  width: 116,
  height: 3,
  margin: 4,
};

const InputSlider = (props) => {
  return (
    <div>
      <Slider
        {...props}
        sx={CustomSliderStyles}
      />
    </div>
  );
};


export default InputSlider

