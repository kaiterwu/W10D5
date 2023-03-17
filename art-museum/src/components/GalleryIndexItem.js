import React from 'react'
import {Link} from 'react-router-dom'

const GalleryIndexItem = (props) =>{
    return(
        <li>
            <Link
                to = {`/index/${props.gallery.id}`}
                className ='gallery-item'
                galleries = {props}
                >
                {props.gallery.name}
            </Link>
            
        </li>
    )
}


export default GalleryIndexItem