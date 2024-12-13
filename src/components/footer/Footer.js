import Logo from '../../assets/images/logo.jpg'

function Footer() {

    return (
        <>
            <footer className="pt-14 pb-28 bg-white">
                <div className="container mx-auto ">
                    <div className="flex flex-row justify-normal items-start">
                        <div>
                            <img src={Logo} alt="Logo" />
                            <p></p>
                        </div>
                        <div className='flex flex-col'>
                            <h3>ABOUT</h3>
                            <a href="">About us</a>
                            <a href="">Store location</a>
                            <a href="">Contact</a>
                            <a href="">Orders tracking</a>
                        </div>
                        <div className='flex flex-col'>
                            <h3>USEFUL LINKS</h3>
                            <a href="">Returns</a>
                            <a href="">Support Policy</a>
                            <a href="">Size guide</a>
                            <a href="">FAQs</a>
                        </div>
                        <div className='flex flex-col'>
                            <h3>FOLLOW US ON</h3>
                            <a href="">Twitter</a>
                            <a href="">Facebook</a>
                            <a href="">Instagram</a>
                            <a href="">Youtube</a>
                        </div>
                        <div className='flex flex-col'>
                            <h1>Subscribe.</h1>
                            <p>Subscribe to our newsletter to receive news on update.</p>
                            <input type="text" placeholder='Your email address' />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;