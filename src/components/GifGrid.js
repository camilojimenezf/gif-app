import React from 'react'
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <div>
            <h3>{category}</h3>
            {loading ? <p>'Cargando...'</p> : (
                <div className="card-grid">
                    {
                        images.map(img => (
                            <GifGridItem key={img.id} {...img} />
                        ))
                    }
                </div>
            )}
        </div>
    )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
