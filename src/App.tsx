import React, { useState } from 'react';
import Header from './components/Header/header';
import Main from './components/Main/main';

function App() {
  
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };


  return (
    <div>
      <Header onSelectCategory={handleCategorySelect} />
      <Main selectedCategory={selectedCategory} />

    </div>
  );
}

export default App;
