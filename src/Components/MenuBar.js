import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Typography, IconButton, Toolbar } from '@mui/material';
import CustomButton from './CustomButton';

const MenuBar = (props) => {
    const tertiaryColor = props.theme.palette.tertiary.main
    const typography = props.theme.typography.subHeader.light
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
                        textDecoration: 'none',
                    }}
                >
                    VIBENOTE
                </Typography>
                <div className='toolbar-options'>
                    <Button href="/play-along" sx={{color: tertiaryColor, fontFamily: typography }}>
                        Play Along
                    </Button>
                    <Button href="/karaoke" sx={{color: tertiaryColor, fontFamily: typography }}>
                        Karaoke
                    </Button>
                    <Button href="/stock-music" sx={{color: tertiaryColor, fontFamily: typography }}>
                        Stock Music
                    </Button>
                    <CustomButton text="Login" theme={props.theme} color={props.theme.palette.text.main}></CustomButton>
                </div>
            </Toolbar>
        </div>
    );
}
export default MenuBar;