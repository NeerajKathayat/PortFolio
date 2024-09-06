import React from 'react';

export default function Contact() {
    return (
        <div id="contact" className="min-h-screen bg-[#edf1fd] relative pt-10 px-5 pb-20" >
            <div className="text-center mb-24 pt-1">
                <h1 className="text-4xl font-bold mb-4" data-aos="fade-down">Contact Us</h1>
                <p className="text-lg font-light" data-aos="fade-down">
                    I'm excited to connect and discuss potential opportunities, collaborations, or just have a chat about tech! Let's make something awesome together.
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
                {/* Contact Info */}
                <div className="w-full md:w-1/2 space-y-8" data-aos="fade-down">
                    <div className="flex space-x-4 items-center p-4">
                        <div className="w-16 h-16 bg-white flex justify-center items-center rounded-full text-2xl">
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div>
                            <h3 className="text-[#17d1ac] font-medium">Address</h3>
                            <p className="text-sm font-light">Village-Jasari, Jhankat<br /> Khatima, 262308<br />U S Nagar, Uttarakhand</p>
                        </div>
                    </div>

                    <div className="flex space-x-4 items-center p-4">
                        <div className="w-16 h-16 bg-white flex justify-center items-center rounded-full text-2xl">
                            <i className="fa-solid fa-phone"></i>
                        </div>
                        <div>
                            <h3 className="text-[#17d1ac] font-medium">Phone</h3>
                            <p className="text-sm font-light">+917668189889</p>
                        </div>
                    </div>

                    <div className="flex space-x-4 items-center p-4">
                        <div className="w-16 h-16 bg-white flex justify-center items-center rounded-full text-2xl">
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div>
                            <h3 className="text-[#17d1ac] font-medium">Email</h3>
                            <p className="text-sm font-light">neeraj7500728999@gmail.com</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="w-full md:w-2/5 p-8 bg-white shadow-lg" data-aos="fade-down">
                    <form action="https://formspree.io/f/maykwvep" method="POST">
                        <h2 className="text-2xl font-semibold mb-6">Send Messages</h2>

                        <div className=" w-full mb-6">
                            <input type="text" name="username" required className="w-full border-b-2 border-gray-400 py-2 outline-none focus:border-pink-500" placeholder='Full Name' />

                        </div>

                        <div className=" w-full mb-6">
                            <input type="email" name="Email" required className="w-full border-b-2 border-gray-400 py-2 outline-none focus:border-pink-500 " placeholder='Email' />

                        </div>

                        <div className="w-full mb-6">
                            <input
                                type="text"
                                placeholder="Enter text"
                                className="w-full py-2 border-b-2 border-gray-400 outline-none focus:border-[#17d1ac]"
                            />
                        </div>


                        <div className="w-full">
                            <input type="submit" value="send" className="w-24 cursor-pointer bg-[#17d1ac] text-white py-2 cursor-pointerh hover:bg-[#32e7c3] hover:text-white transition-colors" />
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}
