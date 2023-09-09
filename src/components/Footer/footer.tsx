import React, { FC } from "react";

const Footer: FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="flex items-center justify-center h-16 bg-blue-600 text-white">
            <p>© {year} Hookah Menu. All rights reserved.</p>
        </footer>
    );
}

export default Footer;


