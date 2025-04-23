import React from 'react';
import Button from '../Button';
import '../../index.css';
import logo from '../../assets/Images/Logo.png';
const Header = () => {
    return ( 
        <div>
            <div className=' flex justify-between items-center pl-6 pr-6  pt-6 sm:pl-12 sm:pr-12 '>
                <div className=' flex items-center gap-2 text-xl font-general-sans font-bold text-Primary-Blue-700 '> <img src={logo} alt="" /> Drs-4You</div>
                <nav className=' hidden lg:flex gap-6 text-Neutral-900  font-manrope font-semibold text-[16px] '>
                    <a href="#" className='text-lg'>Home</a>
                    <a href="#" className='text-lg'>Services</a>
                    <a href="#" className='text-lg'>Find Doctors</a>
                    <a href="#" className='text-lg'>About Us</a>
                    <a href="#" className='text-lg'>Blog</a>    
                    <a href="#" className='text-lg'>Contact Us</a>  

                </nav>
                <div className=' flex  justify-center lg:hidden items-center rounded-xl h-[50px] w-[48px] bg-Primary-Blue-600'>
                    <div className=' grid grid-cols-2  gap-1  '>
                        <span className=' h-[9px] w-[9px] rounded-sm border-2 border-white'></span>
                        <span className=' h-[9px] w-[9px] rounded-sm border-2 border-white'></span>
                        <span className=' h-[9px] w-[9px] rounded-sm border-2 border-white'></span>
                        <span className=' h-[9px] w-[9px] rounded-sm border-2 border-white'></span>

                    </div>
                </div>
                <Button styles={' h-[56px] w-[174px] text-[20px] hidden lg:flex text-[20px] justify-center items-center'} children={" Patient Login"}/>
            </div>
        </div>
        
    );
}

export default Header;
