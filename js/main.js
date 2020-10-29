let imagenes;

function cargarDatos()
{

  fetch('js/info.json')
  .then(response => response.json())
  .then(data => {
    imagenes = data;
  })
  .then(()=>cargarImagen())
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

function cargarImagen()
{
  let datos = imagenes[aleatorio(imagenes.length)];
  bandera.style.backgroundImage = "url(img/"+datos.img+")";
}

window.onload = () => {
  cargarDatos();
};
