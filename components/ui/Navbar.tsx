import NextLink from 'next/link';

import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material'
import { MenuOutlined } from '@mui/icons-material'

export const Navbar = () => {
  return (
    <AppBar position='sticky' elevation={ 0 }>
        <Toolbar>
            <IconButton
                size='large'
                edge='start'
            >
                <MenuOutlined />
            </IconButton>

            <NextLink href="/" passHref>
                <Link>
                    <Typography variant='h6' color="white">CookieMaster</Typography>
                </Link>
            </NextLink>

            {/* flex: 1 will get all the space between these two components */}
            <div style={{ flex: 1 }} />

            <NextLink href="/theme-changer" passHref>
                <Link>
                    <Typography variant='h6' color="white">Cambiar Tema</Typography>
                </Link>
            </NextLink>

        </Toolbar>
    </AppBar>
  )
}
