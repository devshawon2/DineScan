import React from 'react';
import { Search, Menu, Bell, Heart, ShoppingCart, User } from 'lucide-react';

const DaisyNav = () => {
    return (
        <div className='flex flex-wrap'>
            <div className="navbar">
                <div className="navbar-start flex items-center gap-3">
                    <div className="btn btn-ghost roboto-extrabold text-xl text-white justify-center DineScan-primary-bg rounded-2 border-none w-10 h-8 rounded-2">DS</div>
                    <div className="title-location lg:flex hidden flex-col">
                        <a href='/' className="text-xl roboto-bold justify-start bg-base-100 border-none DineScan-primary">DineScan</a>
                        <a className='justify-start bg-base-100 border-none roboto-regular text-sm'>{`Table ${5}`}, {`Zone ${'A'}`}</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex input border-orange-400 input-bordered w-24 md:w-auto">
                    <Search className=' text-orange-500' />
                    <input type="text" placeholder="Search for food..." className="" />
                </div>
                <div className="navbar-end flex gap-2">
                    <ul className="menu menu-horizontal px-1 hidden lg:flex">
                        <li><a className='relative overflow-visible'><Bell />
                            <span className='absolute 
                        top-0 
                        right-0 
                        -mt-1 
                        mr-0 
                        px-2 
                        py-0 
                        DineScan-primary-bg 
                        rounded-full 
                        text-white'>
                                {1}
                            </span>
                        </a></li>
                        <li><a className='relative overflow-visible'><Heart /></a></li>
                        <li><a className='relative overflow-visible'><ShoppingCart />
                            <span className='absolute 
                        top-0 
                        right-0 
                        -mt-1 
                        mr-0 
                        px-2 
                        py-0 
                        DineScan-primary-bg 
                        rounded-full 
                        text-white'>
                                {1}
                            </span>
                        </a></li>
                        <li><a className='relative overflow-visible'><User /></a></li>
                    </ul>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar flex lg:hidden">
                            <Menu />
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Notifications</a></li>
                            <li><a>Favourite</a></li>
                            <li><a>Cart</a></li>
                            <li><a>Profile</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="input border-orange-400 input-bordered flex lg:hidden">
                <Search className=' text-orange-500' />
                <input type="text" placeholder="Search for food..." className="" />
            </div>
        </div>
    );
};

export default DaisyNav;