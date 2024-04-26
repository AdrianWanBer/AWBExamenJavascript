
const saltoDeLinea = document.createElement("br");

var id = 0;

function añadir() {
	id++;
	var nombre = prompt("Cual es tu nombre", "Nombre");
	var coste = prompt("Cual es el coste", "€");
	var dia = prompt("dia", "€");
	var mes = prompt("mes", "€");
	var anyo = prompt("anyo", "€");
	var fechaEntrada = new Date(dia, mes, anyo);
	var fechaEntrega = new Date();
	fechaEntrega.setDate(fechaEntrada.getDate() + 5);

	var tabla = document.getElementById("tabla");

	tabla.innerHTML = id + " " + nombre + " " + coste + "€" + " " + dia + "/" + mes + "/" + anyo + " " + fechaEntrega + "\n";
	elemento.appendChild(saltoDeLinea);
}
function quitar() {
	var idAQuitar = prompt("Cual es el id que quieres borrar",);
	alert("No");
}