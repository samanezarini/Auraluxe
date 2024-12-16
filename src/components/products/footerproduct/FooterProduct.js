import cabinet from '../../../assets/images/products/cabinet.jpg';

function FooterProducts() {

    return (
        <section>
            <div className="container mx-auto">
                <div className="flex flex-col justify-center items-center">
                    <div className="lg:mx-0 mx-5 lg:w-full md:w-[100rem] sm:max-w-[655px]">
                        <img src={cabinet} alt="cabinet" className="w-full h-auto" />
                    </div>
                    <div className=" text-center mt-5 font-normal box-border">
                        <h2 className="text-black text-xl sm:text-2xl md:text-4xl leading-[1.5] tracking-wide">Up To 40% Off Final Sale Items.
                            <br />
                            Caught in the moment!</h2>
                        <button class="uppercase mt-5 border border-black bg-black text-white py-2 px-8 sm:px-6 md:px-8 tracking-widest font-bold 
                        hover:bg-white hover:text-black transition duration-200">
                            shop now
                        </button>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default FooterProducts;