class rectangulo
{
    constructor(alto,ancho){
        this.alto=alto;
        this.ancho=ancho;
    }
    calculaarea(){
        return this.ancho*this.alto;
    }
}
function saludar(){
    alert("Buenos dias");
}

function area(){
var ancho = document.getElementById("ancho").value;
var alto = document.getElementById("alto").value;
let rectangulo1 = new rectangulo(alto,ancho);
alert(rectangulo1.calculaarea());
}