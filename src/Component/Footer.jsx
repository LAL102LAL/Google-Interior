const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 mt-1">
            <div className="container mx-auto px-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
                    <div>
                        <div className="flex items-center justify-center md:justify-start mb-4">
                            <i className="fas fa-map-marker-alt text-yellow-500 text-2xl"></i>
                            <div className="ml-3">
                                <h4 className="text-lg font-semibold">Find us</h4>
                                <span>Hukulganj, SW 54321, Varanasi</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-center md:justify-start mb-4">
                            <i className="fas fa-phone text-yellow-500 text-2xl"></i>
                            <div className="ml-3">
                                <h4 className="text-lg font-semibold">Call us</h4>
                                <span>8917733310</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-center md:justify-start mb-4">
                            <i className="far fa-envelope-open text-yellow-500 text-2xl"></i>
                            <div className="ml-3">
                                <h4 className="text-lg font-semibold">Mail us</h4>
                                <span>mail@info.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
                    <div className="text-center md:text-left">
                     
                       
                        <div className="flex justify-center md:justify-start mt-4 space-x-4">
                            <a href="#" className="text-blue-500"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-blue-400"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-red-500"><i className="fab fa-google-plus-g"></i></a>
                        </div>
                    </div>
                   
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold mb-3">Subscribe</h3>
                        <p className="text-sm mb-4">Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                        <form className="flex">
                            <input type="text" placeholder="Email Address" className="w-full p-2 rounded-l bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-500" />
                            <button className="bg-yellow-500 px-4 py-2 rounded-r"><i className="fab fa-telegram-plane text-white"></i></button>
                        </form>
                    </div>
                </div>
                <div className="mt-10 border-t border-gray-700 pt-5 text-center">
                    <p className="text-sm">Copyright &copy; 2025, All Rights Reserved <a href="#" className="text-yellow-500">Google Interior</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
