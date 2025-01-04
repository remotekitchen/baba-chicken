import React from 'react'

const MenuCard = ({ item }: any) => {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-baseline">
            <div className="flex-1 mb-2 sm:mb-0">
                <h3 className="text-xl font-semibold">{item.name}</h3>
            </div>
            <div className="border-b-4 border-dotted border-[#B72A23] w-full sm:flex-1 mx-4"></div>
            <div className="text-xl font-semibold">{item.price}</div>
        </div>


    )
}

export default MenuCard