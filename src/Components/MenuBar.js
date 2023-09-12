import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Container, Typography, IconButton, Toolbar, Box, AppBar } from '@mui/material';

const MenuBar = (props) => {
    return (
        <AppBar position="static">
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
                            color: 'inherit',
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
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        VIBENOTE
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button href="/play-along" sx={{ my: 2, color: 'white', display: 'block' }}>
                            Play Along
                        </Button>
                        <Button href="/karoake" sx={{ my: 2, color: 'white', display: 'block' }}>
                            Karoake
                        </Button>
                        <Button href="/stock-music" sx={{ my: 2, color: 'white', display: 'block' }}>
                            Stock Music
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default MenuBar;