import React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';


const customStyles = (theme) => ({
    width: 600,
    height: 50,
    backgroundColor: theme.palette.text.main,
    '& .MuiSvgIcon-root': {
        color: theme.palette.background.main
    },
    color: theme.palette.background.main
})

const Search = ({theme}) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Search any Song"
      InputProps={{
        startAdornment: (
              <SearchIcon
              sx={{marginRight: 1}}/>
          ),
          sx: customStyles(theme)
      }}
    />
  );
};

export default Search;

