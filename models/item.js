export default class Item {
    constructor(title, image, address, location) {
        this.title = title;
        this.image = image;
        this.address = address;
        this.location = location; // { lat: xxxx, lng: xxxx }
        this.id = new Date().toString() + Math.random().toString();
    }
}