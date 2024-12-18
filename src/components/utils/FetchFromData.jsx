import axios from 'axios';

const FetchFromData = async (url) => {
    const { data } = await axios.get(url);
    return data;
}

export default FetchFromData;