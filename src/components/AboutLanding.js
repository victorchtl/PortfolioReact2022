import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import profilPicture from '../assets/images/profil_picture.png'
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import '../css/AboutLanding.css'

function AboutLanding() {

    const language = useSelector((state) => state.language.value)

    const navigation = [
        {
            label: 'Front End',
            icon: <ViewCompactIcon />,
            scroll: 1
        },
        {
            label: 'Back End',
            icon: <StorageIcon />,
            scroll: 2
        },
        {
            label: 'Tools',
            icon: <BuildIcon />,
            scroll: 3
        },
    ]

    return (
        <Container maxWidth='lg'>
            <Box
                sx={{
                    height: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-around'
                }}>
                <Box></Box>
                <Box>
                    <Grid container>
                        <Grid item xs={12} textAlign={'center'}>
                            <Typography variant='caption'>{language ? "Get To Know" : "Faire Connaissance"}</Typography>
                        </Grid>
                        <Grid item xs={12} textAlign={'center'} mb={5}>
                            <Typography variant='h2' color={'secondary'}>{language ? "About Me" : "À Propos de Moi"}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container alignItems='center' maxWidth='md' justifyContent={'center'}>
                        <Grid item xs={12} md={6} display='flex' justifyContent='center'>
                            <img
                                alt="Victor Chatel"
                                src={profilPicture}
                                style={{
                                    aspectRatio: '1',
                                    objectFit: 'contain',
                                    maxWidth: '250px',
                                    borderRadius: '5px',
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={8} md={6} lineHeight={1.5} textAlign={{ xs: 'center', md: 'left' }} mt={{ xs: 2, md: 0 }}>
                            <Typography variant='body1'>
                                {language ?
                                    `My name is Victor Chatel, I'm 32 years old, I live in Lyon and I'm a junior front end developer. I mainly work with ReactJS, Redux, ReactQuery and the Material UI library.`
                                    :
                                    `Je m'appelle Victor Chatel, j'ai 32 ans, je vis à Lyon et je suis développeur front end junior.
                                        Je travaille essentiellement avec ReactJS, Redux, ReactQuery et la librairie Material UI.`
                                }

                                <br></br>
                                <br></br>
                            </Typography>
                            <Grid container spacing={2}>
                                {navigation.map(e => (
                                    <Grid item
                                        xs={4}
                                        onClick={() => window.scrollBy({
                                            top: window.innerHeight * e.scroll,
                                            left: 0,
                                            behavior: 'smooth'
                                        })}
                                        key={e.label}
                                        className='orangeLink'
                                    >
                                        <Stack alignItems={'center'} spacing={1}>
                                            {e.icon}
                                            <Typography variant='caption'>{e.label}</Typography>
                                        </Stack>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <KeyboardArrowDownRoundedIcon fontSize='large' />
                </Box>
            </Box>
        </Container>
    )
}

export default AboutLanding