import React, { FC, useState } from "react";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

interface HeaderProps{
    onSelectCategory: (category: string, searchValue: string) => void;
}

const Header: FC<HeaderProps> = ({onSelectCategory}) => {

    const [selectedCategory, setSelectedCategory] = useState("");
    const [searchValue, setSearchValue] = useState("");

    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category);
        onSelectCategory(category, searchValue);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchValue(value);
        onSelectCategory(selectedCategory, value);
    };
  

    return (
        <div>
            <div className="flex justify-between items-center py-2 px-6 bg-blue-600 font-bold">
                Hookah menu

                <div className="flex items-center rounded-full bg-gray-200 p-2 text-base">
                    <input type="text" 
                    className="border-none bg-transparent flex-grow mr-2"
                    placeholder="Search..." 
                    value={searchValue}
                    onChange={handleSearchChange}
                    />
                    <div className="flex justify-center items-center bg-blue-600 rounded-full h-10 w-10">
                        <SearchRoundedIcon className="text-white text-xl" />
                    </div>
                </div>
            </div>

            <div className="flex justify-start pl-4 pt-4 gap-2 bg-gray-800 ">
                <button className="items-center bg-white border border-gray-300 rounded shadow-sm box-border text-gray-800 inline-flex font-sans text-base font-semibold justify-center leading-5 my-0 h-12 px-3 relative no-underline transition-all duration-200 select-none align-baseline w-auto hover:border-gray-400 hover:shadow-lg hover:bg-gray-800 hover:text-white mb-4"
                onClick={() => handleCategorySelect("All")}>
                    All
                </button>
                <button className="items-center bg-white border border-gray-300 rounded shadow-sm box-border text-gray-800 inline-flex font-sans text-base font-semibold justify-center leading-5 my-0 h-12 px-3 relative no-underline transition-all duration-200 select-none align-baseline w-auto hover:border-gray-400 hover:shadow-lg hover:bg-gray-800 hover:text-white mb-4"
                onClick={() => handleCategorySelect("Os")}>
                    Os
                </button>
                <button className="items-center bg-white border border-gray-300 rounded shadow-sm box-border text-gray-800 inline-flex font-sans text-base font-semibold justify-center leading-5 my-0 h-12 px-3 relative no-underline transition-all duration-200 select-none align-baseline w-auto hover:border-gray-400 hover:shadow-lg hover:bg-gray-800 hover:text-white mb-4"
                onClick={() => handleCategorySelect("Holster")}>
                    Holster
                </button>
                <button className="items-center bg-white border border-gray-300 rounded shadow-sm box-border text-gray-800 inline-flex font-sans text-base font-semibold justify-center leading-5 my-0 h-12 px-3 relative no-underline transition-all duration-200 select-none align-baseline w-auto hover:border-gray-400 hover:shadow-lg hover:bg-gray-800 hover:text-white mb-4"
                onClick={() => handleCategorySelect("Darkside")}>
                    Darkside
                </button>
            </div>
        </div>
    );
}

export default Header;
