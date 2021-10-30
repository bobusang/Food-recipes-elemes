import React from 'react'
import Category from './components/Category'

import DATA from '../productData.json'
import Food from './components/Food'
import Navbar from './components/Navbar'
import Footer from './components/Footer'



function Home() {
    return (
        <div className="overflow-x-hidden w-full pb-24">
            <Navbar />
            <div className="bg-mobile-pattern pt-24 px-6 lg:px-28 bg-cover md:max-h-screen md:grid md:grid-cols-2 md:bg-desktop-pattern">
                <div className='md:flex items-center'>
                    <div className="space-y-8">
                        <div className="text-head-sm md:text-head-md text-green-dark font-bold">Good Food Us <br/> Good Mood</div>
                        <div className="w-full md:hidden">
                            <img className="w-full h-full" src="https://imgur.com/cj1sIfC.png" alt="mobile-plate" />
                        </div>
                        <div className="text-p-sm  text-gray-500"> I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</div>
                        <div className="space-x-4">
                            <button className="rounded-full bg-green-dark text-white text-center py-2 px-4 hover:shadow-xl font-semibold">Daftar Sekarang</button>
                            <button className="rounded-full bg-gray-500 opacity-25 text-white text-center py-2 px-4 hover:shadow-xl hover:opacity-100 hover:bg-green-dark font-semibold">About us</button> 
                        </div>
                    </div>
                </div>
                <div>
                <img className="hidden md:block w-full h-auto" src="https://imgur.com/HX2B6KU.png" alt="mobile-plate" />
                </div>
            </div>

            <div className="py-8 px-6 lg:px-28">
                <div>
                    <div className="text-subhead-sm font-bold text-black-100 ">Browser Our Category</div>
                    <div className="text-subhead-sm font-bold text-green-dark ">Receipt</div>
                </div>
                    <div className="mt-8 -mx-6 lg:-mx-28 overflow-scroll pb-20">                   
                            <div className="z-50 transform lg:translate-x-28 flex space-x-2">
                            {DATA.Categories.map((medium) => {
                        return (
                            <>
                            <Category 
                            icon = {medium.image}
                            bg = {medium.bg_scheme}
                            title = {medium.title}
                            qty = {medium.qty}
                            />
                            </>
                        )
                    })}
                    {DATA.Categories.map((medium) => {
                        return (
                            <>
                            <Category 
                            icon = {medium.image}
                            bg = {medium.bg_scheme}
                            title = {medium.title}
                            qty = {medium.qty}
                            />
                            </>
                        )
                    })}
                            </div>
                            <button className="rounded-full bg-green-dark text-white font-semibold p-2">Next</button>
                    </div>

                <div>
                    <div className="text-subhead-sm font-bold text-black-100 ">Browser Our Trending</div>
                    <div className="text-subhead-sm font-bold text-green-dark ">Receipt</div>
                    
                    <div className="mt-8 space-y-4 md:space-y-0 md:grid md:grid-cols-4 gap-4 ">
                    {DATA.Categories.map((medium) => {
                    return (
                        <>
                        {medium.products.map((data) => 
                          <>
                            <Food 
                            icon = {data.image}
                            cat = {medium.title}
                            bg = {medium.bg_scheme}
                            title = {data.title}
                            rate = {data.rating}
                            />
                          </>  
                        )}
                        </>
                    )
                })}
                    </div>
                <div className="flex justify-center my-8">
                    <button className=" text-white font-bold bg-green-dark py-2 px-4 rounded-full ">All Recipes</button>
                </div>  
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
