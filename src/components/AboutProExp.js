import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

function AboutProExp() {

    const language = useSelector((state) => state.language.value)

    return (
        <Container maxWidth='md'>
            <Box
                sx={{
                    height: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>


                <Grid container>
                    <Grid item xs={12} textAlign={'center'}>
                        <Typography variant='caption'>{language ? "What Did I Do" : "Qu'est-ce que J'ai Fait"}</Typography>
                    </Grid>
                    <Grid item xs={12} textAlign={'center'} mb={5}>
                        <Typography variant='h2' color={'secondary'}>{language ? "Professional Experiences" : "Expériences Professionnelles"}</Typography>
                    </Grid>
                </Grid>

                <Stack spacing={2}>
                    <Stack textAlign={'center'}>
                        <Typography variant='caption'>January 2022 - Today</Typography>
                        <Typography variant='body1'>React Junior Developer</Typography>
                    </Stack>
                    <Stack textAlign={'center'}>
                        <Typography variant='caption'>September 2012 - January 2022</Typography>
                        <Typography variant='body1'>Freelance Digital Artistic Director</Typography>
                        <Typography variant='caption'>UI/UX - 3D - MOTION & SOUND DESIGN</Typography>
                    </Stack>
                </Stack>



            </Box>
        </Container>
    )
}

export default AboutProExp