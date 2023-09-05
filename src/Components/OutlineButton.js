import { Button, Typography } from '@mui/material'
import React from 'react'

const customStyles = (theme) => ({
    height: 50,
    borderRadius: 8,
    border: 'none',
    backgroundColor: theme.palette.text.main,
    justifyContent: 'center',
    alignItems: 'center'
})

const textStyles = (theme) => ({
  color: theme.palette.background.main,
  // ...theme.typography.subHeader,
  fontFamily: theme.typography.subHeader.family,
  fontSize: theme.typography.subHeader.size,
  fontWeight: theme.typography.subHeader.bold.weight,
  paddingLeft: 2,
  paddingRight: 2
})

const OutlineButton = ({theme, text}) => {
  return (
    <div>
      <Button style={customStyles(theme)}>
        <Typography sx={textStyles}>
          {text}
        </Typography>
      </Button>
    </div>
  )
}

export default OutlineButton
