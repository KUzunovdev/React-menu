import React, { FC, useState, useEffect, useMemo } from "react";
import axios, { AxiosResponse } from "axios";

interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  category: string;
  price: number;
}

interface ElementProps {
  product: Product;
}

const Element: FC<ElementProps> = ({ product }) => {
  const modifiedImageUrl = product.image
  .replace('/file/d/', '/uc?export=view&id=')
  .replace('/view?usp=share_link', '');

    return (
      
      <div
      key={product.id}
      className="product-card flex flex-col items-center justify-between max-w-sm mx-auto my-4 bg-white rounded-xl shadow-md overflow-hidden h-px-400 w-full sm:w-full md:w-1/2">
      <div className="relative h-80 w-full overflow-hidden">
        <img
          src={modifiedImageUrl}
          alt={product.name}
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>
      <div className="p-8">
        <h2 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          {product.name}
        </h2>
        <p className="mt-2 text-gray-500">{product.description}</p>
        <p className="mt-2 text-gray-500">{product.category}</p>
        <p className="mt-2 text-gray-500">Цена: {product.price}лв</p>
      </div>
    </div>
      );
}

interface ResponseData {
  лист1: Product[];
}

const Main: FC<{  selectedCategory: string; searchValue?: string }> = ({ selectedCategory, searchValue }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    
    const url = "https://api.sheety.co/ce1cca23d60bb61427c34af4c28707ee/hookahCatering/лист1";
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
