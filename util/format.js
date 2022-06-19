export function formatPrice(price) {
    const formattedPrice = price.toLocaleString().replace(',', '.') + ',00';
    return formattedPrice;
}