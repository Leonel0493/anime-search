import React from 'react'
import Title from '../Title/Title';

const Header = () => {
    return(
        <div className='w-max mx-auto px-4 py-4 flex justify-center text-white'>
            <Title titleText='Best Anime Series' textColor='text-orange-600' />
        </div>
    )
}

export default Header;