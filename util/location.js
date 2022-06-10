
const GOOGLE_API_KEY = 'AIzaSyAQ5BHmb9EEM9LcX62Jr6QFJrjcTDXmVVs';

export function getMapPreview(lat, long) {
    const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=14&size=400x200&maptype=roadmap&markers=color:blue%7Clabel:S%7C${lat},${long}å&key=${GOOGLE_API_KEY}`;
    return imagePreviewUrl;
}