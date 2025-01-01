import {useEffect, useState, createContext} from 'react';
import {FetchFromData} from "./index.js";


// eslint-disable-next-line react-refresh/only-export-components
export const CountryProvider = createContext()

// eslint-disable-next-line react/prop-types
export const FetchContext = ({ children }) => {
    const [cards, setCards] = useState([])
    const [filteredCards ,setFilteredCards] = useState([]);
    const [regionFilter ,setRegionFilter] = useState('');

    const handleFilter = (searchValue) => {

        const filtered = cards.filter((card) =>
            card.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        return setFilteredCards(filtered);
    };

    const handleRegionChange = (region) => {
        setRegionFilter(region)
    }

    const resetFilters = () => {
        setFilteredCards(cards); // Reset to all cards
        setRegionFilter('');    // Clear region filter
    };

    useEffect(() => {
        FetchFromData("/api_data/data.json")
            .then(data => {
                setCards(data || [])
                setFilteredCards(data || [])
            })
            .catch(error => {
                console.log(error.message);
            })
    } ,[])
    return (
        <CountryProvider.Provider value={{ cards, setCards,  filteredCards, handleFilter, regionFilter, handleRegionChange, resetFilters }}>
            {children}
        </CountryProvider.Provider>
    );
};