import React from "react";
import HeroPage from "../Home/HeroPage";
import Cart from "../Home/ProjectCart";
import FeedbackSection from "../Home/FeedbackSection";
import WhatWeDo from "../Home/WhatWeDo";

const Home = () => {
    return (
<>

<HeroPage/>
<Cart/>
<FeedbackSection/>
<WhatWeDo/>

<div className="w-full bg-gray-900 py-12 mt-1 ">
    <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold text-yellow-500">10+</h3>
                <p className="text-white">Years of Experience</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold text-yellow-500">500+</h3>
                <p className="text-white">Completed Projects</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold text-yellow-500">100%</h3>
                <p className="text-white">Client Satisfaction</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold text-yellow-500">50+</h3>
                <p className="text-white">Expert Designers</p>
            </div>
        </div>
    </div>
</div>


</>

    );
};

export default Home;