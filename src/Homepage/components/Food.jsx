import {React, useState} from 'react'


function Food(props) {
    const [rating, setRating] = useState("1")

    const Rating = () => {
        switch(props.rate) {
            case "1" :
                return (
                    <>
                    <span class="fa fa-star text-yellow-400"></span>
                    <span class="fa fa-star text-gray-400"></span>
                    <span class="fa fa-star text-gray-400"></span>
                    <span class="fa fa-star text-gray-400"></span>
                    <span class="fa fa-star text-gray-400"></span>               
                    </>
                )
            case "2" :
                return (
                    <>
                    <span class="fa fa-star text-yellow-400"></span>
                    <span class="fa fa-star text-yellow-400"></span>
                    <span class="fa fa-star text-gray-400"></span>
                    <span class="fa fa-star text-gray-400"></span>
                    <span class="fa fa-star text-gray-400"></span>               
                    </>
                )
            case "3" :
                return (
                    <>
                    <span class="fa fa-star text-yellow-400"></span>
                    <span class="fa fa-star text-yellow-400"></span>
                    <span class="fa fa-star text-yellow-400"></span>
                    <span class="fa fa-star text-gray-400"></span>
                    <span class="fa fa-star text-gray-400"></span>               
                    </>
                )
            case "4" :
                return (
                    <>
                    <span class="fa fa-star text-yellow-400"></span>
                    <span class="fa fa-star text-yellow-400"></span>
                    <span class="fa fa-star text-yellow-400"></span>
                    <span class="fa fa-star text-yellow-400"></span>
                    <span class="fa fa-star text-gray-400"></span>               
                    </>
                )
            case "5" :
            return (
                <>
                <span class="fa fa-star text-yellow-400"></span>
                <span class="fa fa-star text-yellow-400"></span>
                <span class="fa fa-star text-yellow-400"></span>
                <span class="fa fa-star text-yellow-400"></span>
                <span class="fa fa-star text-yellow-400"></span>               
                </>
            )
            default:
                return null
        }
    }

    return (
        <div className={`p-5 z-auto transition duration-500 ease-in-out shadow-sm transform sm:hover:-translate-y-6  ${props.bg}  hover:bg-catHover-pattern rounded-xl flex items-center`}>
            <div className="font-semibold md:space-y-6 flex md:block space-x-5 md:space-x-0">
                <div>
                    <img className="object-cover h-32 w-32 rounded-xl" src={props.img} title={props.title} />
                </div>
                <div>
                    <div className="font-medium text-prodTitle-sm text-black">{props.title}</div>
                    <div className="font-medium text-p-sm text-green-dark">{props.cat}</div>
                    <div className="mt-4">{Rating()}</div>
                </div>
            </div>
        </div>
    )
}

export default Food
