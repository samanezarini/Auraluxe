import Logo from '../../assets/images/logo.jpg'
import { FiSearch } from "react-icons/fi";
import { LuLogIn } from "react-icons/lu";
import { FiHeart } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex items-center justify-between bg-white fixed top-0 left-0 w-full h-20 text-black shadow-md z-50">
            <div className="w-full">
                <div className="flex justify-between items-center p-6">
                    <img src={Logo} alt="Favicon" className='w-48 h-8 lg:p-0 pl-8' />
                    <nav className='hidden lg:flex lg:flex-row lg:items-center gap-10'>
                        <ul className="flex flex-row gap-[4.5rem]">
                            <li className='flex'>
                                <NavLink to="/">Home</NavLink><IoIosArrowDown className='mt-1 ml-2' /></li>
                            <li className='flex'>
                                <NavLink to="/shop">Shop</NavLink><IoIosArrowDown className='mt-1 ml-2' /></li>
                            <li className='flex'>
                                <NavLink to="/element">Element</NavLink><IoIosArrowDown className='mt-1 ml-2' /></li>
                            <li className='flex'>
                                <NavLink to="/page">Page</NavLink><IoIosArrowDown className='mt-1 ml-2' /></li>
                            <li className='flex'>
                                <NavLink to="/blog">Blog</NavLink><IoIosArrowDown className='mt-1 ml-2' /></li>
                        </ul>
                    </nav>
                    <div className='hidden lg:flex gap-7'>
                        <a><FiSearch className='w-[1.30rem] h-[1.30rem] cursor-pointer' /></a>
                        <a><LuLogIn className='w-[1.30rem] h-[1.30rem] cursor-pointer' /></a>
                        <a><FiHeart className='w-[1.30rem] h-[1.30rem] cursor-pointer' /></a>
                        <a><FiShoppingCart className='w-[1.30rem] h-[1.30rem] cursor-pointer' /></a>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="lg:hidden text-3xl pr-8 text-gray-700"
                onClick={() => setIsOpen(!isOpen)}
            >
                ☰
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-sm transition-all duration-500 ease-in-out z-20"
                onClick={() => setIsOpen(false)} 
                ></div>
            )}

            {/* Mobile Navigation */}
            <nav
                className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} 
                transition-transform duration-500 ease-in-out z-30`}
            >
                <ul className="flex flex-col p-6 gap-4 text-gray-700">
                    <li> <NavLink to="/">Home</NavLink></li>
                    <li> <NavLink to="/shop">Shop</NavLink></li>
                    <li> <NavLink to="/element">Element</NavLink></li>
                    <li> <NavLink to="/page">Page</NavLink></li>
                    <li> <NavLink to="/blog">Blog</NavLink></li>
                </ul>
                <div className="flex justify-center gap-6 p-4 text-gray-700">
                    <FiSearch className="w-6 h-6 cursor-pointer" />
                    <LuLogIn className="w-6 h-6 cursor-pointer" />
                    <FiHeart className="w-6 h-6 cursor-pointer" />
                    <FiShoppingCart className="w-6 h-6 cursor-pointer" />
                </div>
            </nav>
        </header>
    );
}

export default Navbar;