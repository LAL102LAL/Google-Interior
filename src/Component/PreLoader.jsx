import { useState, useEffect } from "react";
import { FaCouch, FaChair, FaBed, FaTable } from "react-icons/fa";

const Preloader = () => {
    const furnitureIcons = [FaCouch, FaChair, FaBed, FaTable];
    const [currentIconIndex, setCurrentIconIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulating data loading (Replace this with actual API calls)
        const fetchData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulated 3s load time
            setIsLoading(false);
        };

        fetchData();

        // Icon changing effect
        const interval = setInterval(() => {
            setCurrentIconIndex((prevIndex) => (prevIndex + 1) % furnitureIcons.length);
        }, 500); // Change icon every 0.5 seconds

        return () => clearInterval(interval);
    }, []);

    if (!isLoading) return null; // Hide preloader when content is loaded

    const CurrentIcon = furnitureIcons[currentIconIndex];

    return (
        <div className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center text-white z-50">
            <CurrentIcon className="text-6xl text-yellow-500 animate-bounce" />
            <p className="text-lg mt-4">Loading, please wait...</p>
        </div>
    );
};

export default Preloader;
