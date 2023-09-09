import React, { FC, useState, useEffect, useMemo } from "react";
import axios from "axios";


interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  category: string;
  price: number;
  inStock: boolean;

}

interface ElementProps {
  product: Product;
}

const Element: FC<ElementProps> = ({ product }) => {
  const [isSelected, setIsSelected] = useState(false);
  const modifiedImageUrl = product.image
  .replace('/file/d/', '/uc?export=view&id=')
  .replace('/view?usp=share_link', '');

  if(!product.inStock){
    return null;
  }

  const handleSelect = () => {
    setIsSelected(!isSelected);
  }

    return (
      
      <div
      key={product.id}
      onClick={handleSelect}
      className={`product-card flex flex-col items-center justify-between relative max-w-sm mx-auto my-4 bg-white rounded-xl shadow-md overflow-hidden h-px-300 sm:h-px-350 w-4/5 sm:w-3/4 md:w-1/2 ${isSelected ? 'border-blue-500 border-2' : ''} transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg`}>
      <div className="relative h-60 sm:h-70 w-full overflow-hidden">
        <img
          src={modifiedImageUrl}
          alt={product.name}
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>
      <div className="p-4 sm:p-6 text-left">
        <h2 className="uppercase tracking-wide text-xs sm:text-sm text-indigo-500 font-semibold">
          {product.name}
        </h2>
        <p className="mt-2 text-gray-500">{product.description}</p>
        <p className="mt-2 text-gray-500">{product.category}</p>
        <p className="mt-2 text-gray-500">Цена: {product.price}лв</p>
      </div>
      {isSelected && (
       <button 
       className="absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
       onClick={(e) => {
         e.stopPropagation(); 
         console.log('Add to cart');
       }}
     >
       Add to Cart
     </button>
      )}
    </div>
      );
}

interface ResponseData {
  лист1: Product[];
}

interface MainProps {
  selectedCategory: string;
  searchValue?: string;
}

const Main: FC<MainProps>  = ({ selectedCategory, searchValue }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    
    const url = `https://api.sheety.co/${process.env.REACT_APP_SHEETY_API_KEY}/hookahCatering/лист1`;
    axios.get<ResponseData>(url)
      .then(response => {
        
        setProducts(response.data.лист1);
      })
      .catch(error => console.error(`Error: ${error}`));
  }, []);

  
  const filteredProducts = useMemo(() => {
    let filtered = selectedCategory && selectedCategory !== "All"
  ? products.filter(
      product =>
        product.category.toLowerCase().trim() ===
        selectedCategory.toLowerCase().trim()
    )
  : products;

  if(searchValue) {
    filtered = filtered.filter(
      product =>
      product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      product.description.toLowerCase().includes(searchValue.toLowerCase())
    );
  }
    return filtered;
}, [products,selectedCategory,searchValue] );

  return (
    <div className="flex flex-wrap justify-center h-full">
        {filteredProducts.map(product => (
          <Element key={product.id} product={product} />
        ))}
    </div>
  );
}

export default Main;
