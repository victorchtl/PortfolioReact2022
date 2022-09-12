import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

function AboutSchoolCursus() {

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
                        <Typography variant='caption'>{language ? "What Did I Study" : "Qu'est-ce que J'ai Étudié"}</Typography>
                    </Grid>
                    <Grid item xs={12} textAlign={'center'} mb={5}>
                        <Typography variant='h2' color={'secondary'}>{language ? "School Cursus" : "Parcours Scolaire"}</Typography>
                    </Grid>
                </Grid>

                <Stack spacing={2}>
                    <Stack textAlign={'center'}>
                        <Typography variant='caption'>
                            {language ? "September 2020 - March 2021" : "Septembre 2020 - Mars 2021"}
                        </Typography>
                        <Typography variant='body1'>
                            {language ?
                                "Professional Title of Web and Mobile Web Developer Level 5"
                                :
                                "Titre Professionnel de Développeur(se) Web et Web Mobile Niveau 5"}
                        </Typography>
                        <Typography variant='caption'>
                            {language ?
                                "Professional Title from the Ministry of Employment and Professional Training"
                                :
                                "Titre Professionnel du Ministère de l’Emploi et de la Formation Professionnelle"}
                        </Typography>
                        <Typography variant='caption'>
                            {language ? "M2i Formation - Lyon, France" : "M2i Formation - Lyon"}
                        </Typography>
                    </Stack>
                    <Stack textAlign={'center'}>
                        <Typography variant='caption'>
                            {language ? "September 2009 - June 2012" : "Septembre 2009 - Juin 2012"}
                        </Typography>
                        <Typography variant='body1'>
                            {language ?
                                "License & Bachelor of 3D Computer Graphics"
                                :
                                "Licence & Bachelor d'Infographie 3D"}
                        </Typography>
                        <Typography variant='caption'>
                            {language ? "Studio M - Lyon, France" : "Studio M - Lyon"}
                        </Typography>
                    </Stack>
                    <Stack textAlign={'center'}>
                        <Typography variant='caption'>
                            {language ? "September 2008 - June 2009" : "Septembre 2008 - Juin 2009"}
                        </Typography>
                        <Typography variant='body1'>
                            {language ?
                                "Preparatory Year in Visual Communication"
                                :
                                "Année Préparatoire en Communication Visuelle"}
                        </Typography>
                        <Typography variant='caption'>
                            {language ? "Brassart - Tours, France" : "Brassart - Tours"}
                        </Typography>
                    </Stack>
                    <Stack textAlign={'center'}>
                        <Typography variant='caption'>
                            {language ? "June 2008" : "Juin 2008"}
                        </Typography>
                        <Typography variant='body1'>
                            {language ?
                                "Scientific Baccalaureate with Mathematics option"
                                :
                                "Baccalauréat Scientifique option Mathématiques"}
                        </Typography>
                        <Typography variant='caption'>
                            {language ? "Tours, France" : "Tours"}
                        </Typography>
                    </Stack>
                </Stack>



            </Box>
        </Container>
    )
}

export default AboutSchoolCursus