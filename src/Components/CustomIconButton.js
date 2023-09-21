import { Button, IconButton } from '@mui/material'
import React from 'react'

const customStyles = (theme, size) => ({
    width: size || 50 ,
    height: size || 50,
    backgroundColor: theme.palette.text.main,
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '50%',
    '& svg': {
        fill: theme.palette.white.main,
    },
    '&:hover': {
        boxShadow: '0px 0px 15px 2px rgba(0, 0, 0, 0.5)',
        backgroundColor: theme.palette.text.main,
  },
      '&:active': {
    // Define styles for the active (clicked) state here
    // For example, you can change the background color
    backgroundColor: 'red',
  },
    
})

// issue: svg color fill not working
const CustomIconButton = ({ theme, icon, size }) => {
  console.log(size);
  return (
    <div>
          <IconButton sx={customStyles(theme, size)}>
                {icon}
          </IconButton>
    </div>
  )
}

export default CustomIconButton
