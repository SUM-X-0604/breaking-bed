import React from 'react'
import CharactersItem from './CharactersItem'


const CharactersData = ({ items }) => {
    return (
        <section className='py-4 px-4 grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 sm:grid-cols-3 md:grid-cols-4 '>
            {items.map((item) => (
                <CharactersItem key={item.char_id} item={item} />
            ))}

        </section>
    )
}

export default CharactersData