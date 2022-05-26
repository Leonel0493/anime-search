import React from 'react'
import SideMenu from '../SideMenu/SideMenu';
import AnimeSearch from '../../Features/AnimeSearch/AnimeSearch'

const Container = () => {
    return(
        <div className="container mx-auto flex flex-row">
            <SideMenu />
            <AnimeSearch />
        </div>
    )
}

export default Container;