import { Button, IconButton, Link } from '@mui/material';
import React from 'react'
import AboutComplementarySkills from '../components/AboutComplementarySkills';
import AboutLanding from '../components/AboutLanding';
import AboutPrimarySkills from '../components/AboutPrimarySkills';
import AboutSecondarySkills from '../components/AboutSecondarySkills';
import '../css/About.css';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import {useElementOnScreen} from '../hooks/useElementOnScreen.js';

function About() {

  return (
    <>
      <div className='wrapper' id="top">
        <section className='wrapperItem'><AboutLanding /></section>
        <section className='wrapperItem'><AboutPrimarySkills /></section>
        <section className='wrapperItem'><AboutSecondarySkills /></section>
        <section className='wrapperItem'><AboutComplementarySkills /></section>
      </div>
    </>
  )
}

export default About