import React from 'react';
import '../index.css';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Header from '../components/Header/Header.jsx';
import Hero from '../components/HeroSection/Hero.jsx';
import WelcomeBanner from '../components/Welcome Banner/WelcomeBanner.jsx';
import Specialities from '../components/Specialities/specialities.jsx';
import Story from '../components/Story/Story.jsx';

const HomePage = () => {
 
    return (
        <div className=' text-4xl min-h-screen'>
            
            {/* Header ands Hero secrtion */}
           <section className=' bg-custom-gradient'>            
                    <Header />
                    <Hero />
            </section> 

            {/* Welcome Banner Section */}
            <WelcomeBanner />

            <Specialities />  
            <Story />

        </div>
    );
}

export default HomePage;
