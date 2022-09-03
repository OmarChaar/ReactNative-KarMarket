import Vehicle from './vehicle.types';

export namespace Dealership {

    export type Location = {
        lat: number;
        lng: number;
    }

    export type OperationalHours = {
        monday: string;
        tuesday: string;
        wednesday: string;
        thursday: string;
        friday: string;
        saturday: string;
        sunday: string;
    }

    export interface DealershipData {
        id: string;
        name: string;
        images: string[];
        address: string;
        location: Location;
        phone: string;
        website: string;
        email: string;
        operationalHours: OperationalHours;
        hasFinancing: boolean;
        extra: string;
        vehicles: Vehicle.VehicleData[];
    }
}

export default Dealership;