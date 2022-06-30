import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

    //hook
    const { images, isLoading } = useFetchGifs( category );
    
    return (
        <>  
            <h3>{ category }</h3>
            {/* mensaje de loading ...
                - si isLoading es true, ejecutara la segunda parte
                de la instruccion, pero si es false ya no hace las demas
                evaluaciones */}
            {
                isLoading && ( <h2> Loading ... </h2>)
            }
            {/* listado con las imagenes */}
            <div className="card-grid">
                {
                    images.map(( image ) => (
                        <GifItem 
                            key={ image.id }
                            // mandar titulo y url
                            //se esparcen las propiedas de image
                            { ...image }
                            
                        />
                    ))
                }
            </div>
            
        </>
    )
} 
