/*
    *id: unique key, 
    *name: 'DEALERSHIP NAME',
    *image: 'ARRAY OF IMAGES OF DEALERSHIP',
    *address: 'HUMAN READ-ABLE ADDRESS'
    *location: 'LAT & LNG OF DEALERSHIP',
    *phone: 'DEALERSHIP PHONE NUMBER'
    website: 'DEALERSHIP WEBSITE'
    email: 'DEALERSHIP EMAIL',
    *operationalHours: '{ Monday: 8:00-16:00, Tuesday: 8:00-16:00, etc... }'
    *hasFinancing: 'true, false',
    extra: 'FURTHER DETAILS ADDED BY THE DEALERSHIP'
*/
export default class Dealership {
    constructor(id, name, images, address, location, phone, website, email, operationalHours, hasFinancing, extra) {
        this.id = id;
        this.name = name;
        this.images = images;
        this.address = address;
        this.location = { lat: location.lat, lng: location.lng };
        this.phone = phone;
        this.website = website;
        this.email = email;
        this.operationalHours = operationalHours;
        this.hasFinancing = hasFinancing;
        this.extra = extra;
    }
}