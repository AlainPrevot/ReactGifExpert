import {useState} from 'react'
import { AddCategory, GifGrid } from './Components'//Cree un archivo de barril en el index

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])
    
    const onAddCategory = (NewCategory) =>{
        if ( categories.includes(NewCategory) ) return
        setCategories([NewCategory, ...categories])
    }
  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory
            onNewCategory={(event) => onAddCategory(event)} 
        />

        {/* escribir el nombre de la funcion (Abajo) es lo mismo que pasar el evento como propieda (arriba) */}

        { 
            categories.map( (category) => (
                <GifGrid key={category} category={category}/>
            )) 
        }

    </>
  )
}


