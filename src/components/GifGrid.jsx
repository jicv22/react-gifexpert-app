import { useEffect, useState } from "react";
// import { getGifs } from "../helpers/getGifs";
import useFetchGifs from "../hooks/useFetchGifs";
import { GridImage } from "./GridImage";

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);
    
    console.log(images, isLoading);
    //IMPORTANTE: NUNCA colocar o ejecutar funciones directamente en un functional component poque esa funcion se ejecutara una y otra y otra vez
    // const [images, setImages] = useState([]);
    
    // const getImages = async() => {
    //     const newImages = await getGifs(category, 5);
    //     setImages(newImages);
    // };

    // useEffect(() => {
    //     getImages();
    // }, []);//<-estas llavesitas son las dependencias del useEffect. Si esta vacias el hook se ejecuta solo la primera vez

    // console.log(getGifs(category));

    return (
        <>
            <h3>{category}</h3>
            {/* Terniario pishuo xd */}
            {isLoading && <h2>Cargando...</h2>}
            <div>
                {images.map((image) => (
                    // ESto es un comando spread{...objeto} y sirve para mandar por parametro todas las propiedades del objeto sin necesidad de hacerlos uno por uno
                    <GridImage key={image.id} {...image}/>
                ))}
            </div>
        </>
    );
}

//los useEffect son para ejecutar efectos secundarios(funciones) cuando algo especificado cambie.