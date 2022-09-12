import { Avatar, Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import profilPicture from '../assets/images/profil_picture.png'

function HomePresentation() {

  const language = useSelector((state) => state.language.value)

  let navigate = useNavigate();

  const navToAbout = () => {
    navigate("/about", { replace: true });
    window.scrollTo(0, 0);
  }

  return (
    <Container maxWidth='lg'>
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
            {language
              ?
              <Typography variant='body1'>
                I'm Victor Chatel, I'm 32 and i live in Lyon, France.
                <br></br>
                I'm a junior front end developer, I work essentially with ReactJS, Redux, ReactQuery and the Material UI library.
                <br></br>
                <br></br>
              </Typography>
              :
              <Typography variant='body1'>
                Je m'appelle Victor Chatel, j'ai 32 ans et je vis à Lyon.
                <br></br>
                Je suis développeur front end junior, je travaille essentiellement avec ReactJS, Redux, ReactQuery et la librairie Material UI.
                <br></br>
                <br></br>
              </Typography>
            }

            <Button onClick={navToAbout} variant='contained' disableElevation={true}>{language ? "LEARN MORE" : "DÉCOUVRIR"}</Button>
          </Grid>
        </Grid>



      </Box>
    </Container>
  )
}

export default HomePresentation