import { Button, IconButton } from '@mui/material'
import React from 'react'

const customStyles = (theme) => ({
    width: 50,
    height: 50,
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
})

// issue: svg color fill not working
const CustomIconButton = ({theme, icon}) => {
  return (
    <div>
          <IconButton sx={customStyles(theme)}>
                {icon}
          </IconButton>
    </div>
  )
}

export default CustomIconButton
