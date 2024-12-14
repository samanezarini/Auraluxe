import Logo from '../../assets/images/logo.jpg'
import { FiSearch } from "react-icons/fi";
import { LuLogIn } from "react-icons/lu";
import { FiHeart } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";


function Navbar() {

    return (
        <div className="w-full">
            <div className="flex justify-between items-center p-6">
                <img src={Logo} alt="Favicon" className='w-48 h-7' />
                <nav>
                    <ul className="flex flex-row gap-[4.5rem]">
                        <li className='flex flex-row'><a href=''>Home</a><IoIosArrowDown className='mt-1 ml-2'/></li>
                        <li className='flex flex-row'><a href=''>Shop</a><IoIosArrowDown className='mt-1 ml-2'/></li>
                        <li className='flex flex-row'><a href=''>Element</a><IoIosArrowDown className='mt-1 ml-2'/></li>
                        <li className='flex flex-row'><a href=''>Page</a><IoIosArrowDown className='mt-1 ml-2'/></li>
                        <li className='flex flex-row'><a href=''>Bloge</a><IoIosArrowDown className='mt-1 ml-2'/></li>
                    </ul>
                </nav>
                <div className='flex flex-row gap-7'>
                    <FiSearch className='w-[1.30rem] h-[1.30rem]' />
                    <LuLogIn className='w-[1.30rem] h-[1.30rem]' />
                    <FiHeart className='w-[1.30rem] h-[1.30rem]' />
                    <FiShoppingCart className='w-[1.30rem] h-[1.30rem]' />
                </div>
            </div>
        </div>
    );
}

export default Navbar;