import './App.css'; 
import { ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';
import { useState } from 'react';
import {lightMode, darkMode} from './theme';
import InputSlider from './Components/InputSlider';
import InputDropDown from './Components/InputDropDown';
import CustomButton from './Components/CustomButton';
import OutlineButton from './Components/OutlineButton';
import UserInput from './Components/UserInput';
import CustomIconButton from './Components/CustomIconButton';
import { Search } from './svgIcons/search';
import { Metronome } from './svgIcons/metronome';

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

// to be removed
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 10,
    gap: '16px',
  }

  return (
    <div>
      <ThemeProvider theme={themeSelected}>
        <div style={backgroundStyles}>
          <Button onClick={toggleTheme} style={{color : themeSelected.palette.tertiary.main}}>
            Toggle {isDarkMode ? 'Dark' : 'Light'}
          </Button>

          {/* this div to be remove */}
          <div style={containerStyles}> 
            <InputSlider theme = { themeSelected } />
            <InputDropDown text = 'Choose Occasion' theme = { themeSelected } />
            <UserInput text = 'Phone Number' theme={themeSelected} countryCode= '+91' icon={<Search />}/>
            <CustomButton text='Search Song' theme={themeSelected} />
            <OutlineButton text='Login' theme={themeSelected} />
            <CustomIconButton theme={themeSelected} icon={<Metronome />}/>
          </div>

        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
