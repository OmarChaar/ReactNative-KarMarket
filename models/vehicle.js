/*
    id: unique key,
    type: 'SUV, Sedan, 4x4, Coupe, Hatchback, Compact, Van, Convertible, Buggy, Pickup, Sports',
    brand: 'BMW, Ford, Nissan, Audi'
    model: 'X5, Fusion, X-Trail, A3, etc...',
    version: 'M-Series, AMG, TFSI, etc...',
    year: '2015, 2020-2021, etc...'
    color: 'Black, White, Navy Blue, etc...'
    kilometerage: '544,000 KM, etc...'
    transmission: 'Automatic, Manual, CVT, Semi-Automatic'
    combustion: 'Diesel, Gasoline, Gasoline & Electric, Gasoline & Natural Gas, Gasoline & Alcohol, Alcohol, Electric',
    doors: '2, 4'
    finalLicensePlate: '0, 1, 2, 3, 4, 5, 6, 7, 8, 9'
    specs: 'Airbag, Alarm, Air-condition, Leather Seats, CD Player, Sun-roof, Navigation System, DVD Player, GPS, Radio, Reverse Sensors, etc...',
    extras: 'EXTRA INFO FILLED OUT BY DEALERSHIP',
    documentation: 'UPLOADED BY DEALERSHIP',
    armored: 'true, false',
    images: 'front, back, leftSide, rightSide, top, interiorOne, interiorTwo, trunk, engine',
    price: 'FILLED BY DEALERSHIP',
    dealership: 'DEALERSHIP ID'
*/
export default class Vehicle {
    constructor(id, type, brand, model, version, year, color, kilometerage, transmission, combustion, doors, finalLicensePlate, specs, extras, documentation, armored, images, price, dealership) {
        this.id = id;
        this.type = type;
        this.brand = brand;
        this.model = model;
        this.version = version;
        this.year = year;
        this.color = color;
        this.kilometerage = kilometerage;
        this.transmission = transmission;
        this.combustion = combustion;
        this.doors = doors;
        this.finalLicensePlate = finalLicensePlate;
        this.specs = specs;
        this.extras = extras;
        this.documentation = documentation;
        this.armored = armored;
        this.images = images;
        this.price = price;
        this.dealership = dealership;
    }
}