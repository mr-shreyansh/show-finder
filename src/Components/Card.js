import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ data,name, rating, language, image, date }) => {


    return (
        <div className='max-w-[250px] max-h-[350px] bg-stone-800 text-yellow-400 shadow-lg shadow-purple-200 box-border'>
            <img src={image?.medium} alt={name} height={200} width={220} className='h-[250px]' />
            <div className='px-2 py-2'>
                <h2 className='text-lg font-semibold text-gray-200'>{name}</h2>
                <div className='flex justify-between font-light'>
                    <p className='text-yellow-400'>⭐ {rating}</p>
                    <p>{language}</p>
                    <p>{date}</p>
                </div>
                <button className='box-border px-2 py-1 font-medium text-white transition-all ease-in bg-purple-600 border-purple-500 hover:text-purple-500 bg-opacity-90 hover:bg-white'>
                    <Link to='/booking' state={{data:data}}>Explore</Link></button>
            </div>
        </div>
    )
}

export default Card