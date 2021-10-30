import React from 'react'

function Food(props) {
    return (
        <div className={`p-5 z-auto transition duration-500 ease-in-out shadow-sm transform sm:hover:-translate-y-6  ${props.bg}  hover:bg-catHover-pattern rounded-xl flex items-center`}>
            <div className="font-semibold flex sm:block space-x-5 sm:space-x-0">
                <div>
                    <img className="object-cover h-32 w-32 rounded-xl" src="https://imgur.com/wboqg9S.png" title={props.title} />
                </div>
                <div>
                    <div className="font-bold text-prodTitle-sm text-black">{props.title}</div>
                    <div className="font-semibold text-p-sm text-green-dark">{props.cat}</div>
                    <div className="font-light text-sm text-black">{props.rate} Stars</div>
                </div>
            </div>
        </div>
    )
}

export default Food
