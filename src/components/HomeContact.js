import { Alert, Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useSelector } from 'react-redux';


function HomeContact() {

  const language = useSelector((state) => state.language.value)

  const contactData = [
    {
      icon: <MailRoundedIcon />,
      title: 'Email',
      displayedUrl: 'victor.chatel@gmail.com',
      url: 'mailto:victor.chatel@gmail.com',
      bkgColor: 'primary.main',
      buttonColor: 'secondary'
    },
    {
      icon: <LinkedInIcon />,
      title: 'LinkedIn',
      displayedUrl: 'linkedin.com/in/victorchatel/',
      url: 'https://www.linkedin.com/in/victorchatel/',
      bkgColor: 'secondary.main',
      buttonColor: 'primary'
    },
    {
      icon: <GitHubIcon />,
      title: 'GitHub',
      displayedUrl: 'github.com/victorchtl',
      url: 'https://github.com/victorchtl',
      bkgColor: 'primary.light',
      buttonColor: 'secondary'
    }
  ]

  return (
    <Container maxWidth='lg' sx={{ height: {xs:"calc(100vh - 56px)", md:"calc(100vh - 64px)"} }}>

      <Box
        sx={{
          height: {xs:"calc(100vh - 56px)", md:"calc(100vh - 64px)"},
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>

        <Grid container>
          <Grid item xs={12} textAlign={'center'}>
            <Typography variant='caption'>{language ? "Get In Touch" : "Prendre Contact"}</Typography>
          </Grid>
          <Grid item xs={12} textAlign={'center'} mb={5}>
            <Typography variant='h2' color={'secondary'}>Contact</Typography>
          </Grid>
        </Grid>

        <Grid container
          spacing={2}
          direction={'row'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          {contactData.map(e => (
            <Grid item key={e.title} xs={12} sm={4} md={3}>
              <Box
                p={{ xs: 2, sm: 0 }}
                backgroundColor={e.bkgColor}
                color={'background.paper'}
                borderRadius={'5px'}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                sx={{ aspectRatio: { xs: 'unset', sm: '1' } }}>
                {e.icon}
                <Typography variant='h6'>{e.title}</Typography>
                <Typography variant='caption'>
                  {e.displayedUrl}
                </Typography>
                <Button variant="contained" disableElevation={true} color={e.buttonColor} href={e.url} target='_blank' sx={{ marginTop: '20px' }}>{language ? "Contact Me" : "Me Contacter"}</Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default HomeContact