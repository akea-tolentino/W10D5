import { NavLink } from "react-router-dom";
import '../GalleryNavigation/GalleryNavigation.css'

const GalleryNavigation = ({galleries}) => {
    console.log(galleries);
    return galleries.map(gallery => {
        return(
            <nav>
                <NavLink to={`/galleries/${gallery.id}`}>
                    <h1>{gallery.name}</h1>
                </NavLink>
             </nav>
    )
        })
}

export default GalleryNavigation;