export namespace Vehicle {

    export type VehicleImages = {
        front?: string;
        back?: string,
        leftSide?: string;
        rightSide?: string;
        top?: string;
        interiorOne?: string;
        interiorTwo?: string;
        trunk?: string;
        engine?: string;
    }

    export interface VehicleData {
        id: string;
        type: string;
        brand: string;
        model: string;
        version: string;
        year: number;
        color: string;
        kilometerage: string;
        transmission: string;
        combustion: string;
        doors: number;
        finalLicensePlate: string;
        specs: string;
        extras: string;
        documentation: string;
        armored: boolean;
        images: VehicleImages;
        price: string;
        dealership: string;
    }
}

export default Vehicle;