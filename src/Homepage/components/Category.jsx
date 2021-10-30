import React from 'react'

function Category() {
    return (
        <div className="z-auto transition duration-500 ease-in-out hover:shadow-xl h-44 w-44 transform hover:translate-y-6  bg-aqua-light  hover:bg-catHover-pattern rounded-lg flex items-center justify-center">
            <div className="text-center  px-20 py-7 font-semibold ">
                <img className="mx-auto w-auto h-auto" src="https://imgur.com/9N3WJMq.png" alt="kebab" />
                <div className="mt-4 px-2 font-semibold text-base text-black">Kebab</div>
                <div className="font-light text-sm text-black">12 Items</div>
            </div>
        </div>
    )
}

export default Category
