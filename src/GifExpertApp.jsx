import { useState } from "react";
import { AddCategory,GifGrid } from "./components";


export const GifExpertApp = () => {
  const [categorias, setCategorias] = useState(["Mario Bros"]);

  const onAddCategory = (newCategory) => {
    if (categorias.includes(newCategory)) return;

    // console.log(newCategory);
    setCategorias([newCategory, ...categorias]);
  };

//   console.log(categorias);

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        // setCategories={setCategorias}
        onNewCategory={(value) => onAddCategory(value)}
      />

      {categorias.map((category) => (
        <GifGrid 
            key={category} 
            category={category} />
      ))}
    </>
  );
};
