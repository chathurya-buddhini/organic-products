import React from 'react';

const GlassmorphismForm: React.FC = () => {
    return (
        <div className=" relative bg-gradient-to-r from-lime-300 to-lime-500 h-screen flex justify-center items-center h-50 w-50">
            <div className="py-8 px-6 max-w-md bg-white bg-opacity-30 rounded-lg shadow-lg backdrop-blur-xl backdrop-filter">
                <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-5">Keep in touch with us</h1>
                <p className="text-lg text-center text-gray-700 mb-8">Contact Us Now</p>
                <form className="flex flex-col">
                    <div className="mb-5">
                        <label className="text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
                        <input
                            className="bg-transparent border rounded-lg shadow border-black focus:border-lime-600 focus:ring-2 focus:ring-lime-600 py-2 px-4 block w-full appearance-none leading-normal"
                            type="text"
                            id="name"
                            name="name"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label className="text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
                        <input
                            className="bg-transparent border rounded-lg shadow  border-black focus:border-lime-600 focus:ring-2 focus:ring-lime-600 py-2 px-4 block w-full appearance-none leading-normal"
                            type="email"
                            id="email"
                            name="email"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label className="text-gray-700 font-semibold mb-2" htmlFor="message">Message</label>
                        <textarea
                            className="bg-transparent border rounded-lg shadow  border-black focus:border-lime-600 focus:ring-2 focus:ring-lime-600 py-2 px-4 block w-full appearance-none leading-normal"
                            id="message"
                            name="message"
                            rows={5}
                            required
                        ></textarea>
                    </div>
                    <button
                        className="bg-gradient-to-r from-purple-400 to-lime-600 text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out mb-5"
                        type="submit"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default GlassmorphismForm;

