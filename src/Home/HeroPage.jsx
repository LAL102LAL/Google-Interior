
import { useNavigate } from 'react-router-dom';
const HomePage = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        // Redirect to a different page
        navigate('/Projects');  // Change this path to your desired path
    };


    return (
        <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://rvs-interior-design.onrender.com/photo1.png')" }}>
            <div className="absolute inset-0 bg-slate-900 bg-opacity-50 flex flex-col items-center justify-between text-white text-center">
                <div className="flex-grow"></div>
                <div className="mb-10 px-4 sm:px-6 md:px-8 lg:px-16">
                    {/* Title with text shadow and responsive font sizes */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide text-white  mb-6">
                        DESIGN YOUR HOUSE
                    </h1>

                    {/* Button with a responsive size and smooth hover effect */}
                    <div className="mt-6">
                        <button onClick={handleClick} className="relative px-6 py-3 sm:px-8 sm:py-4 border-4 border-teal-500 text-white font-semibold rounded-full overflow-hidden group transition-transform transform hover:scale-105">
                            <span className="absolute inset-0 bg-teal-500 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"></span>
                            <span className="relative z-10 text-sm sm:text-lg md:text-xl">WATCH MORE</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
