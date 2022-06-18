import axios from 'axios';
import Dealership from '../models/dealership';

const ROOT_URL = 'https://us-central1-karmarket-352901.cloudfunctions.net';

export async function fetchDealerships() {
    const response = await axios.get(ROOT_URL + '/dealerships');

    const dealerships = [];
    
    for(const dealership of response.data) {
        dealerships.push(
            new Dealership(
                dealership.id,
                dealership.name,
                dealership.images,
                dealership.address,
                { lat: dealership.location._latitude, lng: dealership.location._longitude },
                dealership.phone,
                dealership.website,
                dealership.email,
                dealership.operationalHours,
                dealership.hasFinancing
            )
        );

    }
    return dealerships;
}

export async function fetchDealership(id) {
    const response = await axios.post(ROOT_URL + "/dealership/", {
        id: id
    });

    const result = response.data

    const dealership = new Dealership(
        result.id,
        result.name,
        result.images,
        result.address,
        { lat: result.location._latitude, lng: result.location._longitude },
        result.phone,
        result.website,
        result.email,
        result.operationalHours,
        result.hasFinancing
    );

   

    return dealership;
}