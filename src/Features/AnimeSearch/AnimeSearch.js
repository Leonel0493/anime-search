import React, { useEffect, useState } from 'react'
import animeAPI from '../../api/animeAPI';
import AnimeImageList from '../../components/AnimeResults/AnimeImageList';
import SearchBar from '../../components/SearchBar/SearchBar';

const AnimeSearch = () => {
    const [animeResults, setAnimeResults] = useState([]);
    const [search, setSearch] = useState("");

    const onSearchSubmit = (searchText) => {
        setSearch(searchText);
    }

    useEffect(() => {
        async function GetAnimeList(){
            const resp = await animeAPI.get('/anime',{
                params: {q: search, limit: 25, rating: "pg13"}
            });

            setAnimeResults(resp.data.data);
        }

        if(search){
            GetAnimeList();
        }
    }, [search])

    return(
        <div className="w-3/4 h-full py-3">
            <SearchBar onSubmit={onSearchSubmit} />
            <AnimeImageList animeList={animeResults} />
        </div>
    )
}

export default AnimeSearch;