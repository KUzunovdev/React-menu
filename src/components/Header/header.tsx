import React, { FC, useState } from "react";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { IconButton, Menu, MenuItem } from '@mui/material'; 

interface HeaderProps{
    onSelectCategory: (category: string, searchValue: string) => void;
}

const Header: FC<HeaderProps> = ({onSelectCategory}) => {

    const [selectedCategory, setSelectedCategory] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); 

    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category);
        onSelectCategory(category, searchValue);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchValue(value);
        onSelectCategory(selectedCategory, value);
    };

    const handleCartOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCartClose = () => {
        setAnchorEl(null);
    };

    const buttonClass = (category: string) => `
        items-center
        border
        rounded
        shadow-sm
        box-border
        inline-flex
        font-sans
        text-base
        font-semibold
        justify-center
        leading-5
        my-0
        h-12
        px-3
        relative
        no-underline
        transition-all
        duration-200
        select-none
        align-baseline
        w-auto
        mb-4
        ${selectedCategory === category ? 'bg-gray-800 text-white border-gray-400 shadow-lg' : 'bg-white text-gray-800 border-gray-300'}
        hover:border-gray-400
        hover:shadow-lg
        hover:bg-gray-800
        hover:text-white
    `;
  
    return (
        <div>
            <div className="flex justify-between items-center py-2 px-6 bg-blue-600 font-bold">
                Hookah menu

                <div className="flex items-center">
                    <div className="flex items-center rounded-full bg-gray-200 p-2 text-base">
                        <input 
                        type="text" 
                        className="border-none bg-transparent flex-grow mr-2 focus:ring-0 outline-none ml-4 sm: w-32 sm: p-1"
                        placeholder="Search..." 
                        value={searchValue}
                        onChange={handleSearchChange}
                        />

                        <div className="flex justify-center items-center bg-blue-600 rounded-full h-10 w-10">
                            <SearchRoundedIcon className="text-white text-xl sm:text-lg" />
                        </div>
                    </div>
                    <div className="ml-4 sm:ml-2">
                        <IconButton onClick={handleCartOpen}>
                            <ShoppingCartRoundedIcon className="text-white text-xl md: text-xl sm: text-lg" />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleCartClose}
                        >
                            <MenuItem onClick={handleCartClose}>Item 1</MenuItem>
                            <MenuItem onClick={handleCartClose}>Item 2</MenuItem>
                            
                        </Menu>
                    </div>
                </div>
            </div>

            <div className="flex justify-start pl-4 pt-4 gap-2 bg-gray-800 ">
                <button className={buttonClass("All")}
                onClick={() => handleCategorySelect("All")}>
                    All
                </button>
                <button className={buttonClass("Os")}
                onClick={() => handleCategorySelect("Os")}>
                    Os
                </button>
                <button className={buttonClass("Holster")}
                onClick={() => handleCategorySelect("Holster")}>
                    Holster
                </button>
                <button className={buttonClass("Darkside")} 
                onClick={() => handleCategorySelect("Darkside")}>
                    Darkside
                </button>
            </div>
        </div>
    );
}

export default Header;
