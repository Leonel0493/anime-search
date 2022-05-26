import React from 'react'

const MiniCard = ({minicardText, animeKey}) => {
    return(
        <div key={animeKey} className='h-max w-2/3 pl-5 py-2 mb-3 bg-cyan-700 text-white rounded-3xl'>
            {minicardText}
        </div>
    )
}

export default MiniCard;