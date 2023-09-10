import React from 'react'
import { Button, Typography } from '@mui/material';

const customStyles = (theme, color) => ({
    height: 50,
    borderRadius: 8,
    border: 'none',
    backgroundColor: color,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: '16px',
    paddingLeft: '16px'
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
