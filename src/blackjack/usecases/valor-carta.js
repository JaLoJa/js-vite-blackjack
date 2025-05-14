/**
 * Obtener el valor # de la carta 1,2,3,..., 10,11
 * @param {String} carta 
 * @returns {String}
 */
export const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}
