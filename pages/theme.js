import { useCurrentThem, useThemeToggle } from '@/contexts/ThemeContext';
import React, { useEffect } from 'react';

const Theme = () => {

    const { currentTheme } = useCurrentThem();
    const { toggleTheme } = useThemeToggle();
    console.log(currentTheme);

    const onThemeClick = () => {
        toggleTheme();
    };



    return (
        <div className={currentTheme === 'light' ? 'bg-black text-white' : ' bg-gray-500 text-black'}>
            This is theme route
            <button onClick={onThemeClick} className='bg-red-600 text-black'>toggle theme</button>
        </div>

    );
};

export default Theme;