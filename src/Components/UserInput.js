import React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { Search } from '../svgIcons/search';

const customStyles = (theme) => ({
  width: 600,
  height: 50,
  backgroundColor: theme.palette.text.main,
  '& .MuiSvgIcon-root': {
    color: theme.palette.background.main
  },
  color: theme.palette.background.main,
  fontFamily: theme.typography.subHeader_1.family,
  fontSize: theme.typography.subHeader_1.size,
  fontWeight: theme.typography.subHeader_1.light.weight,

})

const UserInput = ({ text, theme, countryCode, icon }) => {
  return (
    <div>
      <TextField
        fullWidth
        variant="outlined"
        placeholder={text}
        InputProps={{
          startAdornment: (
            <>
              {icon && <Search style={{ marginRight: "1rem" }} />}
              {countryCode && <span style={{ marginRight: 8 }}>{countryCode}</span>}
            </>
          ),
          sx: customStyles(theme)
        }}
      />
    </div>
  );
};

export default UserInput;

