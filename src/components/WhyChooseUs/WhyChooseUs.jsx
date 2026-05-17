import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faMugHot, faIceCream } from '@fortawesome/free-solid-svg-icons'

const WhyChooseUs = () => {
    return (
        <div className='w-[70%] my-5 mx-auto'>
            <div className='flex gap-2 items-between justify-between'>
                <div id='Fresh&Hygienic' className='p-6 bg-linear-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-2xl w-[33%]'>
                    <FontAwesomeIcon className='text-orange-400 text-2xl bg-base-100 px-2 py-3 my-2 rounded-full' icon={faMugHot} />
                    <h3 className='text-xl roboto-bold'>Fresh & Hygienic</h3>
                    <p className='py-2'>Prepared with premium qality ingredients</p>
                </div>
                <div id="FastDelivery" className='p-6 bg-linear-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl w-[33%]'>
                    <FontAwesomeIcon className='text-orange-400 text-2xl bg-base-100 px-2 py-3 my-2 rounded-full' icon={faUtensils} />
                    <h3 className='text-xl roboto-bold'>Fast Delivery</h3>
                    <p className='py-2'>Get your order in 15 minutes or less</p>
                </div>
                <div id="WideVariety" className='p-6 bg-linear-to-br from-green-50 to-green-100 border border-green-200 rounded-2xl w-[33%]'>
                    <FontAwesomeIcon className='text-orange-400 text-2xl bg-base-100 px-2 py-3 my-2 rounded-full' icon={faIceCream} />
                    <h3 className='text-xl roboto-bold'>Wide Variety</h3>
                    <p className='py-2'>choose from 100+ delicious options</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;