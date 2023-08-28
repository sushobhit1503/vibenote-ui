import { createTheme } from "@mui/material";
import { typographyStyles } from "./typography";


// Colors
const primaryColors = {
    light: '#FEECFF',
    dark: '#2C022E'
}

const secondaryColors = {
    light: '#57045A',
    dark: '#57045A'
}

const tertiaryColors = {
    light: '#FFB954',
    dark: '#FFB954'
}

const primaryGradient = {
    light: 'linear-gradient(0deg, #2C022E, #57045A)',
    dark: 'linear-gradient(0deg, #57045A, #2C022E)'
}

// Light Mode
const lightMode = createTheme({
    
    typography: {
        ...typographyStyles
    },
    palette: {
        mode: 'light',
        primary: {
            main: primaryColors.light
        },
        secondary: {
            main: secondaryColors.light 
        },
        tertiary: {
            main: tertiaryColors.light
        },
        primaryGradient: {
            main: primaryGradient.light
        }
    },
})

// Dark Mode
const darkMode = createTheme({
    
    typography: {
        ...typographyStyles
    },
    palette: {
        mode: 'dark',
        primary: {
            main: primaryColors.dark
        },
        secondary: {
            main: secondaryColors.dark 
        },
        tertiary: {
            main: tertiaryColors.dark
        },
        primaryGradient: {
            main: primaryGradient.dark
        }
    },
})

export { lightMode, darkMode }
