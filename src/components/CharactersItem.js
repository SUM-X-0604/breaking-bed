import React from 'react'

const CharactersItem = ({ item }) => {
    return (
        <section className='cursor-pointer bg-transparent '>
            <div className='w-[100%] h-[100%] transition duration-150 cursor-pointer'>
                <img src={item.img} alt="" />
                <p className='py-2 flex items-center justify-center'>{item.name}</p>
            </div>
        </section>
    )
}

export default CharactersItem