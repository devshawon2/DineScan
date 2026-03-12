import React from 'react';
import { Sparkles, X } from 'lucide-react';
import sparcle from '../../../assets/sparcle.svg'
const DaisyHero = () => {
    return (
        <div className="bg-[#ffedd4] my-4 rounded-xl border border-orange-300 flex justify-between p-4">
            <div className="hero-content justify-start items-start">
                <div className="bg-base-100 rounded-full DineScan-primary border-0 p-2">
                    <Sparkles />
                </div>
                <div>
                    <h1 className="text-xl font-bold">Free Delivery on Orders Above ₹200</h1>
                    <p className="py-2 text-gray-600">Order now and get your food delivered to your desk for free!</p>
                    <button className="btn DineScan-primary-bg rounded-lg">Browse Menu</button>
                </div>
            </div>
            <div style={{
                backgroundImage: `url(${sparcle})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain', // This ensures the SVG scales to fit
                backgroundPosition: 'center', // Centers the sparkle under the X
            }}
                className='w-12 h-12 flex items-center justify-center'><X className='btn bg-transparent border-0 shadow-none DineScan-primary' /></div>
        </div>
    );
};

export default DaisyHero;