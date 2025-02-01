import { motion } from "framer-motion";

const AboutSection = () => {
    return (
        <section className="w-full bg-gray-900 text-white py-16 px-4 mt-5">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Side - Image */}
                <motion.div 
                    className="relative"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO07XztIHsaxOSJlcoXn-hbvpQ4uBZ7SAJ6X7IuZcshaRMG0iGP6jv_cuAKRpZONpNcXA&usqp=CAU" 
                        alt="Our Team"
                        className="rounded-lg shadow-lg"
                    />
                </motion.div>

                {/* Right Side - About Content */}
                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold mb-6">
                        About <span className="text-yellow-500">Us</span>
                    </h2>
                    <p className="text-lg text-gray-300 mb-6">
                        We are a team of professionals dedicated to delivering high-quality solutions. 
                        With years of experience, we bring creativity, precision, and passion to every project.
                    </p>
                    <p className="text-lg text-gray-300 mb-6">
                        Our mission is to provide top-notch services, ensuring client satisfaction and excellence in every aspect of our work.
                    </p>
                    <button className="px-6 py-3 bg-yellow-500 text-gray-900 font-bold rounded-lg hover:bg-yellow-600 transition duration-300">
                        Learn More
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
