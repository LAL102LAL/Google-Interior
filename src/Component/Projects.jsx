import { useState } from 'react';

const projects = [
    { id: 1, title: 'Modern Living Room', category: 'Residential', image: 'https://img.interiorcompany.com/interior/webproduct/244638722502901777881.png?aio=w-1200;', description: 'A modern living room design with sleek furniture and lighting.' },
    { id: 2, title: 'Luxury Penthouse', category: 'Luxury Homes', image: 'https://media.designcafe.com/wp-content/uploads/2019/12/17054323/furniture-in-your-penthouse-apartment.jpg', description: 'A high-end penthouse with a contemporary touch.' },
    { id: 3, title: 'Office Space', category: 'Commercial', image: 'https://officesnapshots.com/wp-content/uploads/2024/12/mody-motors-offices-hyderabad-1-1031x1200-compact.jpg', description: 'A functional and stylish office space designed for productivity.' },
    { id: 4, title: 'Cozy Bedroom', category: 'Residential', image: 'https://img.interiorcompany.com/interior/webproduct/866638725306485379772.png?aio=w-1200;', description: 'A cozy bedroom designed with comfort and elegance.' },
    { id: 5, title: 'Hotel Lobby', category: 'Commercial', image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/36c5bc205537715.66eb11ff19040.jpg', description: 'An elegant hotel lobby designed to impress guests.' },
    { id: 6, title: 'Luxury Villa', category: 'Luxury Homes', image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/b2755a208548747.66f1107d6cd12.jpg', description: 'A spacious and luxurious villa with a modern aesthetic.' },
];

const categories = ['All', 'Residential', 'Commercial', 'Luxury Homes'];

const PortfolioSection = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    return (
        <div className="w-full bg-gray-100 py-16">
            <div className="max-w-6xl mx-auto text-center px-4">
                <h2 className="text-4xl font-bold text-gray-800 mb-8 mt-10"></h2>

                {/* Filter Buttons */}
                <div className="mb-8 overflow-x-auto px-4">
    <div className="flex justify-start sm:justify-center space-x-3 sm:space-x-4 md:space-x-6 scrollbar-hide py-2 w-max">
        {categories.map((category, index) => (
            <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 whitespace-nowrap font-bold rounded-full transition duration-300 ${
                    selectedCategory === category
                        ? 'bg-yellow-500 text-gray-900 shadow-md'
                        : 'bg-gray-300 text-gray-700 hover:bg-yellow-400'
                }`}
            >
                {category}
            </button>
        ))}
    </div>
</div>


                {/* Projects Display */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
                    {filteredProjects.map(project => (
                        <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden border-4 border-yellow-500">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6 bg-yellow-500 h-full">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                                <p className="text-slate-900 text-sm">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Projects Found Message */}
                {filteredProjects.length === 0 && (
                    <p className="text-gray-600 mt-8">No projects available in this category.</p>
                )}
            </div>
        </div>
    );
};

export default PortfolioSection;
