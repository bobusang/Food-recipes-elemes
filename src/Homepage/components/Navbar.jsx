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
        </div>
    )
}

export default Navbar
