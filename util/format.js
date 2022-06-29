export function formatPrice(price) {
    const formattedPrice = price.toLocaleString().replace(',', '.') + ',00';
    return formattedPrice;
}

export function capitalizeText(text) {
    const words = text.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    
    const joined = words.join(" ");

    return joined;
}