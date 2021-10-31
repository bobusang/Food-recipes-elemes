import React from 'react'
import Kebab from '../../assets/icons/kebab.svg'
import Doughnut from '../../assets/icons/doughnut.svg'
import Pizza from '../../assets/icons/pizza.svg'
import Salmon from '../../assets/icons/salmon.svg'
import Cupcake from '../../assets/icons/cupcake.svg'


function Category(props) {

    const iconSet = () => {
        switch(props.title) {
            case "Kebab":
                return <img className="mx-auto w-auto h-auto" src={Kebab} title={props.title} />
            case "Pizza":
                return <img className="mx-auto w-auto h-auto" src={Pizza} title={props.title} />
            case "Doughnut":
                return <img className="mx-auto w-auto h-auto" src={Doughnut} title={props.title} />
            case "Salmon":
                return <img className="mx-auto w-auto h-auto" src={Salmon} title={props.title} />
            case "Cupcake":
                return <img className="mx-auto w-auto h-auto" src={Cupcake} title={props.title} />


            default: return null
        }
    }
    return (
        <div className={`z-auto transition duration-500 ease-in-out hover:shadow-xl h-44 w-60 transform hover:translate-y-6  ${props.bg}  hover:bg-catHover-pattern rounded-lg flex items-center justify-center`}>
            <div className="text-center  px-20 py-7 font-semibold ">
                {iconSet()}
                <div className="mt-4 px-2 font-semibold text-base text-black">{props.title}</div>
                <div className="font-light text-sm text-black">{props.qty} items</div>
            </div>
        </div>
    )
}

export default Category
