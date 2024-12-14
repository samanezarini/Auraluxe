import Logo from '../../assets/images/logo.jpg'
import { TiArrowRight } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";


function Footer() {

    return (
        <>
            <footer className="pt-28 pb-16 bg-white">
                <div className="container mx-auto">
                    <div className="flex flex-row flex-wrap justify-between items-start">

                        <div className="w-full md:w-2/12 lg:w-3/12 mb-6 flex flex-col gap-7 px-4">
                            <img src={Logo} alt="Logo" className="w-64 h-10" />
                            <a href="" className='flex flex-row text-gray-400 hover:text-gray-600 ml-2'>Store Location</a>
                            <a href="" className='flex flex-row text-gray-400 hover:text-gray-600 ml-2'>Contact Support</a>
                            <a href="" className='flex flex-row text-gray-400 hover:text-gray-600 ml-2'>Policy Faqs</a>
                        </div>

                        <div className="w-6/12 md:w-2/12 lg:w-2/12 mb-6 flex flex-col gap-7 px-4">
                            <h3 className="text-xs font-bold tracking-widest">ABOUT</h3>
                            <a href="" className='flex flex-row text-gray-400 hover:text-gray-600'>About us</a>
                            <a href="" className='flex flex-row text-gray-400 hover:text-gray-600'>Store location</a>
                            <a href="" className='flex flex-row text-gray-400 hover:text-gray-600'>Contact</a>
                            <a href="" className='flex flex-row text-gray-400 hover:text-gray-600'>Orders tracking</a>
                        </div>

                        <div className="w-6/12 md:w-2/12 lg:w-2/12 mb-6 flex flex-col gap-7 px-4">
                            <h3 className="text-xs font-bold tracking-widest">USEFUL LINKS</h3>
                            <a href="" className='flex flex-row text-gray-400 hover:text-gray-600'>Returns</a>
                            <a href="" className='flex flex-row text-gray-400 hover:text-gray-600'>Support Policy</a>
                            <a href="" className='flex flex-row text-gray-400 hover:text-gray-600'>Size guide</a>
                            <a href="" className='flex flex-row text-gray-400 hover:text-gray-600'>FAQs</a>
                        </div>

                        <div className="w-6/12 md:w-2/12 lg:w-2/12 mb-6 flex flex-col gap-7 px-4">
                            <h3 className="text-xs font-bold tracking-widest">FOLLOW US ON</h3>
                            <a href="" className='flex flex-row text-gray-400 hover:text-gray-600'><FaXTwitter className=' text-gray-700 mt-1 mr-4' />Twitter</a>
                            <a href="" className='flex flex-row text-gray-400 hover:text-gray-600'><BsFacebook className=' text-gray-700 mt-1 mr-4' />Facebook</a>
                            <a href="" className='flex flex-row text-gray-400 hover:text-gray-600'><IoLogoInstagram className=' text-gray-700 mt-1 mr-4' />Instagram</a>
                            <a href="" className='flex flex-row text-gray-400 hover:text-gray-600'><FaYoutube className=' text-gray-700 mt-1 mr-4' />Youtube</a>
                        </div>

                        <div className="w-full md:w-4/12 lg:w-3/12 mb-6 flex flex-col gap-4 px-4">
                            <h1 className="text-2xl font-bold">Subscribe.</h1>
                            <p className="tracking-widest text-sm">
                                Subscribe to our newsletter to receive news on update.
                            </p>
                            <input
                                type="text"
                                placeholder="Your email address"
                                className="border-b-2 border-gray-300 py-2 focus:outline-none"
                            />
                            <div className="absolute mt-28 ml-64 text-gray-300">
                                <TiArrowRight className='w-8 h-8' />
                            </div>
                        </div>
                    </div>
                    <div className='mt-10 flex flex-col gap-5 text-center'>
                        <hr />
                        <h5 className='tracking-widest'>© 2024 Developed by<a href="" className='border-b-2 border-double border-blue-300'> Samane Zarini</a>. All Rights Reserved | (+98) 123 567890</h5>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer;