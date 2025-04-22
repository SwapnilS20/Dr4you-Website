import React from 'react';
import Button from '../Button';
import '../../index.css';

const Header = () => {
    return ( 
        <div>
            <div className=' flex justify-between items-center p-8 pl-12 pr-12 '>
                <div className='text-xl font-general-sans font-bold'>Drs-4You</div>
                <nav className=' hidden md:flex space-x-16 text-Neutral-900  font-manrope font-semibold text-[16px] '>
                    <a href="#" className='text-lg'>Home</a>
                    <a href="#" className='text-lg'>Services</a>
                    <a href="#" className='text-lg'>Find Doctors</a>
                    <a href="#" className='text-lg'>About Us</a>
                    <a href="#" className='text-lg'>Blog</a>
                    <a href="#" className='text-lg'>Contact Us</a>  

                </nav>
                <div className=' flex  justify-center md:hidden items-center rounded-xl h-[50px] w-[48px] bg-Primary-Blue-600'>
                    <div className=' grid grid-cols-2  gap-1  '>
                        <span className=' h-[9px] w-[9px] rounded-sm border-2 border-white'></span>
                        <span className=' h-[9px] w-[9px] rounded-sm border-2 border-white'></span>
                        <span className=' h-[9px] w-[9px] rounded-sm border-2 border-white'></span>
                        <span className=' h-[9px] w-[9px] rounded-sm border-2 border-white'></span>

                    </div>
                </div>
                <Button styles={' h-[56px] , w-[174px] , text-[20px], hidden , md:flex , text-[20px] , justify-center , items-center'} children={" Patient Login"}/>
            </div>
        </div>
        
    );
}

export default Header;
