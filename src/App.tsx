import React, { useState } from 'react';
import Header from './components/Header/header';
import Main from './components/Main/main';

function App() {
  
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");

  const handleCategorySelect = (category: string, searchValue: string) => {
    setSelectedCategory(category);
    setSearchValue(searchValue);
  };

  

  return (
    <div>
      <Header onSelectCategory={handleCategorySelect} />
      <Main selectedCategory={selectedCategory} searchValue={searchValue} />
    </div>
  );
}

export default App;
