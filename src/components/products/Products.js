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
import cabinet from '../../assets/images/products/cabinet.jpg';
import { useState } from "react";

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

    return (
        <>
            <NavItem />
            <div className="container mx-auto mb-20">
                <div className="grid grid-cols-3 gap-6">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className="relative bg-white overflow-hidden mb-4"
                            onMouseEnter={() => setHoveredId(index)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <img
                                src={hoveredId === index ? productImages[productImages.length - 1 - index] : productImages[index]}
                                alt={`Product ${product.id}`}
                                className="object-cover transition-all duration-500 ease-in-out" />
                            <div className="absolute top-6 left-6 flex flex-col text-center space-y-2">
                                {product.discount && <span className="bg-[#98d9cb] text-white text-xs font-semibold px-3 py-4 rounded-full">{product.discount}</span>}
                                {product.tags.includes('new') && <span className="bg-[#c71a34] text-white text-xs font-semibold px-3 py-4 rounded-full">new</span>}
                                {product.tags.includes('out') && <span className="bg-gray-900 text-white text-xs font-semibold px-3 py-4 rounded-full">out</span>}
                            </div>
                            <div className="flex flex-row justify-between mt-7">
                                <h3 className="font-normal text-xl">Lorem ipsum decor three</h3>
                                <button className="text-red-700 text-xl font-bold"> + Add to cart</button>
                            </div>
                            <div className="mt-5">
                                {product.discount && <span className="mt-2 line-through text-gray-400 mr-3">${product.priceOff}</span>}
                                <span className="font-bold mt-2">${product.price}</span>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto">
                <div className="flex flex-col justify-center items-center">
                    <div className="col-auto">
                        <img src={cabinet} alt="cabinet" />
                    </div>
                    <div className=" text-center mt-5 font-normal box-border">
                        <h2 className="text-black text-4xl leading-[1.5] tracking-wide">Up To 40% Off Final Sale Items.
                            <br />
                            Caught in the moment!</h2>
                        <button class="uppercase mt-5 border border-black bg-black text-white py-2 px-8 tracking-widest font-bold
                         hover:bg-white hover:text-black transition duration-200">
                            shop now
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Products;