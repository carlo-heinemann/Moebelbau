import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Typography from '@mui/material/Typography'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { useState } from 'react'
import { HEADER_STRINGS } from '../constants/headerStrings'
import { COLORS } from '../constants/colors'
import { useNavigate } from 'react-router-dom'
import { Box, Stack, useMediaQuery, useTheme } from '@mui/material'
import Logo from '../assets/Logo.png'
import CloseIcon from '@mui/icons-material/Close'


function Header() {
    const [open, setOpen] = useState(false)
    const toggleDrawer = (state: boolean) => () => setOpen(state)
    const navigate = useNavigate()
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: COLORS.header }}>
                <Toolbar
                    sx={{ 
                        justifyContent: 'space-between',
                    }}
                >
                    <Stack
                        direction={'row'}
                        sx={{ flexGrow: 1 }}
                    >
                        <img 
                            src={Logo}
                            width={100}
                            height={100}
                            onClick={() => navigate('/')}
                        />
                        <Stack
                            sx={{
                                textAlign: 'center',
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    display: { xs: 'none', sm: 'block' },
                                    color: COLORS.brown
                                }}
                            >
                                {HEADER_STRINGS.headerTitle}
                            </Typography>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    display: { xs: 'block', sm: 'none' },
                                    color: COLORS.brown
                                }}
                            >
                                {HEADER_STRINGS.firstHeaderTitleMobile}
                            </Typography>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    display: { xs: 'block', sm: 'none' },
                                    color: COLORS.brown
                                }}
                            >
                                {HEADER_STRINGS.secondHeaderTitleMobile}
                            </Typography>
                        </Stack>
                    </Stack>
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon 
                            sx={{ color: COLORS.brown }}
                        />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="right"
                open={open}
                onClose={toggleDrawer(false)}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{ 
                    '& .MuiDrawer-paper': { 
                        backgroundColor: COLORS.background,
                        width: isMobile ? '100vw' : 250,
                        maxWidth: isMobile ? '100vw' : 250,
                        borderRadius: 0,
                    },
                }}
            >
                <Stack
                    sx={{
                        alignItems: 'center',
                        height: '100%',
                    }}
                >
                    <Stack
                        direction={'row'}
                    >
                        <Box
                            component="img"
                            src={Logo}
                            sx={{
                                width: 100,
                                height: "auto",
                            }}
                        />

                        <IconButton
                            onClick={toggleDrawer(false)}
                            sx={{ position: 'absolute', top: 8, right: 8, color: COLORS.brown }}
                            aria-label="close drawer"
                        >
                            <CloseIcon />
                        </IconButton>
                    </Stack>
                    <List>
                        <ListItem>
                            <ListItemButton
                                onClick={() => {
                                    setOpen(false)
                                    navigate('/')
                                }}
                            >
                                <ListItemText primary={HEADER_STRINGS.start} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton
                                onClick={() => {
                                    setOpen(false)
                                    navigate('/projects')
                                }}
                            >
                                <ListItemText primary={HEADER_STRINGS.projects} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton
                                onClick={() => {
                                    setOpen(false)
                                    navigate('/#about-me')
                                }}
                            >
                                <ListItemText primary={HEADER_STRINGS.aboutMe} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Stack>
            </Drawer>
        </>
    )
}

export default Header
