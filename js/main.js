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

window.onload = () => {
	//read the file
	fetch("./js/nombres.txt")
		.then((response) => response.text())
		.then((names) => {
      //split the text into string if a new line is encountered
      let imagenes = names.split("\n");
      //split if the encoding is \r\n
      if (imagenes.length === 1) imagenes = names.split("\r\n");
      //remove empty strings
      imagenes = imagenes.filter(image => image !== "")
			var html = "<img src='img/";
			html += imagenes[aleatorio(imagenes.length)];
			html += "' />";
			bandera.innerHTML = html;
		});
	//alert(html);
};
