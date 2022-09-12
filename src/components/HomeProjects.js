import { Box, Container, Grid, Modal, Typography } from '@mui/material'
import React from 'react'
import { useQuery } from 'react-query'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import imgTest from '../assets/images/profil_picture.png'
import portfolioService from '../services/portfolio.service'
import './HomeProjects.css'

function HomeProjects() {

  const language = useSelector((state) => state.language.value)

  const projectsList = [
    {
      id: 1,
      name: 'Guitar House',
      tech: 'REACTJS REDUX MUI FIRESTORE',
      img: imgTest
    },
    {
      id: 2,
      name: 'Mood',
      tech: 'REACTJS REDUX MUI',
      img: imgTest
    },
    {
      id: 3,
      name: 'Shopping List',
      tech: 'IONIC',
      img: imgTest
    }
  ]

  let navigate = useNavigate();

  const { isLoading: isLoadingP, data: dataP } = useQuery('projects', () => portfolioService.getLastThree())


  return (

    <Container maxWidth='lg' sx={{ height: '100vh' }}>

      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>

        <Grid container>
          <Grid item xs={12} textAlign={'center'}>
            <Typography variant='caption'>{language ? "My Recent Work" : "Mes Derniers Projets"}</Typography>
          </Grid>
          <Grid item xs={12} textAlign={'center'} mb={5}>
            <Typography variant='h2' color={'secondary'}>Portfolio</Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2} direction="row"
          justifyContent="center"
          alignItems="center">


          {dataP && dataP.map(e => (

            <Grid item
              key={e.name}
              xs={12}
              sm={4}
              md={3}
              lg={3}>
              <Grid container>
                <Grid item xs={12} sm={12}>
                  <Box
                    id={e.name}
                    component="img"
                    src={e.image}
                    alt={e.name}
                    onClick={() => navigate(`/portfolio/${e.uid}`)}
                    sx={{
                      aspectRatio: { xs: '3', sm: '1' },
                      objectFit: 'cover',
                      width: '100%',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      transition: 'all .2s ease-in-out',
                      '&:hover': {
                        filter: 'brightness(40%)',
                        transition: 'all .2s ease-in-out'
                      }
                    }} />
                </Grid>
                <Grid item xs sx={{ borderRadius: '5px', display: 'flex', flexDirection: 'column', marginLeft: { xs: '10px', sm: 0 } }}>
                  <Typography variant='h6'>
                    {e.name}
                  </Typography>
                  <Typography variant='overline' lineHeight={1}>
                    {e.tech}
                  </Typography>
                  <Typography variant='body2' noWrap={true}>
                    {e.description}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default HomeProjects