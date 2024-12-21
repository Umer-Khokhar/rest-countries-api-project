import { useEffect ,useState, useContext } from 'react';
import { DynamicCard ,FetchFromData ,InputFilter, CountryProvider } from '../components'

const Home = () => {

    return (
        <div className="Home md:px-12 px-6">
            <InputFilter/>
            < DynamicCard/>
        </div>
    );
};

export default Home;