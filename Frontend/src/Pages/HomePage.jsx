import React from 'react';
import '../index.css';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Header from '../components/Header/Header.jsx';
import Hero from '../components/HeroSection/Hero.jsx';
import WelcomeBanner from '../components/Welcome Banner/WelcomeBanner.jsx';
import Specialities from '../components/Specialities/specialities.jsx';
import Story from '../components/Story/Story.jsx';
import Promise from '../components/Our Promise/Promise.jsx';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs.jsx';
import PlatformWorking from '../components/PlatformWorking/PlatformWorking.jsx';
import Testimonials from '../components/Testimonials/testimonials.jsx';
import Specialist from '../components/Specialist/Specialist.jsx';

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
            <Promise />
            <PlatformWorking />
            <WhyChooseUs/>
            <Testimonials/>
            <Specialist/>
        </div>
    );
}

export default HomePage;
