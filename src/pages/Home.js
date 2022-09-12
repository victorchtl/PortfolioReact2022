import React from 'react'
import HomeContact from '../components/HomeContact';
import HomeLanding from '../components/HomeLanding';
import HomePresentation from '../components/HomePresentation';
import HomeProjects from '../components/HomeProjects';
import '../css/Home.css';

function Home() {
    
    return (
        <div className='wrapper'>
            <section className='wrapperItem'><HomeLanding /></section>
            <section className='wrapperItem'><HomePresentation /></section>
            <section className='wrapperItem'><HomeProjects /></section>
            <section className='wrapperItem'><HomeContact /></section>
        </div>
    )
}

export default Home