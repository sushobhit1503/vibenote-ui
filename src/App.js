import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';
import { useState } from 'react';
import { lightMode, darkMode } from './theme';
import SongSelection from './page/SongSelection';
import PlayAlong from './page/PlayAlong';
import CustomButton from './Components/CustomButton';
import Login from './page/Login';
import SignUp from './page/SignUp';

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
          <Button onClick={toggleTheme} style={{ color: themeSelected.palette.tertiary.main }}>
            Toggle {isDarkMode ? 'Dark' : 'Light'}
          </Button>
          {/* <Typography variant='subHeader'>Hello</Typography>
          <InputSlider />
          <InputDropDown /> */}
          {/* <PlayAlong theme={themeSelected} /> */}
          <Login theme={themeSelected} />
          {/* <SignUp theme={themeSelected } /> */}
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
