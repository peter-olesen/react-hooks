import style from './Gallery.module.scss'
import { useImages } from '../../hooks/useImages'

export const Gallery = () => {
    const images = useImages();

    return (
        <div className={style.GalleryDiv}>
            {images.map((image, index) => (
                <img key={index} src={image} alt={index} />
            ))}
        </div>
    )
}