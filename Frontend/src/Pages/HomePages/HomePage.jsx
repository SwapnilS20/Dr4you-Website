import React from 'react';
import '../../index.css';

import Header from '../../components/Header/Header.jsx';
import Hero from '../../components/HeroSection/Hero.jsx';
import WelcomeBanner from '../../components/Welcome Banner/WelcomeBanner.jsx';
import Specialities from '../../components/Specialities/specialities.jsx';
import Story from '../../components/Story/Story.jsx';
import Promise from '../../components/Our Promise/Promise.jsx';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs.jsx';
import PlatformWorking from '../../components/PlatformWorking/PlatformWorking.jsx';
import Testimonials from '../../components/Testimonials/Testimonials.jsx';
import Specialist from '../../components/Specialist/Specialist.jsx';
import FrequentlyAskedQuestion from '../../components/FAQ/FrequentlyAskedQuestion.jsx';


const HomePage = () => {
 
    return (
        <div className=' text-4xl min-h-screen'>
            
            {/* Header ands Hero secrtion */}
           <section className=' bg-custom-gradient'>            
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
            <Specialist show={true}/>
            <FrequentlyAskedQuestion/>
           
        </div>
    );
}

export default HomePage;
