import React from 'react';

export const GifsGridItem = ({ imagen }) => {
    return (
        <div clasName="card">
            <img scr={ imagen.url} alt={ imagen.title } />
            <p>{ imagen.title }</p>
        </div>
    );
};

export default GifsGridItem; 
