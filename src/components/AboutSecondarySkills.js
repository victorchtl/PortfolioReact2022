import React from 'react'
import logoNodeJs from '../assets/logos/logo_nodejs.png'
import logoSequelize from '../assets/logos/logo_sequelize.png'
import logoMySql from '../assets/logos/logo_mysql.png'
import logoMamp from '../assets/logos/logo_mamp.png'
import { Box, Container, Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

function AboutSecondarySkills() {

  const language = useSelector((state) => state.language.value)

  const secondarySkillsLogos = [
    {
      name: 'NODEJS',
      logo: logoNodeJs
    },
    {
      name: 'SEQUELIZE',
      logo: logoSequelize
    },
    {
      name: 'MYSQL',
      logo: logoMySql
    },
    {
      name: 'MAMP',
      logo: logoMamp
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
            <Typography variant='caption'>Back End</Typography>
          </Grid>
          <Grid item xs={12} textAlign={'center'} mb={5}>
            <Typography variant='h2' color={'secondary'}>{language ? "Secondary Skills" : "Compétences Secondaires"}</Typography>
          </Grid>
        </Grid>


        <Grid container
          spacing={2}
          direction="row"
          display="flex"
          justifyContent="center"
        >
          {secondarySkillsLogos.map(e => (
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

export default AboutSecondarySkills