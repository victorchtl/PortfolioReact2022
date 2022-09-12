import { Box, Container, Typography } from '@mui/material'
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import React from 'react'
import { useSelector } from 'react-redux';
import '../css/HomeLanding.css'

function HomeLanding() {

    const language = useSelector((state) => state.language.value)

    const lightMode = useSelector((state) => state.lightMode.value)

    return (
        <Container
            maxWidth="lg"
            sx={{
                height: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around'
            }}>
            <Box />
            <Box
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                width={'100%'}
                textAlign={'center'}

            >
                {language ?
                    <Typography variant='body1' >
                        Hello I'm
                    </Typography>
                    :
                    <Typography variant='body1'>
                        Bonjour Je suis
                    </Typography>
                }
                <Typography variant='h1' color={lightMode ? 'secondary' : 'primary'}>
                    Victor Chatel
                </Typography>
                {language ?
                    <Typography variant='subtitle1'>
                        Junior Front End Developer
                    </Typography>
                    :
                    <Typography variant='subtitle1'>
                        Développeur Front End Junior
                    </Typography>
                }
            </Box>
            <Box sx={{position:'relative'}}>
                <KeyboardArrowDownRoundedIcon fontSize='large' color='primary'/>
                {/* <KeyboardArrowDownRoundedIcon fontSize='large' className='animateArrow1' sx={{position:'absolute'}}/>
                <KeyboardArrowDownRoundedIcon fontSize='large' className='animateArrow2' sx={{position:'absolute', transform:'translateY(10px)'}}/>
                <KeyboardArrowDownRoundedIcon fontSize='large' className='animateArrow3' sx={{position:'absolute', transform:'translateY(20px)'}}/> */}
            </Box>
        </Container>
    )
}

export default HomeLanding