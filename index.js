let longitudEl = document.getElementById("longitud")
let volumenEl = document.getElementById("volumen")
let masaEl = document.getElementById("masa")


function convertirDistancia(){
    let valorEl = document.getElementById("valor").value
    let distanciaMetros = valorEl * 0.3048
    let distanciaPies = valorEl * 3.3700
    distanciaMetros = distanciaMetros.toFixed(3)
    distanciaPies = distanciaPies.toFixed(3)
    longitudEl.textContent = valorEl + " metros = " + distanciaPies + " pies / " + valorEl + " pies =" + distanciaMetros + " metros"
}
function convertirVolumen(){
    let valorEl = document.getElementById("valor").value
    let volumenLitros = valorEl * 3.7854
    let volumenGalones = valorEl * 0.2641
    volumenGalones = volumenGalones.toFixed(3)
    volumenLitros = volumenLitros.toFixed(3)
    volumenEl.textContent = valorEl + " litros = " + volumenGalones + " galones / " + valorEl + " galones =" + volumenLitros + " litros"
}

function convertirMasa(){
    let valorEl = document.getElementById("valor").value
    let masaKilos = valorEl * 0.4535
    let masaLibras = valorEl * 2.2046
    masaKilos = masaKilos.toFixed(3)
    masaLibras = masaLibras.toFixed(3)
    masaEl.textContent = valorEl + " kilos = " + masaLibras + " libras/ " + valorEl + " libras = " + masaKilos + " kilos"
}
function convertir(){
    convertirDistancia()
    convertirVolumen()
    convertirMasa()
}