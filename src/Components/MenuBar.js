import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Typography, IconButton, Toolbar } from '@mui/material';
import CustomButton from './CustomButton';
import '../styles/theme-main.css'
import { Link } from 'react-router-dom';


const MenuBar = (props) => {
    const tertiaryColor = props.theme.palette.tertiary.main
    const typography = props.theme.typography.subHeader.light

    const [isMenuOpen, setIsMenuOpen] = React.useState(true);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const buttonLinkStyles = () => ({
        color: tertiaryColor,
        fontFamily: typography,
        textTransform: 'none',
        position: 'relative',
        '&:hover': {
            textDecoration: 'none',
            backgroundColor: 'transparent'
        },
        '&::after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            transform: 'scaleX(0)',
            height: '2px',
            bottom: '0',
            left: '0',
            backgroundColor: tertiaryColor,
            transformOrigin: 'bottom right',
            transition: 'transform 0.2s ease-out',
        },
        '&:hover::after': {
            transform: 'scaleX(1)',
            transformOrigin: 'bottom left',
        },
    })
    return (
        <div className="main-container padding-top-max">
            <Toolbar className={`flex-align-between toolbar-height`}>
                <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} >
                    <IconButton
                        size="large"
                        aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
                        onClick={toggleMenu}
                        color={tertiaryColor}
                    >
                        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                    </IconButton>
                </div>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        letterSpacing: '.3rem',
                        color: props.theme.palette.tertiary.main,
                        textDecoration: 'none',
                    }}
                >
                    VIBENOTE
                </Typography>
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        letterSpacing: '.3rem',
                        color: props.theme.palette.tertiary.main,
                        textDecoration: 'none'                    }}
                >
                    VIBENOTE
                </Typography>
                <div className={`toolbar-options`} >
                    <Button component = {Link} to = '/song/play-along' sx={buttonLinkStyles} >
                        Play Along
                    </Button>
                    <Button component = {Link} to = '/song/karaoke' sx={buttonLinkStyles} >
                        Karaoke
                    </Button>
                    <Button href="/stock-music" sx={buttonLinkStyles}>
                        Stock Music
                    </Button>
                    <CustomButton text="LOGIN" theme={props.theme} color={props.theme.palette.text.main} link = "/login"></CustomButton>
                </div>
            </Toolbar>
        </div>
    );
}
export default MenuBar;