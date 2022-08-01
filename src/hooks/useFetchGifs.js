import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

//la extension puede ser js o jsx dependiendo de lo que devuelva
export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState([]);
    
    const getImages = async() => {
        const newImages = await getGifs(category, 5);
        setImages(newImages);
        setIsLoading(false);
    };

    useEffect(() => {
        getImages();
    }, []);//<-estas llavesitas son las dependencias del useEffect. Si esta vacias el hook se ejecuta solo la primera vez


    return {
        images,
        isLoading
    }
}

export default useFetchGifs
