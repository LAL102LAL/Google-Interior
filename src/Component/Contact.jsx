import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const validateForm = () => {
        let errors = {};
        if (!formData.name.trim()) errors.name = "Name is required!";
        if (!formData.email.trim()) {
            errors.email = "Email is required!";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid!";
        }
        if (!formData.message.trim()) errors.message = "Message cannot be empty!";
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setSuccessMessage("Your message has been sent successfully!");
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setSuccessMessage(""), 4000);
        }
    };

    return (
        <section className="w-full bg-gray-900 text-white py-16 px-4 mt-5">
            <div className="max-w-6xl mx-auto">
                <motion.h2 
                    className="text-4xl font-bold text-center mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Contact Us
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left - Contact Info */}
                    <motion.div 
                        className="space-y-6"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center space-x-4">
                            <FaPhone className="text-yellow-500 text-2xl" />
                            <p className="text-lg">+91 8917733310</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaEnvelope className="text-yellow-500 text-2xl" />
                            <p className="text-lg">contact@yourdomain.com</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaMapMarkerAlt className="text-yellow-500 text-2xl" />
                            <p className="text-lg">Hukulganj, Varanasi, Uttar Pradesh</p>
                        </div>

                        {/* Google Map (Replace the src with your own location) */}
                        <iframe
                            className="w-full h-60 rounded-lg shadow-lg"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509417!2d144.9537363153173!3d-37.81627917975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f3bf7f%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1602569491043!5m2!1sen!2sin"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </motion.div>

                    {/* Right - Contact Form */}
                    <motion.form 
                        onSubmit={handleSubmit} 
                        className="bg-gray-800 p-8 rounded-lg shadow-lg"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-4">
                            <label className="block text-lg font-medium mb-2">Your Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-lg font-medium mb-2">Your Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-lg font-medium mb-2">Your Message</label>
                            <textarea
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                                rows="4"
                                placeholder="Type your message here..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-yellow-500 text-gray-900 font-bold rounded-lg hover:bg-yellow-600 transition duration-300"
                        >
                            Send Message
                        </button>

                        {successMessage && <p className="text-green-500 text-center mt-4">{successMessage}</p>}
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
