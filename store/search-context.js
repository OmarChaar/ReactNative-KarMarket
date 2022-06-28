import { createContext, useState } from "react";

export const SearchContext = createContext({
    KM: null,
    setKM: () => {},
});

function SearchContextProvider({ children }) {

    const [KM, setKM] = useState({});

    function setKMHandler(value) {
        setKM(value);
    }

    const value = {
        KM: KM,
        setKM: setKMHandler
    }

    return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
}

export default SearchContextProvider;