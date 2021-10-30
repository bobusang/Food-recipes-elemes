import React from 'react'

function Category(props) {
    return (
        <div className={`z-auto transition duration-500 ease-in-out hover:shadow-xl h-44 w-60 transform hover:translate-y-6  ${props.bg}  hover:bg-catHover-pattern rounded-lg flex items-center justify-center`}>
            <div className="text-center  px-20 py-7 font-semibold ">
                <img className="mx-auto w-auto h-auto" src={props.icon} title={props.title} />
                <div className="mt-4 px-2 font-semibold text-base text-black">{props.title}</div>
                <div className="font-light text-sm text-black">{props.qty} items</div>
            </div>
        </div>
    )
}

export default Category
