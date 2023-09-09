import React, { useState } from 'react';
import Header from './components/Header/header';
import Main from './components/Main/main';
import Footer from './components/Footer/footer';


function App() {
  
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");

  const handleCategorySelect = (category: string, searchValue: string) => {
    setSelectedCategory(category);
    setSearchValue(searchValue);
  };

  

  return (
    <div className="flex flex-col min-h-screen">
    <Header onSelectCategory={handleCategorySelect} />
    <div className='flex-grow items-center justify-center '>
    <Main selectedCategory={selectedCategory} searchValue={searchValue} />
    </div>
    <Footer/>
  </div>
  );
}

export default App;
