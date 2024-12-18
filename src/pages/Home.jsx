import { useEffect ,useState } from 'react';
import { DynamicCard ,FetchFromData ,InputFilter } from '../components'

const Home = () => {
    const [cards ,setCards] = useState([]);
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

    useEffect(() => {
        FetchFromData("api_data/data.json")
            .then(data => {
                setCards(data)
                setFilteredCards(data)
            })
            .catch(error => {
                console.log(error.message);
            })
    } ,[])

    return (
        <div className="Home md:px-12 px-6">
            <InputFilter handleFilter={handleFilter} handleRegionChange={handleRegionChange}/>
            < DynamicCard cards={cards} filteredCards={filteredCards} regionFilter={regionFilter}/>
        </div>
    );
};

export default Home;