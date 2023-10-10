import React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { Search } from '../svgIcons/search';

const customStyles = (theme) => ({
  width: 'auto',
  height: 50,
  backgroundColor: theme.palette.text.main,
  '& .MuiSvgIcon-root': {
    color: theme.palette.background.main
  },
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
  console.log(theme.typography.subHeader_1.light.fontFamily);
  return (
    <div>
      <TextField
        fullWidth
        variant="standard"
        placeholder={text}
        onChange={(e) => onChange(e.target.value)}
        InputProps={{
          startAdornment: (
            <>
              {icon && <Search style={{ marginLeft: "-4px", marginRight: "8px" }} />}
              {countryCode && <span style={{ marginLeft: "-4px", marginRight: "8px" }}>{countryCode}</span>}
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

