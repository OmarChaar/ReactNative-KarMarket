
const GOOGLE_API_KEY = 'AIzaSyAQ5BHmb9EEM9LcX62Jr6QFJrjcTDXmVVs';

export function getMapPreview(lat, lng) {
    const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:blue%7Clabel:S%7C${lat},${lng}å&key=${GOOGLE_API_KEY}`;
    return imagePreviewUrl;
}

export async function getReadableAddress(lat, lng) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`;

    const response = await fetch(url);

    if(!response.ok) {
        throw new Error('Failed to fetch address');
    }
    
    const data = await response.json();
    const address = data.results[0].formatted_address;

    return address;
}