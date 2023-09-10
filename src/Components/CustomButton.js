import React from 'react'
import { Button, Typography } from '@mui/material';

const customStyles = (theme) => ({
    height: 50,
    borderRadius: 8,
    border: 'none',
    backgroundColor: theme.palette.tertiary.main,
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

const CustomButton = ({ text, theme }) => {
  console.log(theme.typography.subHeader);
  return (
    <div>
      <Button style={customStyles(theme)}>
        <Typography sx={{color: theme.palette.background.main}} style={theme.typography.subHeader.bold}>
          {text}
        </Typography>
      </Button>
    </div>
  )
}

export default CustomButton
