import Dealership from "../../types/dealership.types";
import { FIREBASE_ROOT_URL } from "../config";

export async function fetchDealerships() {

    const {
        data: dealerships
    } = await FIREBASE_ROOT_URL.get<{dealerships:  Dealership.DealershipData[]}>('/dealerships/');

    return dealerships;
}

export async function fetchDealership(id: string) {

    const {
        data: dealership
    } = await FIREBASE_ROOT_URL.get<{dealership: Dealership.DealershipData}>(`/dealership/${id}`);

    return dealership;
}