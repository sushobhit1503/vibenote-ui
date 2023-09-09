import { Slider } from '@mui/material'
import React from 'react'

const CustomSliderStyles = (theme) => ({
    '& .MuiSlider-thumb': {
    color: theme.palette.text.main,
    width: 8,
    height: 8,
    '&:hover': {
      boxShadow: `0px 0px 5px 2px rgba(${theme.palette.text.main}, 0.5)`,
    },
    },
    '& .MuiSlider-track': {
      color: theme.palette.text.main,
      width: 116,
      height: 3
    },
    '& .MuiSlider-rail': {
      color: `rgba(${theme.palette.text.main}, 0.2)`,
      width: 116,
      height: 3
    },
    '& .MuiSlider-active': {
        color: theme.palette.text.main
  },
  width: 116,
  height: 3
});

const InputSlider = ({ theme }) => {
  return (
    <div>
      <Slider
        {...theme}
        sx={CustomSliderStyles(theme)}
      />
    </div>
  );
};


export default InputSlider

