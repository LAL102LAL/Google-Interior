import { useState, useEffect } from 'react';

const FeedbackSection = () => {
    const feedbacks = [
        {
            name: "Ruchi Singhaniya",
            avatar: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            feedback: "This design completely transformed my living space! Highly recommend their services. Great attention to detail.",
        },
        {
            name: "Ananya Agarwal",
            avatar: "https://media.istockphoto.com/id/1987655119/photo/smiling-young-businesswoman-standing-in-the-corridor-of-an-office.jpg?s=2048x2048&w=is&k=20&c=TZuOS25rlnHWb7X3hbbYbtsYVmVNvRRRgRhgMM3BBRw=",
            feedback: "Amazing work! The team understood my vision and brought it to life. I couldn't be happier with the results.",
        },
        {
            name: "Rahul Seighal",
            avatar: "https://images.unsplash.com/flagged/photo-1577996693134-e50d294a665f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            feedback: "Professional and efficient. The design exceeded my expectations. Will definitely be returning for future projects.",
        },
    ];

    const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFeedbackIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
        }, 5000); // Change feedback every 5 seconds

        return () => clearInterval(interval); // Clear the interval on component unmount
    }, []);

    const { name, avatar, feedback } = feedbacks[currentFeedbackIndex];

    return (
        <div className="w-full mt-1  bg-slate-900 flex items-center justify-center">
            <div className="max-w-6xl mx-auto text-center mb-4 mt-4">
                <h2 className="text-3xl font-bold text-white mb-8">What Our Clients Say</h2>
                <div className="bg-slate-900 p-6 shadow-lg mr-1 ml-1 border rounded-lg max-w-md mx-auto border-4 border-yellow-500">
                    <div className="flex items-center mb-4">
                        <img
                            src={avatar}
                            alt={name}
                            className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <h3 className="text-lg font-semibold text-white">{name}</h3>
                    </div>
                    <p className="text-white">{feedback}</p>
                </div>
            </div>
        </div>
    );
};

export default FeedbackSection;
