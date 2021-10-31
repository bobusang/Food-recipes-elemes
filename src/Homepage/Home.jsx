import React from 'react'
import Category from './components/Category'

import DATA from '../productData.json'
import Food from './components/Food'
import Navbar from './components/Navbar'
import Footer from './components/Footer'



function Home() {
    return (
        <div className="overflow-x-hidden w-full pb-24 font-body">
            <Navbar />
            <div className="bg-mobile-pattern pt-24 pb-16 px-6 lg:px-28 bg-cover md:max-h-screen md:grid md:grid-cols-2 md:bg-desktop-pattern">
                <div className='md:flex items-center'>
                    <div className="space-y-8">
                        <div className="text-head-sm md:text-head-md text-green-dark font-medium">Good Food Us <br/> Good Mood</div>
                        <div className="w-full md:hidden">
                            <img className="w-full h-full" src="https://imgur.com/cj1sIfC.png" alt="mobile-plate" />
                        </div>
                        <div className="text-p-sm font-normal text-gray-500"> I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</div>
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
                    <div className="text-subhead-sm text-black-100 font-medium">Browser Our Category</div>
                    <div className="text-subhead-sm text-green-dark font-medium">Recipes</div>
                </div>
                    <div id="category" className="relative mt-8 -mx-6 lg:-mx-28 overflow-scroll pb-20">                   
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
                    </div>
                <div className="hidden -mt-8 md:flex items-center justify-end space-x-4">
                    
                    <button className="flex items-center justify-center rounded-full bg-green-dark text-white font-semibold p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6 rounded-full bg-white text-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        PREV
                    </button>

                    <button className="flex items-center justify-center rounded-full bg-green-dark text-white font-semibold p-2">
                        NEXT
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-6 w-6 rounded-full bg-white text-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>


                </div>

                <div className="md:my-24">
                    <div className="text-subhead-sm text-black-100 font-medium">Browser Our Trending</div>
                    <div className="text-subhead-sm text-green-dark font-medium">Recipes</div>
                    
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
                            img = {data.image}
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
