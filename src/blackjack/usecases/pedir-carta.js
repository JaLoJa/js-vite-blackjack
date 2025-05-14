/**
 * Esta funcion permite tomar una carta del deck
 * @param {Array<String>} deck es un arreglo de string
 * @returns {String} retorna una carta del deck
 */
export const pedirCarta = ( deck) => {

    if ( deck.length === 0 ) {
        throw new Error ("No hay cartas en el deck");
    }
    const carta = deck.pop();
    return carta;
}