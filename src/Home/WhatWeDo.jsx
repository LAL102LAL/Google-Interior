import { FaPaintBrush, FaCouch, FaTools, FaRulerCombined } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const WhatWeDo = () => {

    
    const navigate = useNavigate();

    const handleClick = () => {
        // Redirect to a different page
        navigate('/service');  // Change this path to your desired path
    };


    const services = [
        {
            title: "Interior Design",
            icon: <FaPaintBrush className="text-yellow-500 text-4xl" />,
            description: "We create beautiful, functional interiors tailored to your style and needs.",
        },
        {
            title: "Furniture Customization",
            icon: <FaCouch className="text-yellow-500 text-4xl" />,
            description: "Get custom-made furniture that perfectly fits your home and personality.",
        },
        {
            title: "Renovation & Remodeling",
            icon: <FaTools className="text-yellow-500 text-4xl" />,
            description: "Transform your space with high-quality renovations and remodeling services.",
        },
        {
            title: "Space Planning",
            icon: <FaRulerCombined className="text-yellow-500 text-4xl" />,
            description: "Optimize your space with expert layout and planning for better functionality.",
        },
    ];

    return (
        <div className="w-full bg-slate-900 py-12 mt-1">
            <div className="max-w-6xl mx-auto text-center ">
                <h2 className="text-4xl font-bold text-white mb-8">What We Do</h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
                    We specialize in crafting unique, comfortable, and stylish living spaces. 
                    Our services are designed to bring your vision to life.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ml-1 mr-1">
                    {services.map((service, index) => (
                        <div key={index} className="bg-slate-800 p-6 rounded-lg shadow-lg text-center border-4 border-yellow-500">
                            <div className="flex justify-center mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                            <p className="text-gray-300">{service.description}</p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-8">
                <button     onClick={handleClick}  className="px-8 py-3 bg-yellow-500  text-slate-900 font-bold rounded-full hover:bg-teal-600 transition duration-300">
                    View All Services
                </button>
            </div>


            </div>
        </div>
    );
};

export default WhatWeDo;
