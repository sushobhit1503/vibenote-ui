import './App.css'; 
import { ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';
import { useState } from 'react';
import {lightMode, darkMode} from './theme';
import { Typography } from '@mui/material';
import InputSlider from './Components/InputSlider';
import InputDropDown from './Components/InputDropDown';
import Search from './Components/Search';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const themeSelected = isDarkMode ? lightMode : darkMode

  const backgroundStyles = {
    background: themeSelected.palette.primaryGradient.main,
    minHeight: '100vh',
  }

  return (
    <div>
      <ThemeProvider theme={themeSelected}>
        <div style={backgroundStyles}>

          <Button onClick={toggleTheme} style={{color : themeSelected.palette.tertiary.main}}>
            Toggle {isDarkMode ? 'Dark' : 'Light'}
          </Button>

          <InputSlider theme = { themeSelected } />
          <InputDropDown theme = { themeSelected } />
          <hr></hr>
          <Search theme={themeSelected} />
          
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
