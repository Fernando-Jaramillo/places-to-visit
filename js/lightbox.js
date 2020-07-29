const imagenes = document.querySelectorAll('.img-galeria');
const imagenLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector(".imagen-light");

console.log(imagenes);
console.log(imagenLight);
console.log(contenedorLight);

imagenes.forEach(imagen => {
    imagen.addEventListener("click", () => {
        aparecerImagen(imagen.getAttribute('src'));
    })
});

const aparecerImagen = (imagen) => {
    imagenLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenLight.classList.toggle('showImage')
}