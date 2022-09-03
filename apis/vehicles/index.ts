import Vehicle from "../../types/vehicle.types";
import { FIREBASE_ROOT_URL } from "../config";

export async function fetchVehicles() {
    const {data: vehicles} = await FIREBASE_ROOT_URL.get<{vehicles: Vehicle.VehicleData[]}>('/vehicles');

    return vehicles;
}

export async function fetchVehicle(vehicleId: string) {
    const {
        data: vehicle
    } = await FIREBASE_ROOT_URL.get<{vehicle: Vehicle.VehicleData}>(`/vehicle/${vehicleId}`);

    return vehicle;
}

export async function fetchDealershipVehicles(dealershipId: string) {
    // TODO: change route to GET dealership/:dealershipId/vehicles
    const {
        data: vehicles
    } = await FIREBASE_ROOT_URL.get<{vehicles: Vehicle.VehicleData[]}>(`/dealershipVehicles/${dealershipId}`);
    
    return vehicles;
}