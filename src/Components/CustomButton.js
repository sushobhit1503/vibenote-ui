import React from 'react'
import { Button, Typography } from '@mui/material';

const customStyles = (theme, color) => ({
    width: "100%",
    height: 50,
    borderRadius: 8,
    border: 'none',
    backgroundColor: color,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
})


const CustomButton = ({ text, theme, color, link, onClick, icon }) => {

  const handleSubmit = () => {
    if (onClick) {
      onClick()
    }
  }
  return (
    <div>
      <Button style={customStyles(theme, color)} href={link} onClick={handleSubmit} sx={{px: '1rem'}}>
        <Typography sx={{color: theme.palette.background.main, textTransform: 'none'}} style={theme.typography.subHeader.bold}>
          {text} {icon === "spotify" && <i class="bi bi-spotify"></i>}
        </Typography>        
      </Button>
    </div>
  )
}

export default CustomButton
