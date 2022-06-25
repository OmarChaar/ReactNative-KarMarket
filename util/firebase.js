import axios from 'axios';
import Vehicle from '../models/vehicle';
import Dealership from '../models/dealership';
import User from '../models/user';

const ROOT_URL = 'https://us-central1-karmarket-352901.cloudfunctions.net';

export async function fetchDealerships() {
    const response = await axios.get(ROOT_URL + '/dealerships/');

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
                dealership.hasFinancing,
                dealership.extra
            )
        );

    }
    return dealerships;
}

export async function fetchDealership(id) {
    const response = await axios.post(ROOT_URL + "/dealership/", {
        id: id
    });

    const result = response.data;

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
        result.hasFinancing,
        result.extra,
        result.vehicles
    );

    return dealership;
}

export async function fetchVehicles() {
    const response = await axios.get(ROOT_URL + '/vehicles');

    const vehicles = [];
    
    for(const vehicle of response.data) {
        vehicles.push(
            new Vehicle(
                vehicle.id,
                vehicle.type,
                vehicle.brand,
                vehicle.model,
                vehicle.version,
                vehicle.year,
                vehicle.color,
                vehicle.kilometerage,
                vehicle.transmission,
                vehicle.combustion,
                vehicle.doors,
                vehicle.finalLicensePlate,
                vehicle.specs,
                vehicle.extras,
                vehicle.documentation,
                vehicle.armored,
                vehicle.images,
                vehicle.price,
                vehicle.dealership,
            )
        );

    }
    return vehicles;
}

export async function fetchVehicle(id) {
    const response = await axios.post(ROOT_URL + "/vehicle/", {
        id: id
    });

    const result = response.data;

    const vehicle = new Vehicle(
        result.id,
        result.type,
        result.brand,
        result.model,
        result.version,
        result.year,
        result.color,
        result.kilometerage,
        result.transmission,
        result.combustion,
        result.doors,
        result.finalLicensePlate,
        result.specs,
        result.extras,
        result.documentation,
        result.armored,
        result.images,
        result.price,
        result.dealership,
    );
    return vehicle;
}

export async function fetchDealershipVehicles(id) {
    const response = await axios.post(ROOT_URL + "/dealershipVehicles/", {
        id: id
    });

    const vehicles = [];
    
    if(response.data.length > 0) {
        for(const vehicle of response.data) {
            vehicles.push(
                new Vehicle(
                    vehicle.id,
                    vehicle.type,
                    vehicle.brand,
                    vehicle.model,
                    vehicle.version,
                    vehicle.year,
                    vehicle.color,
                    vehicle.kilometerage,
                    vehicle.transmission,
                    vehicle.combustion,
                    vehicle.doors,
                    vehicle.finalLicensePlate,
                    vehicle.specs,
                    vehicle.extras,
                    vehicle.documentation,
                    vehicle.armored,
                    vehicle.images,
                    vehicle.price,
                    vehicle.dealership,
                )
            );

        }
    }
    
    return vehicles;
}

export async function addUser(uid, email) {
    await axios.post(ROOT_URL + "/addUser/", {
        uid: uid,
        email: email
    });

    return;
}

export async function getUserData(uid) {
    const response = await axios.post(ROOT_URL + "/getUser/", {
        uid: uid
    });

    const result = response.data;

    const user = new User(
        result.uid,
        result.email,
        result.displayName,
        (result.measurements ? result.measurements : 'KM'),
        (result.language ? result.language : 'en'),
        (result.notifications ? result.notifications : true)
    )

    return user;
}