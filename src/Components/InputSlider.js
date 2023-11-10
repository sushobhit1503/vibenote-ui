import { Slider } from '@mui/material'
import React from 'react'

const CustomSliderStyles = (theme, width, height, thumbSize) => ({
    '& .MuiSlider-thumb': {
    color: theme.palette.text.main,
    width: thumbSize,
    height: thumbSize,
    '&:hover': {
      boxShadow: `0px 0px 5px 2px rgba(${theme.palette.text.main}, 0.5)`,
    },
    },
    '& .MuiSlider-track': {
      color: theme.palette.text.main,
      width: width,
      height: height
    },
    '& .MuiSlider-rail': {
      backgroundColor: `rgba(${theme.palette.text.main}, 0.2)`,
      width: width,
      height: height
    },
    '& .MuiSlider-active': {
        color: theme.palette.text.main
  },
  width: width,
  height: height
});

const InputSlider = ({ theme, width, height, thumbSize }) => {

  return (
    <div>
      <Slider
        {...theme}
        sx={CustomSliderStyles(theme, width, height, thumbSize)}
      />
    </div>
  );
};


export default InputSlider

