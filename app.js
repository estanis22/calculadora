let sumar = require ("./sumar");
let restar = require ("./restar");
let multiplicar = require ("./multiplicar");
let dividir = require ("./dividir");

console.log (dividir(1,0))

function tengoClases(dia) {
	switch (dia) {
    	case "lunes":
		console.log ("tenés clases");
		break;
		case "miércoles":
		console.log ("tenés clases");
		break;
		case "viernes":
		console.log ("tenés clases");
		break;
	default:
	console.log ("no tenés clases");;

	};


    }

    tengoClases ("lunes")