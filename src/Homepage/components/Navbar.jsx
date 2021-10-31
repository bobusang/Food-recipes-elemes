import React from 'react'

function Navbar() {
    return (
        <div className="fixed z-50 top-0 left-0 right-0 bg-white lg:bg-opacity-75 lg:bg-opacity-0 border-b lg:border-0 border-gray-200">
            <div className="flex items-center justify-between py-2 px-3">
                {/* logo elemes */}
                <div>
                    <img src="https://imgur.com/uXTzwry.png" alt="elemes logo" />
                </div>

                {/* list menu */}
                <div className="hidden lg:flex items-center justify-center space-x-8">
                    <div className="static font-semibold text-link-md text-gray-600">Home</div>
                    <div className="static font-semibold text-link-md text-gray-600">About</div>
                    <div className="relative font-semibold text-link-md text-gray-600">Promotions
                        <div className="absolute -top-5 -right-4">
                            <div className="bg-red-500 rounded-lg text-badge py-1 px-2 text-white font-bold">HOT</div>
                        </div>
                    </div>
                    <div className="static font-semibold text-link-md text-gray-600">Blogs</div>
                    <div className="static font-semibold text-link-md text-gray-600">Contact Us</div>
                </div>
                
                {/* Call to Action */}
                <div className="flex items-center justify center space-x-6">
                    <div className="hidden md:block font-semibold text-link-md text-gray-800">Masuk</div>
                    <div className="px-4 py-2 bg-green-dark rounded-full font-semibold text-link-md text-white">Daftar Sekarang</div>
                </div>
            </div>

            {/* Mobile menu bottom */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 py-2  bg-white">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col items-center justify-center text-gray-400 hover:text-green-dark cursor-pointer w-24">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        <div className="">Home</div>
                    </div>
                    <div className="flex flex-col items-center justify-center text-gray-400 hover:text-green-dark cursor-pointer w-24">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div className="">Promotions</div>
                    </div>
                    <div className="flex flex-col items-center justify-center text-gray-400 hover:text-green-dark cursor-pointer w-24">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                        <div className="">Others</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
