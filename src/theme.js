import { createTheme } from "@mui/material";
import { typographyStyles } from "./typography";


// Colors
const textColors = {
    light: '#2C022E',
    dark: '#FEECFF'
}

const backgroundColors = {
    light: '#FEECFF',
    dark: '#2C022E'
}

const secondaryColors = {
    light: '#FFFDFF',
    dark: '#57045A'
}

const tertiaryColors = {
    light: '#5C3E7E',
    dark: '#FFB954'
}

const whiteColors = {
    light: '#EFEFEF',
    dark: '#212121'
}

const blackColors = {
    light: '#212121',
    dark: '#EFEFEF'
}

const primaryGradient = {
    light: 'linear-gradient(0deg, #2C022E, #57045A)',
    dark: 'linear-gradient(180deg, #2C022E, #57045A)'
}

// Light Mode
const lightMode = createTheme({
    
    typography: {
        ...typographyStyles
    },
    palette: {
        mode: 'light',
        text: {
            main: textColors.light
        },
        background: {
            main: backgroundColors.light
        },
        secondary: {
            main: secondaryColors.light 
        },
        tertiary: {
            main: tertiaryColors.light
        },
        white: {
            main: whiteColors.light
        },
        black: {
            main: blackColors.light
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
        text: {
            main: textColors.dark
        },
        background: {
            main: backgroundColors.dark
        },
        secondary: {
            main: secondaryColors.dark 
        },
        tertiary: {
            main: tertiaryColors.dark
        },
        white: {
            main: whiteColors.dark
        },
        black: {
            main: blackColors.dark
        },
        primaryGradient: {
            main: primaryGradient.dark
        }
    },
})

export { lightMode, darkMode }
