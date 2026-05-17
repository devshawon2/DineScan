import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { MapPin, Phone, Mail } from 'lucide-react';
const DaisyFooter = () => {
    return (
        <div className='border-t border-gray-200 mt-10'>
            <footer className="footer sm:footer-horizontal bg-base-100 text-base-content p-10 w-[70%] mx-auto">
                <aside>
                    <div className='flex items-center gap-3'>
                        <div className="btn btn-ghost roboto-extrabold text-xl text-white justify-center DineScan-primary-bg rounded-2 border-none w-10 h-8 rounded-2">DS</div>
                        <div className="title-location lg:flex hidden flex-col">
                            <a href='/' className="text-xl roboto-bold justify-start bg-base-100 border-none DineScan-primary">DineScan</a>
                            <a className='justify-start bg-base-100 border-none roboto-regular text-sm'>Quick. Fresh. Delicious.</a>
                        </div>
                    </div>
                    <p>
                        Your favorite corporate cafeteria ordering
                        <br />
                        platform. Order quickly, eat happily.
                    </p>
                    <div className="socials">
                        <a href=""><FontAwesomeIcon className=' bg-gray-100 text-xl m-2 p-3 rounded-full' icon={faFacebook} /></a>
                        <a href=""><FontAwesomeIcon className=' bg-gray-100 text-xl m-2 p-3 rounded-full' icon={faTwitter} /></a>
                        <a href=""><FontAwesomeIcon className=' bg-gray-100 text-xl m-2 p-3 rounded-full' icon={faInstagram} /></a>
                        <a href=""><FontAwesomeIcon className=' bg-gray-100 text-xl m-2 p-3 rounded-full' icon={faLinkedin} />
                        </a>
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Browse Menu</a>
                    <a className="link link-hover">My Favourites</a>
                    <a className="link link-hover">Track Order</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Top Categories</h6>
                    <a className="link link-hover">Breakfast</a>
                    <a className="link link-hover">Lunch Specials</a>
                    <a className="link link-hover">Snacks & Beverages</a>
                    <a className="link link-hover">Desserts</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact Us</h6>
                    <div className='flex item-between gap-2'>
                        <MapPin />
                        <a className="link link-hover">Corporate Cafeteria, Building A, Floor 2</a>
                    </div>
                    <div className='flex item-between gap-2'>
                        <Phone />
                        <a className="link link-hover">+91 123 456 7890</a>
                    </div>
                    <div className='flex item-between gap-2'>
                        <Mail />
                        <a className="link link-hover">support@dinescan.com</a>
                    </div>

                </nav>
            </footer>
        </div>
    );
};

export default DaisyFooter;