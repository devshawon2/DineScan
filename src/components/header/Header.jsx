import React from 'react';
import DaisyNav from './DaisyNav/DaisyNav';
import DaisyHero from './DaisyHero/DaisyHero';
import DaisyCarousel from './DaisyCarousel/DaisyCarousel';

const Header = () => {
    return (
        <section id="navbar" className='lg:w-[70%] w-[90%] m-auto'>
            <DaisyNav />
            <DaisyHero />
            <DaisyCarousel />
        </section>
    );
};

export default Header;