import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Typography, IconButton, Toolbar } from '@mui/material';
import CustomButton from './CustomButton';

const MenuBar = (props) => {
    const tertiaryColor = props.theme.palette.tertiary.main

    return (
        <div position="static" sx={{background: 'none', boxShadow: 'none'}}>
            <div>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            letterSpacing: '.3rem',
                            color:  props.theme.palette.tertiary.main,
                            textDecoration: 'none',
                        }}
                    >
                        VIBENOTE
                    </Typography>
                    <div sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>

                    </div>
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
                    <div style={{display:"flex", justifyContent:"flex-end", alignItems:"center"}} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '16px', ml: 'auto', mr: '-64px' }}>
                        <Button href="/play-along" sx={{ my: 2, color: tertiaryColor }}>
                            Play Along
                        </Button>
                        <Button href="/karaoke" sx={{ my: 2, color: tertiaryColor }}>
                            Karaoke
                        </Button>
                        <Button href="/stock-music" sx={{ my: 2, color: tertiaryColor }}>
                            Stock Music
                        </Button>
                        <CustomButton text="Login" theme={props.theme} color={props.theme.palette.text.main}></CustomButton>
                    </div>
                </Toolbar>
            </div>
        </div>
    );
}
export default MenuBar;