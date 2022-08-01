import { useState } from "react";
// import {AddCategory} from './components/AddCategory'//forma antigua de importar
// import { GifGrid } from "./components/GifGrid";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    //no poner hook condicionalmente
    const [categories, setCategories] = useState(['One Punch Man']);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories(categories => [newCategory, ...categories]);
    }

    return(
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={newCategory => onAddCategory(newCategory)}/>
            
            {/* NO es recomendable usar el indice como una key para los li */}
            {categories.map(category => {
                return (
                    <GifGrid key={category} category={category}/>
                );
            })}

        </>
    );
}