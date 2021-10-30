import React from 'react'
import Category from './components/Category'

function Home() {
    return (
        <div className="px-6 w-full pb-24 ">
            <div className="bg-mobile-pattern bg-cover md:bg-desktop-pattern">
                <div className="text-head-sm text-green-dark font-bold">Good Food Us <br/> Good Mood</div>
                <div className="w-full md:hidden">
                <img className="w-full h-full" src="https://imgur.com/cj1sIfC.png" alt="mobile-plate" />
                </div>
                <div className="text-p-sm text-gray-500"> I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</div>
                <div className="space-x-4 pt-8">
                    <button className="rounded-full bg-green-dark text-white text-center py-2 px-4 hover:shadow-xl font-semibold">Daftar Sekarang</button>
                    <button className="rounded-full bg-gray-500 opacity-25 text-white text-center py-2 px-4 hover:shadow-xl hover:opacity-100 hover:bg-green-dark font-semibold">About us</button> 
                </div>
            </div>

            <div className="py-8 space-y-4">
                <div>
                    <div className="text-subhead-sm font-bold text-black-100 ">Browser Our Category</div>
                    <div className="text-subhead-sm font-bold text-green-dark ">Receipt</div>
                </div>

                <div className="-mx-8 overflow-scroll pt-4 pb-24">                   
                        <div className="z-50 flex space-x-2">
                            <Category />
                            <Category />
                            <Category />
                            <Category />
                        </div>
                        <button className="rounded-full bg-green-dark text-white font-semibold p-2">Next</button>
                </div>

                <div>
                    <div className="text-subhead-sm font-bold text-black-100 ">Browser Our Trending</div>
                    <div className="text-subhead-sm font-bold text-green-dark ">Receipt</div>
                </div>
            </div>
        </div>
    )
}

export default Home
