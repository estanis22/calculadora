let dividir = function (numero1, numero2){

    if (Number(numero1) == 0 || Number(numero2) == 0 ){

    return "No se puede dividir por cero.";
        
        } else {
    
    return Number(numero1) / Number(numero2);     
        }
};

module.exports = dividir;