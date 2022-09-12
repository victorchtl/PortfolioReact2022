import { Avatar, Box, Button, Container, Grid, IconButton, Link, Skeleton, Stack, Tab, Tabs, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import PortfolioService from '../services/portfolio.service';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import imgTest from '../assets/images/profil_picture.png'
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@emotion/react';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { setPortfolioCategory, setTabNumber } from '../slices/portfolioCategory';
import { useNavigate } from 'react-router-dom';

function Portfolio() {

  const language = useSelector((state) => state.language.value)

  const lightMode = useSelector((state) => state.lightMode.value)

  const portfolioCategory = useSelector((state) => state.portfolioCategory.value)

  const tabNumber = useSelector((state) => state.portfolioCategory.tabNumber)

  const theme = useTheme();

  const dispatch = useDispatch()

  const { isLoading: isLoadingP, data: dataP } = useQuery(['projects', portfolioCategory], () => PortfolioService.getAll(portfolioCategory))

  const { isLoading: isLoadingTabs, data: dataTabs } = useQuery('technologies', () => PortfolioService.getTechnologies())

  const skeletonNumber = Array.from(Array(4).keys());

  const handleChange = (event, newValue) => {
    dispatch(setTabNumber(newValue))
  };

  const ref = useRef(null);

  let navigate = useNavigate();

  return (
    <Container maxWidth='lg'>

      <Grid container mt={5} mb={5}>
        <Grid item xs={12} textAlign={'center'}>
          <Typography variant='caption'>{language ? "Discover My Work" : "Découvrir Mes Projets"}</Typography>
        </Grid>
        <Grid item xs={12} textAlign={'center'} mb={5}>
          <Typography variant='h2' color={'primary'}>Portfolio</Typography>
        </Grid>
      </Grid>

      <Tabs
        value={tabNumber}
        onChange={handleChange}
        scrollButtons sx={{ padding: '20px 0 20px 0', position: 'sticky', top: { xs: '48px', md: '64px' }, marginBottom: '50px', bgcolor: 'background.default', zIndex: 999 }}
        variant="scrollable"
        allowScrollButtonsMobile>
        {dataTabs && dataTabs.map(e => (
          <Tab label={e.name} key={e.name} onClick={() => dispatch(setPortfolioCategory(e.name))} />
        ))}
      </Tabs>

      <Grid container spacing={{ xs: 5, sm: 2 }}>
        {isLoadingP && skeletonNumber.map(e => (
          <Grid item xs={12} sm={4} md={3} key={e++}>
            <Box sx={{ width: '100%', aspectRatio: '1' }}>
              <Skeleton variant="rectangular" width={'100%'} height={'100%'} sx={{ borderRadius: '5px' }}></Skeleton>
              <Skeleton variant="text" >
                <Typography variant='h6'>
                  Project Name
                </Typography>
              </Skeleton>
              <Skeleton variant="text" >
                <Typography variant='overline'>
                  TECHNOLOGIE
                </Typography>
              </Skeleton>
              <Skeleton variant="text" >
                <Typography variant='body2'>
                  A short description of the project and his functionnalities
                </Typography>
              </Skeleton>
            </Box>
          </Grid>
        ))}
        {dataP && dataP.map((el) => (
          <Grid item xs={12} sm={4} md={3} key={el.name}>
            <Grid container
              sx={{
                borderRadius: '5px',
                '&:hover': {
                  backgroundColor: lightMode ? theme.palette.grey[200] : theme.palette.grey[900],
                  transition: 'all .2s ease-in-out'
                }
              }}
              p={1}
            >
              <Grid item sm={12} >
                <Box
                  onClick={() => navigate(`/portfolio/${el.uid}`)}
                  ref={ref}
                  id={el.name}
                  component="img"
                  src={el.image}
                  alt={el.name}
                  sx={{
                    aspectRatio: { xs: '3', sm: '1' },
                    objectFit: 'cover',
                    width: '100%',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transition: 'all .2s ease-in-out',
                    // '&:hover': {
                    //   filter: 'brightness(40%)',
                    //   transition: 'all .2s ease-in-out'
                    // }
                  }} />
              </Grid>
              <Grid item xs ml={0}>
                <Grid container>
                  <Grid item xs={11}>
                    <Typography variant='h6'>
                      {el.name}
                    </Typography>
                    <Typography variant='overline' lineHeight={1}>
                      {el.tech}
                    </Typography>
                    <Typography variant='body2' noWrap={true}>
                      {language ?
                        el.engtext
                        :
                        el.frtext
                      }

                    </Typography>
                  </Grid>
                  <Grid item xs={1} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={{ xs: 'center', sm: 'flex-start' }} sx={{ transform: "translate(0, 5px)" }}>
                    
                  
                    {el.githublink ?
                                <a target={'_blank'} href={el.githublink} rel="noreferrer" style={{ textDecoration: 'none' }}>
                                    <Box sx={{ color: theme.palette.text.secondary, '&:hover': { color: 'primary.main' }, cursor: 'pointer' }}><GitHubIcon fontSize='small' /></Box>
                                </a>
                                :
                                <>
                                    
                                </>
                            }

                            {el.livelink ?
                                <a target={'_blank'} href={el.livelink} rel="noreferrer" style={{ textDecoration: 'none' }}>
                                    <Box sx={{ color: theme.palette.text.secondary, '&:hover': { color: 'primary.main' }, cursor: 'pointer' }}><VisibilityRoundedIcon fontSize='small' /></Box>
                                </a>
                                :
                                <>
                                    
                                </>
                            }
                  
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container >
  )
}

export default Portfolio