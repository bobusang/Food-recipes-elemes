import React from 'react'

function Footer() {
    return (
        <div className='px-28'>
            <div className="bg-green-light rounded-2xl py-8 px-16 flex items-start justify-between">
                <div className="space-y-8">
                <img src="https://imgur.com/uXTzwry.png" alt="elemes logo" />
                <div className="w-80 text-link-md text-gray-500 ">
                    Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, 
                    Kecamatan Setiabudi, Kota Jakarta Selatan, 
                    Daerah Khusus Ibukota Jakarta 12950
                </div>
                <div className="flex items-center justify-start space-x-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 bg-white text-green-dark hover:text-white hover:bg-green-dark rounded-full p-2 transform ease-in-out duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 bg-white text-green-dark hover:text-white hover:bg-green-dark rounded-full p-2 transform ease-in-out duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-current  h-10 w-10 bg-white text-green-dark hover:text-white hover:bg-green-dark rounded-full p-2 transform ease-in-out duration-300" fill="none" viewBox="0 0 24 24" stroke="" >
                        <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
                        </svg>

                </div>
                </div>
                <div className="">
                    <div className="text-black font-bold text-p-sm"> Categories</div>
                    <div className="space-y-4 mt-8">
                    <div className="cursor-pointer text-gray-500 font-regular text-link-md hover:text-green-dark hover:underline"> Cupcake</div>
                    <div className="cursor-pointer text-gray-500 font-regular text-link-md hover:text-green-dark hover:underline"> Pizza</div>
                    <div className="cursor-pointer text-gray-500 font-regular text-link-md hover:text-green-dark hover:underline"> Kebab</div>
                    <div className="cursor-pointer text-gray-500 font-regular text-link-md hover:text-green-dark hover:underline"> Salmon</div>
                    <div className="cursor-pointer text-gray-500 font-regular text-link-md hover:text-green-dark hover:underline"> Doughnut</div>
                    </div>
                </div>
                <div className="">
                    <div className="text-black font-bold text-p-sm"> About Us</div>
                        <div className="space-y-4 mt-8">
                        <div className="cursor-pointer text-gray-500 font-regular text-link-md hover:text-green-dark hover:underline"> About Us</div>
                        <div className="cursor-pointer text-gray-500 font-regular text-link-md hover:text-green-dark hover:underline"> FAQ</div>
                        <div className="cursor-pointer text-gray-500 font-regular text-link-md hover:text-green-dark hover:underline"> Report Problem</div>
                    </div>
                </div>
                <div className="">
                    <div className="text-black font-bold text-p-sm"> Newsletter</div>
                        <div className="space-y-4 mt-8">
                        <div className="text-gray-500 font-regular text-link-md w-64">Get now free 50% discount for alll products on your first order</div>
                        <form action="">
                            <input className="border-2 border-black bg-transparent rounded-lg h-9 focus:outline-none focus:ring-2 focus:ring-green-dark focus:border-transparent px-2" type="text" placeholder="Your email address" />
                            <button className='bg-green-dark text-white font-bold text-link-md h-9 rounded-lg px-2'>SEND</button>
                        </form>

                        <div className="flex items-center cursor-pointer text-black font-regular text-link-md hover:text-green-dark hover:underline">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-dark " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            
                            elemesid@gmail.com
                        </div>
                        <div className="flex items-center cursor-pointer text-black font-regular text-link-md hover:text-green-dark hover:underline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-dark " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg> 
                            
                            0888 111 2222
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Footer
