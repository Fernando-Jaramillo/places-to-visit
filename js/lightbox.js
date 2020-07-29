const imagenes = document.querySelectorAll('.img-galeria');
const imagenLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector(".imagen-light");

console.log(imagenes);
console.log(imagenLight);
console.log(contenedorLight);

imagenes.forEach(imagen => {
    imagen.addEventListener("click", () => {
        alert('ok you pushed me');
    })
})

