import React from 'react'
import {NavLink} from 'react-router-dom'

const GalleryIndexItem = (props) =>{
    return(
        <li>
            <NavLink
                to = {`/index/${props.gallery.id}`}
                className={isActive =>
                    "nav-link" + (!isActive ? " unselected" : "")}
                galleries = {props}
                >
                {props.gallery.name}
            </NavLink>
            
        </li>
    )
}


export default GalleryIndexItem