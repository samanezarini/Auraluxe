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

function Products() {

    const products = [
        { id: 1, image: pro1, discount: '-10%', tags: ['new'], priceOff:"17.00",  price: "15.30" },
        { id: 2, image: pro2, discount: '', tags: [], priceOff:"",  price: "15.00" },
        { id: 3, image: pro10, discount: '-20%', tags: [], priceOff:"30.00",  price: "24.00" },
        { id: 4, image: pro4, discount: '-12%', tags: ['new'], priceOff:"20.00",  price: "17.60" },
        { id: 5, image: pro5, discount: '-5%', tags: [], priceOff:"12.00",  price: "11.40" },
        { id: 6, image: pro6, discount: '-10%', tags: ['out'], priceOff:"12.00",  price: "10.80" },
        { id: 7, image: pro7, discount: '', tags: ['new'], priceOff:"",  price: "15.00" },
        { id: 8, image: pro8, discount: '-12%', tags: ['new'], priceOff:"17.00",  price: "14.96" },
        { id: 9, image: pro9, discount: '', tags: ['new'], priceOff:"",  price: "16.00" },
    ];

    return (
        <>
            <NavItem />
            <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="relative bg-white overflow-hidden mb-4">
                            <img src={product.image} alt={`Product ${product.id}`} className="object-cover" />
                            <div className="absolute top-6 left-6 flex flex-col text-center space-y-2">
                                {product.discount && <span className="bg-[#98d9cb] text-white text-xs font-semibold px-3 py-4 rounded-full">{product.discount}</span>}
                                {product.tags.includes('new') && <span className="bg-[#c71a34] text-white text-xs font-semibold px-3 py-4 rounded-full">new</span>}
                                {product.tags.includes('out') && <span className="bg-gray-900 text-white text-xs font-semibold px-3 py-4 rounded-full">out</span>}
                            </div>
                            <div className="flex flex-row justify-between mt-7">
                                <h3 className="font-normal text-xl">Lorem ipsum decor three</h3>
                                <button className="text-red-700 text-xl font-bold"> + Add to cart</button>
                            </div>
                            {product.discount && <span className="mt-2 line-through text-gray-400 mr-3">${product.priceOff}</span>}
                            <span className="font-bold mt-2">${product.price}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Products;