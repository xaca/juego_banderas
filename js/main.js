let imagenes;

function cargarDatos()
{

  fetch('js/info.json')
  .then(response => response.json())
  .then(data => {
    imagenes = data;
  })
  .then(()=>actualizarBandera())
  .catch((error) => {
    console.error('Error:', error);
  });

}

function aleatorio(mayor) {
  return Number.parseInt(Math.random() * mayor);
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

function asignarNombre(obj,idioma)
{
  return obj[idioma]?obj[idioma]:obj["en"];
}

function actualizarBandera()
{
  let datos = imagenes[aleatorio(imagenes.length)];
  bandera.style.backgroundImage = `url(img/${datos.img})`;
  nombre.innerHTML = `Nombre: ${asignarNombre(datos.nombre,"es")}`;
  capital.innerHTML = `Capital: ${datos.capital}`;
  //idioma.innerHTML = datos.idioma;
}

function asignarEventos()
{
  btn_actualizar.addEventListener("click",(event)=>actualizarBandera());
}

window.onload = () => {
  cargarDatos();
  asignarEventos();
};
