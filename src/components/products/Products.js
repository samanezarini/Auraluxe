import NavItem from "./navitem/NavItem";
import pro1 from '../../assets/images/products/1.jpg';
import pro2 from '../../assets/images/products/2.jpg';
import pro3 from '../../assets/images/products/3.jpg';
import pro4 from '../../assets/images/products/4.jpg';
import pro5 from '../../assets/images/products/5.jpg';
import pro6 from '../../assets/images/products/6.jpg';
import pro7 from '../../assets/images/products/7.jpg';
import pro8 from '../../assets/images/products/8.jpg';
import pro9 from '../../assets/images/products/9.jpg';
import pro10 from '../../assets/images/products/10.jpg';
import { useState } from "react";
import { Link } from "react-router-dom";
import FooterProducts from "./footerproduct/FooterProduct";

function Products() {

    const productImages = [pro1, pro2, pro3, pro4, pro5, pro6, pro7, pro8, pro9, pro10];

    const products = [
        { id: 1, image: pro1, discount: '-10%', tags: ['new'], priceOff: "17.00", price: "15.30" },
        { id: 2, image: pro2, discount: '', tags: [], priceOff: "", price: "15.00" },
        { id: 3, image: pro10, discount: '-20%', tags: [], priceOff: "30.00", price: "24.00" },
        { id: 4, image: pro4, discount: '-12%', tags: ['new'], priceOff: "20.00", price: "17.60" },
        { id: 5, image: pro5, discount: '-5%', tags: [], priceOff: "12.00", price: "11.40" },
        { id: 6, image: pro6, discount: '-10%', tags: ['out'], priceOff: "12.00", price: "10.80" },
        { id: 7, image: pro7, discount: '', tags: ['new'], priceOff: "", price: "15.00" },
        { id: 8, image: pro8, discount: '-12%', tags: ['new'], priceOff: "17.00", price: "14.96" },
        { id: 9, image: pro9, discount: '', tags: ['new'], priceOff: "", price: "16.00" },
    ];

    const [hoveredId, setHoveredId] = useState(null);
    const [filter, setFilter] = useState("all");

    const filteredProducts = filter === "all"
        ? products
        : filter === "sale"
            ? products.filter(product => product.discount)
            : products.filter(product => product.tags.includes(filter));


    return (
        <>
            <NavItem setFilter={setFilter} filter={filter} />
            <div className="container mx-auto mb-32">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-6">
                    {filteredProducts.map((product, index) => (
                        <div
                            key={product.id}
                            className="relative bg-white overflow-hidden mb-4"
                            onMouseEnter={() => setHoveredId(index)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <Link>
                                <img
                                    src={hoveredId === index ? productImages[productImages.length - 1 - index] : productImages[index]}
                                    alt={`Product ${product.id}`}
                                    className="object-cover transition-all duration-500 ease-in-out lg:p-0 sm:p-8 p-8" />
                            </Link>
                            <div className="absolute top-6 left-6 flex flex-col text-center space-y-2">
                                {product.discount && <span className="bg-[#98d9cb] text-white absolute top-8 left-8 lg:top-0 lg:left-0 sm:top-8 sm:left-8 text-xs font-semibold px-2 py-3 w-10 h-10 rounded-full">{product.discount}</span>}
                                {product.tags.includes('new') && <span className="bg-[#c71a34] text-white absolute top-20 left-8 lg:top-12 lg:left-0 md:top-20 text-xs sm:top-20 sm:left-8 font-semibold px-2 py-3 w-10 h-10 rounded-full">new</span>}
                                {product.tags.includes('out') && <span className="bg-gray-900 text-white absolute top-20  left-8 lg:top-12 lg:left-0 md:top-20 text-xs sm:top-20 sm:left-8 font-semibold px-3 py-3 w-10 h-10 rounded-full">out</span>}
                            </div>
                            <div className="flex flex-row justify-between mt-7 lg:mx-0 sm:mx-8 mx-8">
                                <h3 className="font-normal text-sm sm:text-base md:text-xl">Lorem ipsum decor three</h3>
                                <button className="text-red-700 text-xs sm:text-sm md:text-xl font-bold"> + Add to cart</button>
                            </div>
                            <div className="mt-3 mx-8 sm:mx-8 lg:mx-0">
                                {product.discount && <span className="mt-1 mr-3 line-through text-sm text-gray-400">${product.priceOff}</span>}
                                <span className="font-bold mt-1 text-sm">${product.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <FooterProducts />
        </>
    )
}

export default Products;