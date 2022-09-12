import { Box, Button, Container, Grid, IconButton, Stack, Typography } from '@mui/material';
import React from 'react'
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import portfolioService from '../services/portfolio.service';
import CheckIcon from '@mui/icons-material/Check';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

function Project() {

    let location = useLocation();

    const language = useSelector((state) => state.language.value)

    const lightMode = useSelector((state) => state.lightMode.value)

    const id = location.pathname.substring(11)

    const { isLoading, data } = useQuery(['project', id], () => portfolioService.getOne(id))

    let navigate = useNavigate();

    return (
        <>
            {data && <Container maxWidth='lg'>
                <Grid container mt={5} mb={5}>
                    <Grid item xs={12} textAlign={'center'}>
                        <Typography variant='caption'>{language ? "Project" : "Projet"}</Typography>
                    </Grid>
                    <Grid item xs={12} textAlign={'center'} mb={5}>
                        <Typography variant='h2' color={'primary'}>{data.name}</Typography>
                    </Grid>
                </Grid>
                <Box mb={5}>
                    <Box onClick={() => navigate(-1)}>
                        <IconButton aria-label="delete" size="small">
                            <ArrowBackIosRoundedIcon fontSize="inherit" color='primary' />
                        </IconButton>
                    </Box>
                </Box>
                <Grid container display={'flex'} justifyContent={'center'} spacing={5}>
                    <Grid item xs={3}>
                        <Box
                            id={data.name}
                            component="img"
                            src={data.image}
                            alt={data.name}
                            sx={{
                                aspectRatio: { xs: '3', sm: '1' },
                                objectFit: 'cover',
                                width: '100%',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                transition: 'all .2s ease-in-out',
                            }} />
                    </Grid>
                    <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant={'h6'} textAlign={'center'}>
                            {language ?
                                data.engtext
                                :
                                data.frtext
                            }
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Stack direction={'row'} spacing={2}>

                            {data.githublink ?
                                <a target={'_blank'} href={data.githublink} rel="noreferrer" style={{ textDecoration: 'none' }}>
                                    <Button variant="contained" startIcon={<GitHubIcon />} disableElevation={true}>
                                        Github
                                    </Button>
                                </a>
                                :
                                <Button variant="contained" startIcon={<GitHubIcon />} disableElevation={true} disabled>
                                    Github
                                </Button>
                            }

                            {data.livelink ?
                                <a target={'_blank'} href={data.livelink} rel="noreferrer" style={{ textDecoration: 'none' }}>
                                    <Button variant="contained" startIcon={<LanguageIcon />} disableElevation={true}>
                                        Website
                                    </Button>
                                </a>
                                :
                                <Button variant="contained" startIcon={<LanguageIcon />} disableElevation={true} disabled>
                                    Website
                                </Button>
                            }

                        </Stack>



                    </Grid>
                    <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant={'h2'} mb={3}>Technologies</Typography>
                        {data.techs &&
                            <Stack spacing={.5}>
                                {data.techs.map(e => (
                                    <Stack direction={'row'} key={e} spacing={.5}>
                                        <CheckIcon fontSize="small" color="primary" />
                                        <Typography>{e}</Typography>
                                    </Stack>
                                ))}
                            </Stack>
                        }
                    </Grid>
                    <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant={'h2'} mb={3}>Features</Typography>
                        {data.features &&
                            <Stack spacing={.5}>
                                {data.features.map(e => (
                                    <Stack direction={'row'} key={e} spacing={.5}>
                                        <CheckIcon fontSize="small" color="primary" />
                                        <Typography>{e}</Typography>
                                    </Stack>
                                ))}
                            </Stack>
                        }
                    </Grid>
                </Grid>
            </Container>}
        </>
    )
}

export default Project