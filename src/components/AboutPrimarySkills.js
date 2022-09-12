import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import logoReact from '../assets/logos/logo_react.png'
import logoRedux from '../assets/logos/logo_redux.png'
import logoReactQuery from '../assets/logos/logo_reactquery.png'
import logoMui from '../assets/logos/logo_mui.png'
import logoHtml from '../assets/logos/logo_html.png'
import logoCss from '../assets/logos/logo_css.png'
import { useSelector } from 'react-redux'

function AboutPrimarySkills() {

  const language = useSelector((state) => state.language.value)

  const primarySkillsLogos = [
    {
      name: 'react',
      logo: logoReact
    },
    {
      name: 'redux',
      logo: logoRedux
    },
    {
      name: 'react query',
      logo: logoReactQuery
    },
    {
      name: 'material ui',
      logo: logoMui
    },
    {
      name: 'html',
      logo: logoHtml
    },
    {
      name: 'css',
      logo: logoCss
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
            <Typography variant='caption'>Front End</Typography>
          </Grid>
          <Grid item xs={12} textAlign={'center'} mb={5}>
            <Typography variant='h2' color={'secondary'}>{language ? "Primary Skills" : "Compétences Premières"}</Typography>
          </Grid>
        </Grid>


        <Grid container
          spacing={2}
          direction="row"
          display="flex"
          justifyContent="center"
        >
          {primarySkillsLogos.map(e => (
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

export default AboutPrimarySkills