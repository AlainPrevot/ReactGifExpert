import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false)
    }


    useEffect(() => { 
        
        getImages();

    }, [ ])//Al no pasarle valor al useEffect logramos que solo se ejecute al crear el componente

  return {
    images,
    isLoading
  }
}
