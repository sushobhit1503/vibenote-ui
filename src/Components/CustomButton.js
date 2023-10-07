import React from 'react'
import { Button, Typography } from '@mui/material';

const customStyles = (theme, color) => ({
    height: 48,
    borderRadius: 8,
    border: 'none',
    backgroundColor: color,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: '1rem',
    paddingLeft: '1rem'
})


<<<<<<< HEAD
const CustomButton = ({ text, theme, color, destination }) => {
  return (
    <div>
      <Button href={destination} style={customStyles(theme, color)}>
=======
const CustomButton = ({ text, theme, color, link, onClick }) => {

  const handleSubmit = () => {
    if (onClick) {
      onClick()
    }
  }
  return (
    <div>
      <Button style={customStyles(theme, color)} href={link} onClick={handleSubmit}>
>>>>>>> d6315181677f2d77ca1e1fdd272354ed3f91c2eb
        <Typography sx={{color: theme.palette.background.main, textTransform: 'none'}} style={theme.typography.subHeader.bold}>
          {text}
        </Typography>
      </Button>
    </div>
  )
}

export default CustomButton
