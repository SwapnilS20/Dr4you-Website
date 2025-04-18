import React from 'react';
import '../index.css';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Header from '../components/Header/Header.jsx';
import Hero from '../components/HeroSection/Hero.jsx';

const HomePage = () => {
 
    return (
        <div className=' text-4xl bg-custom-gradient min-h-screen'>
            <Header />
            <Hero />
        </div>
    );
}

export default HomePage;
