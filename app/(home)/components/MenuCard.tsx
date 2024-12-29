import React from 'react'

const MenuCard = ({ item }: any) => {
    return (
        <div className="flex justify-between items-baseline">
            <div className="flex-1">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{item.description}</p>
            </div>
            <div className="border-b-4 border-dotted border-[#B72A23] flex-1 mx-4"></div>
            <div className="text-xl font-semibold">${item.price}</div>
        </div>
    )
}

export default MenuCard