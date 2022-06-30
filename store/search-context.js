import { useEffect } from "react";
import { createContext, useState } from "react";

export const SearchContext = createContext({
    KM: null,
    Price: null,
    Year: null,
    Brand: null,
    Transmission: null,
    Combustion: null,
    setKM: () => {},
    setPrice: () => {},
    setYear: () => {},
    setBrand: () => {},
    setTransmission: () => {},
    setCombustion: () => {}
});

function SearchContextProvider({ children }) {

    const [KM, setKMHandler] = useState(null);

    function setKM(obj) {
        setKMHandler(obj);
    }

    const [Price, setPriceHandler] = useState();

    function setPrice(obj) {
        setPriceHandler(obj);
    }

    const [Year, setYearHandler] = useState();

    function setYear(obj) {
        setYearHandler(obj);
    }

    const [Brand, setBrandHandler] = useState();

    function setBrand(obj) {
        setBrandHandler(obj);
    }

    const [Transmission, setTransmissionHandler] = useState();

    function setTransmission(obj) {
        setTransmissionHandler(obj);
    }

    const [Combustion, setCombustionHandler] = useState();

    function setCombustion(obj) {
        setCombustionHandler(obj);
    }

    const value = {
        KM: KM,
        Price: Price,
        Year: Year,
        Brand: Brand,
        Transmission: Transmission,
        Combustion: Combustion,
        setKM: setKM,
        setPrice: setPrice,
        setYear: setYear,
        setBrand: setBrand,
        setTransmission: setTransmission,
        setCombustion: setCombustion
    }

    return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
}

export default SearchContextProvider;