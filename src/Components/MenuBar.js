import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Typography, IconButton, Toolbar } from '@mui/material';
import CustomButton from './CustomButton';
import '../styles/theme-main.css'
const MenuBar = (props) => {
    const tertiaryColor = props.theme.palette.tertiary.main
    const typography = props.theme.typography.subHeader.light

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
            <Toolbar className='flex-align-between toolbar-height'>
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
                {/* <div sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>

                </div> */}
                {/* <Typography
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
                        textDecoration: 'none',
                    }}
                >
                    VIBENOTE
                </Typography> */}
                <div className='toolbar-options'>
                    <Button href="/play-along" sx={buttonLinkStyles}>
                        Play Along
                    </Button>
                    <Button href="/karaoke" sx={buttonLinkStyles}>
                        Karaoke
                    </Button>
                    <Button href="/stock-music"
                      sx={buttonLinkStyles}>
                        Stock Music
                    </Button>
                    <CustomButton text="Login" theme={props.theme} color={props.theme.palette.text.main}></CustomButton>
                </div>
            </Toolbar>
        </div>
    );
}
export default MenuBar;