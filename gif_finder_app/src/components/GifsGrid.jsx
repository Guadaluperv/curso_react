import React, { useEffect, useState } from 'react';
import GifsGridItem from "./GifsGridItem";

export const GifsGrid = ({categoria}) => {
    
    const [imagenes, setImagenes] = useState([]);
    useEffect(() => {
        getGifs();
         }, []);
    
    const getGifs = async () => {
        const api_key= "IHakn1DrZi5OrV5bh77GPCe0G6DCQHYg";
        const url =`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${categoria}&limit=10`;
       const resp = await fetch(url); 
       const { data } = await resp.json();


      const gifs = data.map((gif) => {
          return {
              id: gif.id, 
              title: gif.title,
              url: gif.images.downsized_medium.url,
          };
      });
       setImagenes(gifs);
    };
    
    //getGifs();
    
    return (
        <>
        <h3>{categoria}</h3>
        <div className = "card-grid">
                {imagenes.map((imagen) => {
                return <GifsGridItem key={imagen.id} imagen={imagen} />;
            })}
        </div>
        </>
    );
};

export default GifsGrid;
