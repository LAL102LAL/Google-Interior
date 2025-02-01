
import { useNavigate } from 'react-router-dom';

const Cart = () => {


    const navigate = useNavigate();

    const handleClick = () => {
        // Redirect to a different page
        navigate('/Projects');  // Change this path to your desired path
    };



    const cartItems = [
        {
            title: "Modern Living Room Design",
            imgSrc: "https://img.interiorcompany.com/interior/webproduct/229638722437346601466.png?aio=w-1200;",
        },
        {
            title: "Kitchen Renovation Project",
            imgSrc: "https://img.interiorcompany.com/interior/webproduct/764638684830534563376.png?aio=w-1200;",
        },
        {
            title: "Bedroom Interior Makeover",
            imgSrc: "https://img.interiorcompany.com/interior/webproduct/866638725306485379772.png?aio=w-1200;",
        },
    ];

    return (
        <div className="w-full h-full bg-slate-900 py-8 px-4 mt-1">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {cartItems.map((item, index) => (
                    <div key={index} className="bg-white border-4 border-yellow-500 shadow-lg rounded-lg overflow-hidden ">
                        <img
                            src={item.imgSrc}
                            alt={item.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4 bg-yellow-500">
                            <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <button   onClick={handleClick} className="px-8 py-3 bg-yellow-500  text-slate-900 font-bold rounded-full hover:bg-teal-600 transition duration-300">
                    View All Projects
                </button>
            </div>
        </div>
    );
};

export default Cart;
