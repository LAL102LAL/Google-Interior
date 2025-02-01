import { FaPaintBrush, FaCouch, FaTools, FaRulerCombined, FaBath, FaWindowMaximize, FaHandHoldingHeart, FaLightbulb, FaHammer, FaWrench, FaToilet, FaShower, FaBed, FaChair, FaBroom, FaDesktop, FaCar, FaBus, FaBuilding, FaClipboardCheck } from "react-icons/fa";


const Service = () => {



    const services = [
        { title: "Interior Design", icon: <FaPaintBrush className="text-yellow-500 text-4xl" />, description: "We create beautiful, functional interiors tailored to your style and needs." },
        { title: "Furniture Customization", icon: <FaCouch className="text-yellow-500 text-4xl" />, description: "Get custom-made furniture that perfectly fits your home and personality." },
        { title: "Renovation & Remodeling", icon: <FaTools className="text-yellow-500 text-4xl" />, description: "Transform your space with high-quality renovations and remodeling services." },
        { title: "Space Planning", icon: <FaRulerCombined className="text-yellow-500 text-4xl" />, description: "Optimize your space with expert layout and planning for better functionality." },
        { title: "Sofa Design", icon: <FaBath className="text-yellow-500 text-4xl" />, description: "Craft the perfect sofa to match your interior aesthetics." },
        { title: "Window Installation", icon: <FaWindowMaximize className="text-yellow-500 text-4xl" />, description: "Install stylish and energy-efficient windows for your home." },
        { title: "Home Maintenance", icon: <FaHandHoldingHeart className="text-yellow-500 text-4xl" />, description: "Ensure your home stays in top condition with our maintenance services." },
        { title: "Lighting Design", icon: <FaLightbulb className="text-yellow-500 text-4xl" />, description: "Illuminate your space with bespoke lighting solutions that suit your mood." },
        { title: "Plumbing Services", icon: <FaHammer className="text-yellow-500 text-4xl" />, description: "Reliable plumbing services to keep your systems running smoothly." },
        { title: "Electrical Installations", icon: <FaWrench className="text-yellow-500 text-4xl" />, description: "Ensure your electrical systems are safe and up to code with our expert installation services." },
        { title: "Bathroom Design", icon: <FaToilet className="text-yellow-500 text-4xl" />, description: "Create a serene and functional bathroom space for your home." },
        { title: "Shower Installations", icon: <FaShower className="text-yellow-500 text-4xl" />, description: "Upgrade your shower with modern fixtures and designs." },
        { title: "Bedroom Design", icon: <FaBed className="text-yellow-500 text-4xl" />, description: "Design a peaceful and comfortable bedroom with personalized touches." },
        { title: "Furniture Assembly", icon: <FaChair className="text-yellow-500 text-4xl" />, description: "Assemble your new furniture quickly and efficiently." },
        { title: "Cleaning Services", icon: <FaBroom className="text-yellow-500 text-4xl" />, description: "Ensure a spotless living space with our cleaning services." },
        { title: "Tech Setup", icon: <FaDesktop className="text-yellow-500 text-4xl" />, description: "Set up your tech systems for optimal performance." },
       
        { title: "Project Management", icon: <FaClipboardCheck className="text-yellow-500 text-4xl" />, description: "Manage your home improvement project with our expert guidance." },
        { title: "Transportation", icon: <FaCar className="text-yellow-500 text-4xl" />, description: "" },
        { title: "Commercial Services", icon: <FaBuilding className="text-yellow-500 text-4xl" />, description: "" },
        { title: "Transportation Services", icon: <FaBus className="text-yellow-500 text-4xl" />, description: "" }
    ];

    return (
        <div className="w-full bg-slate-900 py-12 mt-9">
            <div className="max-w-6xl mx-auto text-center">
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
                            <p className="text-gray-300">{service.description || "Short description coming soon!"}</p>
                        </div>
                    ))}
                </div>

              
            </div>
        </div>
    );
};

export default Service;
