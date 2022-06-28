import { useEffect } from "react";
import { createContext, useState } from "react";

export const SearchContext = createContext({
    KM: {},
    Price: {},
    Year: {},
    setKM: () => {},
    setPrice: () => {},
    setYear: () => {}
});

function SearchContextProvider({ children }) {

    const [KM, setKMHandler] = useState({});

    function setKM(obj) {
        setKMHandler(obj);
    }

    const [Price, setPriceHandler] = useState({});

    function setPrice(obj) {
        setPriceHandler(obj);
    }

    const [Year, setYearHandler] = useState({});

    function setYear(obj) {
        setYearHandler(obj);
    }

    const value = {
        KM: KM,
        Price: Price,
        Year: Year,
        setKM: setKM,
        setPrice: setPrice,
        setYear: setYear
    }

    return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
}

export default SearchContextProvider;