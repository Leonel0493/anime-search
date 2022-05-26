import React from 'react'
import TopAnime from '../../Features/TopAnime/TopAnime';
import SideTitle from '../SideTitle/SideTitle';

const SideMenu = () => {
    return(
        <div className='w-1/4 py-3 flex flex-col'>
            <SideTitle sideText='Top Animes' />
            
            <TopAnime />
        </div>
    )
}

export default SideMenu;