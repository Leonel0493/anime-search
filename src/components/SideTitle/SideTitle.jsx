import React from 'react'

const SideTitle = ({sideText}) =>{
    return(
        <div className='w-full h-max mb-5'>
            <p className='font-bold text-xl text-sky-600'>{sideText}</p>
        </div>
    )
}

export default SideTitle