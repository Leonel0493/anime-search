import React, { useEffect, useState } from 'react'
import animeAPI from '../../api/animeAPI';
import MiniCard from '../../components/MiniCard/MiniCard';

const TopAnime = () => {
    const [topAnime, setTopAnime] = useState([]);

    useEffect(() => {
        async function GetTopAnimes() {
            const resp = await animeAPI.get('/top/anime', {
                params: {limit: 5, filter: "bypopularity"}
            })
    
            setTopAnime(resp.data.data);
        }

        GetTopAnimes();

        console.log(topAnime)
    }, [])

    return(
        <>
            {
                topAnime.map((anime) => {
                    return(
                        <MiniCard minicardText={anime.title} animeKey={anime.mal_id} />
                    )
                })
            }
        </>
    )

}

export default TopAnime;