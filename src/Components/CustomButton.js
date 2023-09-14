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


const CustomButton = ({ text, theme, color }) => {
  return (
    <div>
      <Button style={customStyles(theme, color)}>
        <Typography sx={{color: theme.palette.background.main}} style={theme.typography.subHeader.bold}>
          {text}
        </Typography>
      </Button>
    </div>
  )
}

export default CustomButton
