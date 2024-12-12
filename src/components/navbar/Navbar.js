import Logo from '../../assets/images/logo.jpg'
import { FiSearch } from "react-icons/fi";
import { MdManageAccounts } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { HiShoppingCart } from "react-icons/hi";


function Navbar() {

    return (
        <div className="w-full">
            <div className="flex justify-between items-center p-6">
                <img src={Logo} alt="Favicon" className='w-48 h-7' />
                <nav>
                    <ul className="flex flex-row gap-[4.5rem]">
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Element</li>
                        <li>Page</li>
                        <li>Bloge</li>
                    </ul>
                </nav>
                <div className='flex flex-row gap-7'>
                    <FiSearch className='w-[1.30rem] h-[1.30rem]' />
                    <MdManageAccounts className='w-[1.30rem] h-[1.30rem]' />
                    <FiHeart className='w-[1.30rem] h-[1.30rem]' />
                    <HiShoppingCart className='w-[1.30rem] h-[1.30rem]' />
                </div>
            </div>
        </div>
    );
}

export default Navbar;