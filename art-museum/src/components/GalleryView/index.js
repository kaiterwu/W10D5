// import React from "react";
import {useParams} from 'react-router-dom'
import harvardArt from "../../data/harvardArt";

const GalleryView = ({galleries}) => {
    const {galleryId} = useParams();
    const gallery = galleries.find(((gallery) =>{
       return gallery.id === parseInt(galleryId)
    }))
    return(

        
        <h1>{gallery.name}</h1>
        
    )
}

export default GalleryView