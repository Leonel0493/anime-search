import React from "react";

const AnimeImageList = ({ animeList }) => {
  return (
    <div class="grid grid-cols-3 gap-4">
      
      {
          animeList.map((an) => {
              return(
                <div class="flex-1 p-4">
                    <div class="block border border-orange-400 overflow-hidden border-2 h-full">
                        <div class="p-4">
                            <h2 class="mt-2 mb-2 font-bold text-2xl font-Headingg">
                            {an.title}
                            </h2>
                            <div class="mb-4 flex flex-wrap">
                                <img src={an.images.jpg.image_url} alt="" />
                            </div>
                
                            <p class="text-md text-justify">
                                {an.background}
                            </p>
                        </div>
                        <div class="p-4 flex flex-wrap items-center">
                            <p class="px-1 py-2 tracking-wide text-xs mr-2 mb-2">{an.type}</p>
                        </div>
                        <div class="p-4 flex flex-wrap items-center">
                            <button className="bg-orange-700 px-2 py-1 rounded-lg text-white">More Info</button>
                        </div>
                    </div>
                </div>
              )
          })
      }

      
    </div>
  );
};

export default AnimeImageList;
