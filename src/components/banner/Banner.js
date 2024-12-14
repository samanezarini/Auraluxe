import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Banner1 from '../../assets/images/1.jpg'
import Banner2 from '../../assets/images/2.jpg'
import Banner3 from '../../assets/images/3.jpg'

function Banner() {

    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper"
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                speed={1000}
            >
                <SwiperSlide><img src={Banner1} alt="banner1" className='container mx-auto w-[75rem] h-[40rem]' />
                    <div className='left-40 absolute top-11 translate-y-1/2'>
                        <h2 className='text-[15px] font-semibold text-blue-400 -tracking-[-8px]'>ACCESSORIES</h2>
                        <h1 className='text-5xl font-semibold text-gray-900 leading-[1.5] mb-10'>Bottle Grinder,
                            <br />
                            Small, 2-Piece
                        </h1>
                        <button class="uppercase border border-black bg-black text-white py-2 px-8 tracking-widest font-bold
                         hover:bg-white hover:text-black transition duration-200">
                            shop now
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide><img src={Banner2} alt="banner1" className='container mx-auto w-[75rem] h-[40rem]' />
                    <div className='left-40 absolute top-11 translate-y-1/2'>
                        <h2 className='text-[15px] font-semibold text-blue-400 -tracking-[-8px]'>HANDMADE</h2>
                        <h1 className='text-5xl font-semibold text-gray-900 leading-[1.5] mb-10'>Large,
                            <br />
                            Food board
                        </h1>
                        <button class="uppercase border border-black bg-black text-white py-2 px-8 tracking-widest font-bold
                         hover:bg-white hover:text-black transition duration-200">
                            shop now
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide><img src={Banner3} alt="banner1" className='container mx-auto w-[75rem] h-[40rem]' />
                    <div className='left-40 absolute top-11 translate-y-1/2'>
                        <h2 className='text-[15px] font-semibold text-blue-400 -tracking-[-8px]'>ACCESSORIES</h2>
                        <h1 className='text-5xl font-semibold text-gray-900 leading-[1.5] mb-10'>Tribeca Hubert,
                            <br />
                            Pendant
                        </h1>
                        <button class="uppercase border border-black bg-black text-white py-2 px-8 tracking-widest font-bold
                         hover:bg-white hover:text-black transition duration-200">
                            shop now
                        </button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Banner;