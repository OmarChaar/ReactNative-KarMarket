/*
    *id: unique key, 
    *name: 'DEALERSHIP NAME',
    *image: 'ARRAY OF IMAGES OF DEALERSHIP',
    *address: 'HUMAN READ-ABLE ADDRESS'
    *location: 'LAT & LNG OF DEALERSHIP',
    *phone: 'DEALERSHIP PHONE NUMBER'
    website: 'DEALERSHIP WEBSITE'
    email: 'DEALERSHIP EMAIL',
    *hasFinancing: 'true, false'
*/
export default class Dealership {
    constructor(id, name, image, location, phone, website, email, hasFinancing) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.address = location.address;
        this.location = { lat: location.lat, lng: location.lng };
        this.phone = phone;
        this.website = website;
        this.email = email;
        this.hasFinancing = hasFinancing;
    }
}