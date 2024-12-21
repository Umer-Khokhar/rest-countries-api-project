import {useContext ,useState} from 'react';
import {images} from '../constants'
import { CountryProvider } from "./FetchContext.jsx";

const InputFilter = () => {

    const [isOpen ,setIsOpen] = useState(false);
    const [searchValue ,setSearchValue] = useState('');
    const filterRegions = ['Africa' ,'Americas' ,'Asia' ,'Europe' ,'Oceania']

    const { handleFilter, handleRegionChange }  = useContext(CountryProvider)

    const handleInput = (e) => {
        let value = e.target.value;
        setSearchValue(value);
        handleFilter(searchValue);

    }


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className="input-filter sm:flex md:items-center md:gap-2 gap-10 md:justify-between mt-8 flex-col md:flex-row">
            <form action="" className={'md:w-1/3 w-full shadow-lg'} onSubmit={(e) => e.preventDefault()}>
                <div className={"relative mb-7 sm:mb-0"}>
                    <img src={images.searchIcon} className={' absolute top-1/2 left-10 transform -translate-x-1/2 -translate-y-1/2'} alt="search-icon" width={18}/>
                    <input onChange={handleInput} value={searchValue} className={'dark:bg-navBg w-full text-gray-500 pl-20 pr-6 py-4 outline-none rounded'} type="text" id={'input'} placeholder={"Search for a country..."}/>
                </div>
            </form>
            <div className="filter-option relative dark:text-gray-50">
                <button className={'dark:bg-navBg flex items-center justify-between bg-white py-4 px-5 md:w-48 w-7/12 rounded-md mb-1 shadow-lg'} onClick={toggleDropdown}>Filter by region<img className={'dark:invert'} src={isOpen ? images.downArrow : images.rightArrow} alt="Arrow-images" width={15}/>
                </button>
                {isOpen && (
                    <ul className={'dark:bg-navBg absolute top-full left-0 right-0 bg-white rounded-md flex flex-col w-7/12 md:w-full mt-2 z-10 shadow-md'}>
                        {filterRegions.map((filterRegion ,index) => (
                            <li className={'cursor-pointer px-4 py-2 hover:bg-slate-100 hover:dark:bg-navBg'} onClick={() => {
                                handleRegionChange(filterRegion)
                                setIsOpen(!isOpen)
                            }
                            } key={index}>{filterRegion}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default InputFilter;