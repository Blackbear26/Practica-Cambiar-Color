const parrafo = document.getElementById('color');
const btn = document.getElementById('btn');

/* manejar el evento */
btn.addEventListener('click', cambiarColor)
/* definismo la función */
function cambiarColor() {
    /* codigo que se ejecuta */

    /* funcion anidada */
    function colores() {
        /* codigo que se ejecuta */
        const opciones = "0123456789ABCDEF";
        let colorHex = "#";
    
        /* recoremos el string opciones */
        for (let i = 0; i < 6; i++) {
            colorHex += opciones[Math.floor(Math.random() * opciones.length)];
        }
    
        return colorHex;
    }
    
    let colorAleatorio = colores();
    /* este texto actualiza el texto */
    color.textContent = colorAleatorio
    /* este texto actualiza el pondo */
    document.body.style.backgroundColor = colorAleatorio;    
}       
   