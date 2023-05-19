function calcularImc() {
    let alturaCm = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);

    let alturaMetros = alturaCm / 100;
    
    let imc = peso / (alturaMetros * alturaMetros);

    document.getElementById("resultado").innerHTML = "IMC: " + imc.toFixed(2);
}