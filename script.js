const textArea = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");
const btnCopiar = document.querySelector(".copiar");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


function btnEncriptar(){

    if (textArea.value.trim() === "") {
        alert("No hay texto para encriptar.");
    } else {
        const textoEnciptado = enciptar(textArea.value) 
        mensaje.value = textoEnciptado;
        textArea. value = ""
        mensaje.style.backgroundImage = "none" 
    }
}

function enciptar (stringEnciptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]    
    stringEnciptado = stringEnciptado.toLowerCase();

    for(let i=0; i<matrizCodigo.length;i++){
        
        if(stringEnciptado.includes(matrizCodigo[i][0])){
            stringEnciptado = stringEnciptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEnciptado
}


function btnDesencriptar(){
    const textDesenciptado = desenciptar(mensaje.value) 
    mensaje.value = textDesenciptado;
    textArea.value = ""
}



function desenciptar (stringEnciptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]    
    stringEnciptado = stringEnciptado.toLowerCase();

    for(let i=0; i<matrizCodigo.length;i++){
        
        if(stringEnciptado.includes(matrizCodigo[i][1])){
            stringEnciptado = stringEnciptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
        
    }
    return stringEnciptado
}

function btnCopiarTexto(stringEnciptado){
    if (mensaje.value.trim() === "") {
        alert("No hay texto desencriptado para copiar.");
    } else {
        mensaje.select(); // Selecciona el texto en el textarea
        document.execCommand("copy"); // Copia el texto al portapapeles
        alert("Texto copiado al portapapeles!"); // Alerta opcional para indicar que se ha copiado
    }
}

btnCopiar.addEventListener("click", btnCopiarTexto);