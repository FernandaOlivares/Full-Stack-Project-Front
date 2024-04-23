export function formatPrice(price) {
    let formattedPrice = String(price).split('').reverse().join('').replace(/(\d{3})/g, '$1.').split('').reverse().join('');
    // Eliminar el punto adicional al principio si existe
    if (formattedPrice.charAt(0) === '.') {
        formattedPrice = formattedPrice.slice(1);
    }
    formattedPrice = `$ ${formattedPrice}`;
    return formattedPrice;
}
