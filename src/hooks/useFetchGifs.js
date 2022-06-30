//un hook no es mas que una funcion que retorna algo

import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category) => {
    
    const [images, setImages] = useState([]);
    //manejar loading, primera vez carga en true
    const [ isLoading, setIsLoading ] = useState( true )

    /* useEffect se usa para disparar efectos secundario
    por ejemplo se quiere disparar un efecto cuando category cambie */

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        //cuando deja de cargar se llama en false
        setIsLoading(false);
    }

    useEffect( () => {
        getImages(); 
    }, [])
    //si el array esta vacio entonces solo se dispara la primera 
    //vez que se crea el componente


    return {
        images,
        isLoading
    }
}
