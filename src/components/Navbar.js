import { Link, AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography, Modal, Grid, Paper, useTheme, ThemeProvider, Switch, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Stack } from '@mui/material';
import React from 'react'
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import { NavLink } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../slices/languages'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LaptopChromebookRoundedIcon from '@mui/icons-material/LaptopChromebookRounded';
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import FrenchFlag from '../assets/flags/fr.png'
import UkFlag from '../assets/flags/eng.png'
import '../css/Navbar.css'
import { setLightMode } from '../slices/lightmode';
import { fontSize, fontWeight } from '@mui/system';
import styled from '@emotion/styled';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import setPortfolioCategory from '../slices/portfolioCategory';
import setTabNumber from '../slices/portfolioCategory';

function Navbar() {

    const theme = useTheme();

    const language = useSelector((state) => state.language.value)

    const lightMode = useSelector((state) => state.lightMode.value)

    const dispatch = useDispatch()

    const navigation = [
        {
            titleEng: 'Home',
            titleFr: 'Accueil',
            icon: <HomeRoundedIcon />,
            url: ''
        },
        {
            titleEng: 'Portfolio',
            titleFr: 'Portfolio',
            icon: <LaptopChromebookRoundedIcon />,
            url: '/portfolio'
        },
        {
            titleEng: 'About',
            titleFr: 'À Propos',
            icon: <FaceRoundedIcon />,
            url: '/about'
        },
        {
            titleEng: 'Contact',
            titleFr: 'Contact',
            icon: <SendRoundedIcon />,
            url: '/contact'
        }
    ]

    let activeStyle = {
        marginRight: '10px',
        textDecoration: "none",
        fontWeight: '500',
        fontSize: '14px'
    };

    let unactiveStyle = {
        marginRight: '10px',
        textDecoration: "none",
        fontWeight: '500',
        fontSize: '14px'
    };

    const [openMenu, setOpenMenu] = React.useState(false);
    const handleOpenMenu = () => setOpenMenu(true);
    const handleCloseMenu = () => setOpenMenu(false);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [openDrawer, setOpenDrawer] = React.useState(false);

    return (
        <AppBar position="sticky" elevation={0}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1 }}>
                        <BoltRoundedIcon sx={{ mr: 1 }} color='primary' fontSize='medium' />
                    </Box>

                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={() => setOpenDrawer(true)}
                            color="inherit"
                        >
                            <MenuIcon color='primary' />
                        </IconButton>
                        <Drawer
                            anchor={"right"}
                            open={openDrawer}
                            onClose={() => setOpenDrawer(false)}
                        >
                            <Box sx={{ minWidth: '300px' }}>
                                <List>
                                    {navigation.map(e => (
                                        <div key={e.titleEng}>
                                            <NavLink
                                                className='nav-link'
                                                to={e.url}
                                                style={({ isActive }) =>
                                                    isActive ?
                                                        {
                                                            color: theme.palette.primary.main,
                                                            fontSize: '.8rem',
                                                            fontWeight: 500,
                                                            textDecoration: 'none',
                                                            marginRight: '10px',
                                                            letterSpacing: '1px'
                                                        }
                                                        :
                                                        {
                                                            color: theme.palette.text.primary,
                                                            fontSize: '.8rem',
                                                            fontWeight: 500,
                                                            textDecoration: 'none',
                                                            marginRight: '10px',
                                                            letterSpacing: '1px',
                                                        }
                                                }
                                            >
                                                <ListItem disablePadding>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            {e.icon}
                                                        </ListItemIcon>
                                                        <ListItemText primary={language ? e.titleEng : e.titleFr} />
                                                    </ListItemButton>
                                                </ListItem>
                                            </NavLink>

                                            <Divider />
                                        </div>
                                    ))}
                                </List>
                                <Stack m={2}>
                                    <Stack>
                                        <Typography variant='caption'>Light Mode</Typography>
                                        <Switch
                                            checked={lightMode}
                                            onChange={() => dispatch(setLightMode())}
                                            icon={<DarkModeIcon sx={{ width: '20px', height: '20px' }} />}
                                            checkedIcon={<LightModeIcon fontSize='small' />}
                                            sx={{ margin: "10px" }}
                                        />
                                    </Stack>
                                    <Stack>
                                        <Typography variant='caption'>Language</Typography>
                                        <Switch
                                            color="default"
                                            checked={language}
                                            onChange={() => dispatch(setLanguage())}
                                            icon={<Avatar alt='fr' src={FrenchFlag} sx={{ width: '20px', height: '20px' }} />}
                                            checkedIcon={<Avatar alt='fr' src={UkFlag} sx={{ width: '20px', height: '20px' }} />}
                                            sx={{ margin: "10px" }}
                                        />
                                    </Stack>
                                </Stack>
                            </Box>
                        </Drawer>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <nav>
                            <ul style={{ listStyle: 'none', display: 'flex' }}>
                                {navigation.map(e => (
                                    <li key={e.titleEng} className={'navlink'}>
                                        <NavLink

                                            className='nav-link'
                                            to={e.url}
                                            style={({ isActive }) =>
                                                isActive ?
                                                    {
                                                        color: theme.palette.primary.main,
                                                        fontSize: '.8rem',
                                                        fontWeight: 500,
                                                        textDecoration: 'none',
                                                        marginRight: '10px',
                                                        letterSpacing: '1px'
                                                    }
                                                    :
                                                    {
                                                        color: theme.palette.text.primary,
                                                        fontSize: '.8rem',
                                                        fontWeight: 500,
                                                        textDecoration: 'none',
                                                        marginRight: '10px',
                                                        letterSpacing: '1px',
                                                    }
                                            }
                                        >
                                            {language ? e.titleEng : e.titleFr}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', marginRight: '10px' }}>
                        <Link sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '10px' }} target='_blank' href='https://www.linkedin.com/in/victorchatel'><LinkedInIcon fontSize='small' sx={{ color: theme.palette.text.primary }} /></Link>
                        <Link sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '10px' }} target='_blank' href='https://github.com/victorchtl'><GitHubIcon fontSize='small' sx={{ color: theme.palette.text.primary }} /></Link>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Box onClick={() => dispatch(setLightMode())}>
                            {lightMode ?
                                <IconButton aria-label="delete">
                                    <DarkModeIcon fontSize='small' />
                                </IconButton>
                                :
                                <IconButton aria-label="delete">
                                    <LightModeIcon fontSize='small' />
                                </IconButton>
                            }
                        </Box>
                        <Box onClick={() => dispatch(setLanguage())}>
                            {language ?
                                <IconButton aria-label="delete">
                                    <Avatar alt='fr' src={FrenchFlag} sx={{ width: '20px', height: '20px' }} />
                                </IconButton>
                                :
                                <IconButton aria-label="delete">
                                    <Avatar alt='fr' src={UkFlag} sx={{ width: '20px', height: '20px' }} />
                                </IconButton>
                            }
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar