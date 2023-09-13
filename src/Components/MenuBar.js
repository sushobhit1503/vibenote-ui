import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Container, Typography, IconButton, Toolbar, Box, AppBar } from '@mui/material';
import CustomButton from './CustomButton';

const MenuBar = (props) => {
    const tertiaryColor = props.theme.palette.tertiary.main

    return (
        <AppBar position="static" sx={{background: 'none', boxShadow: 'none'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
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
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>

                    </Box>
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
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '16px', ml: 'auto', mr: '-64px' }}>
                        <Button href="/play-along" sx={{ my: 2, color: tertiaryColor, display: 'block' }}>
                            Play Along
                        </Button>
                        <Button href="/karaoke" sx={{ my: 2, color: tertiaryColor, display: 'block' }}>
                            Karaoke
                        </Button>
                        <Button href="/stock-music" sx={{ my: 2, color: tertiaryColor, display: 'block' }}>
                            Stock Music
                        </Button>
                        <CustomButton text= "Login" theme={props.theme} color={props.theme.palette.text.main}></CustomButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default MenuBar;