import React from 'react'

export const ThemeContext = React.createContext();

function DataProvider({ children }) {
    const [data, setData] = React.useState({})

    return (
        <ThemeContext.Provider value={{ data: data, setData }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default DataProvider;