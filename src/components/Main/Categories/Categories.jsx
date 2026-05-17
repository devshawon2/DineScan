import React from 'react';
import { use } from 'react'

const Categories = ({ menuPromise }) => {
    const menus = use(menuPromise);
    const categories = menus.categories;
    return (
        <div className='w-[70%] mx-auto my-10'>
            <h3 className='roboto-bold text-xl mb-5'>Categories</h3>
            <div className='flex gap-4'>
                {
                    categories.map(category =>
                        <div key={category.id} className='btn border hover:border-orange-400 bg-base-100 border-gray-300 w-25 h-25 shadow-md text-center flex flex-col items-center justify-center gap-2 rounded-lg'>
                            <div><img className='bg-[#fff7ed] p-2.5 rounded-full' src={category?.symbol} alt="" /></div>
                            <p>{category.name}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Categories;