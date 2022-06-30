//aca creamos el input para agregar categorias
//y asi solo lo exportamos

import { useState } from "react";

//Agregar nueva categoria, llamar el onNewCategory
export const AddCategory = ({ onNewCategory }) => {
    
    //se necesita manejar el estado conforme a la persona escriba necesito tener sus valores
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = (event) => {
        //evitar que se haga el refresh del navegador
        event.preventDefault();

        //validacion para que no sea vacio
        //trim quita los espacios en blanco
        if( inputValue.trim().length <= 1) return;

         //usar aca el onNewCategory
         onNewCategory( inputValue.trim() );
        
        //limpiar la caja de texto
        setInputValue('');
    }
    
    return (
        <form onSubmit={ onSubmit }>
            {/* capturar informacion */}
            <input 
                type="text"
                //placeholder es el texto dentro del input
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
