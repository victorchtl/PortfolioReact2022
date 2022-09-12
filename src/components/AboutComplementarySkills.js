import React from 'react'
import logoGithub from '../assets/logos/logo_github.png'
import logoPostman from '../assets/logos/logo_postman.png'
import logoAdobe from '../assets/logos/logo_adobecreativecloud.png'
import logoAngular from '../assets/logos/logo_angular.png'
import logoSymfony from '../assets/logos/logo_symfony.png'
import { Box, Container, Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

function AboutComplementarySkills() {

  const language = useSelector((state) => state.language.value)

  const complementarySkillsLogos = [
    {
      name: 'GITHUB',
      logo: logoGithub
    },
    {
      name: 'POSTMAN',
      logo: logoPostman
    },
    {
      name: 'ADOBE CREATVE SUITE',
      logo: logoAdobe
    },
    {
      name: 'ANGULAR',
      logo: logoAngular
    },
    {
      name: 'SYMFONY',
      logo: logoSymfony
    }
  ]

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
            <Typography variant='caption'>{language ? "Tools and Interests" : "Outils et Intérêts"}</Typography>
          </Grid>
          <Grid item xs={12} textAlign={'center'} mb={5}>
            <Typography variant='h2' color={'secondary'}>{language ? "Complementary Skills" : "Compétences Complémentaires"}</Typography>
          </Grid>
        </Grid>


        <Grid container
          spacing={2}
          direction="row"
          display="flex"
          justifyContent="center"
        >
          {complementarySkillsLogos.map(e => (
            <Grid item key={e.name} xs={4} sm={3} md={2.5}>
              <Box
                component={'img'}
                src={e.logo}
                alt={e.name}
                sx={{
                  width: '100%',
                  aspectRatio: '1',
                  borderRadius: '5px'
                }}
              />
              <Typography variant={'body1'} textAlign={'center'}>{e.name}</Typography>
            </Grid>
          ))}
        </Grid>


      </Box>
    </Container>
  )
}

export default AboutComplementarySkills