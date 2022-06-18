import axios from 'axios';

const ROOT_URL = 'https://us-central1-karmarket-352901.cloudfunctions.net';

export async function fetchDealerships() {
    const response = await axios.get(ROOT_URL + '/dealerships');

    return response.data;
}