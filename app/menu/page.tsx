import React from 'react'
import MenuCard from '../(home)/components/MenuCard'
import { Button } from '@/components/ui/button'
import { menu1 } from '@/data/menu-data'

const MenuPage = () => {
    return (
        <div>
            <div>
                <div className='w-full relative'>
                    <img src="/assets/menu_banner.png" alt="" />
                    <div className='absolute top-0 left-0 bg-black w-full h-full bg-opacity-50'>
                    </div>
                </div>
                <div>
                    <h3 className='text-3xl text-center py-4 text-[#B72A23] font-bold'>Menu</h3>
                </div>

                <div>

                    {menu1?.map((menu: any) => <section key={menu.category} className="bg-white py-16">
                        <div className="container mx-auto px-4">
                            <h2 className="text-4xl font-bold text-center text-red-600 mb-12">{menu?.category}</h2>
                            <div className="grid  grid-cols-1 md:grid-cols-2 gap-8  mx-auto">
                                {menu?.items?.map((item: any, index: any) => (
                                    <MenuCard key={index} item={item} />
                                ))}
                            </div>

                        </div>

                    </section>)}
                    <div>
                        <div className="items-center justify-center w-full text-center mt-14">
                            <Button className="bg-[#B72A23] px-8 py-5 mb-4">order now</Button>
                            <p>* Offers available for pickup and delivery orders only.</p>
                        </div>
                    </div>





                </div>
            </div>
        </div>
    )
}

export default MenuPage