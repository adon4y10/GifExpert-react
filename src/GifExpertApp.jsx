import { useState } from "react";
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    //almacenar informacion que cambiara el html
    //inicializarlo con un valor
    const [ categories, setCategories ] = useState([ 'One Punch', 'One Piece' ]);

    //agregar nueva categoria
    const onAddCategory = ( newCategory ) => {
        //validacion para no ingresar dos veces una categoria
        //si la categoria existe no hace nada( se verifica con el includes )
        //pero si no existe entonces pasa al setCategories y la crea
        if ( categories.includes(newCategory) ) return;


        //hace una copia de categories con el ... y agrega el nuevo campo
        setCategories([ newCategory, ...categories ]);

    }

    return (
    <>
        {/* TITULO */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
            // setCategories={ setCategories } 
                onNewCategory={ (value) => onAddCategory(value) }
            
            /> 

        {/* Listado de Gif */}
        

        {/* para listar las categorias */}
        { 
            categories.map( ( category ) =>(
                <GifGrid 
                    key={ category }
                    category={ category }
                />
            ))
        }
     
        {/* Gif Item */}

    </>
  )
}
