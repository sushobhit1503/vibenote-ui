import React from 'react';
import TextField from '@mui/material/TextField';
import { Search } from '../svgIcons/search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const customStyles = (theme) => ({
  height: 50,
  backgroundColor: theme.palette.text.main,
  '& .MuiSvgIcon-root': {
    color: theme.palette.background.main
  },
  '& .MuiInputBase-input': {
    width: '305px',
  },
  borderRadius: 8,
  color: theme.palette.background.main,
  fontFamily: theme.typography.subHeader_1.light.fontFamily,
  fontSize: theme.typography.subHeader_1.light.fontSize,
  fontWeight: theme.typography.subHeader_1.light.fontWeight,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  padding: '16px'
})

const UserInput = ({ text, theme, countryCode, icon, onChange }) => {
  return (
    <div>
      <TextField
        variant="standard"
        placeholder={text}
        onChange={(e) => onChange(e.target.value)}
        InputProps={{
          startAdornment: (
            <>
              {icon === "person" &&  <AccountCircleIcon fontSize='large' style={{marginRight: "10px"}} />}
              {icon === "search" && <Search style={{ marginRight: "0.5rem" }} />}
              {countryCode && <span style={{ marginRight: "0.5rem" }}>{countryCode}</span>}
            </>
          ),
          sx: {
              ...customStyles(theme),
          },
          disableUnderline: true
        }}
      />
    </div>
  )
}

export default UserInput

