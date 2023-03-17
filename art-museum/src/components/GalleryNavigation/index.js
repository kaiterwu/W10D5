import React from 'react'
import {NavLink} from 'react-router-dom';
import GalleryIndexItem from '../GalleryIndexItem';


const GalleryNavigation = (props) =>{
    const galleryItems = Object.values(props.galleries)

    const galleryList = galleryItems.map((gallery)=>{
        return <GalleryIndexItem key = {gallery.id} gallery = {gallery}/>
    })
    return(
        <>
        <nav>
        <h1>Galleries </h1>
        <NavLink
            to="/"
            className={isActive =>
            "nav-link" + (!isActive ? " unselected" : "")} >
            Home
        </NavLink>
    </nav>
    <ul>
        {galleryList}
    </ul>
    </>
    )
}
export default GalleryNavigation