import { useParams } from "react-router-dom";

const GalleryView = ({galleries}) => {
    const {galleryId} = useParams();
    const gal = galleries.find(gallery => {
        if (gallery.id === parseInt(galleryId)) {
            return gallery
        }
    })
      return (  
        <h2>{gal.name}</h2>
    )
}

export default GalleryView;