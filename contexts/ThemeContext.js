const { createContext, useState, useContext } = require("react");

const ThemeContext = createContext({
    'currenttheme': 'light',
    toggleTheme: () => { }
});

const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("Theme doesn't exisit")
    }
    return context;
}

export const useCurrentThem = () => {
    const { currentTheme } = useTheme();
    return {
        currentTheme
    }
}

export const useThemeToggle = () => {
    const { toggleTheme } = useTheme();
    return {
        toggleTheme
    }
}

export const ThemeProvider = ({ children }) => {

    const [currentTheme, setCurrentTheme] = useState('light');
    const toggleTheme = () => {
        if (currentTheme === 'light') setCurrentTheme('dark')
        else if (currentTheme === 'dark') setCurrentTheme('light')
        else setCurrentTheme('light')
    }

    const value = {
        currentTheme,
        toggleTheme
    }
    return (<ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>);
}