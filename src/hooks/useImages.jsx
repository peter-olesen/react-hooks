import { useState, useEffect } from "react"

export const useImages = () => {
    const [images, setImages] = useState([])

    useEffect(() => {
        const gallery = Object.values(import.meta.glob('/public/*', {eager: true, query: '?url', import: 'default'}));
        
        setImages(gallery);
    }, []);

    return images;
}
