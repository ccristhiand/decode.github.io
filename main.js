

document.getElementById('texto').addEventListener('input',function(event){        
    const palabrasDesTildar={
        "á" :"a",
        "é" :"e",
        "í" :"i",
        "ó" :"o",
        "ú" :"u",
    }
    for(const [palabraTildada , palabra] of Object.entries(palabrasDesTildar)){
        this.value=this.value.replaceAll(palabraTildada , palabra)
    }

    this.value=this.value.toLowerCase() ;

    if(this.value===''){
        changeSearch(this.value)
    }
     

}); 

function getEncriptar(){
    var tex=document.getElementById('texto').value;
    if (tex!==""){
        changeSearch(tex);
        encriptar(tex);
        document.getElementById("copyPortaPapeles").classList.add("copyPortaPapeles")
    }else{
        changeSearch(tex); 
    }
   
}

function getDesencriptar(){
    var tex=document.getElementById('texto').value;
    if (tex!==""){
        changeSearch(tex); 
        desencriptar(tex);
        document.getElementById("copyPortaPapeles").classList.add("copyPortaPapeles")
        
    }else{
        changeSearch(tex); 
    }
    
}
function encriptar(texto){
    var destex=document.getElementById('destext');
    const palabrasEncriptar={
        "a"     :"%%790%%",
        "e"     :"%%791%%",
        "i"     :"%%792%%",
        "o"     :"%%793%%",
        "u"     :"%%794%%",
        "%%790%%" :"ai",
        "%%791%%" :"enter",
        "%%792%%" :"imes",
        "%%793%%" :"ober",
        "%%794%%" :"ufat",
    }

    for(const [palabra,palabraEncriptada] of Object.entries(palabrasEncriptar)){
        texto=texto.replaceAll(palabra,palabraEncriptada)
    }
    destex.value=texto;
}

function desencriptar(texto){
    var destex=document.getElementById('destext');
    const palabrasDesencriptar={
        "ai"    :"a",
        "enter" :"e",
        "imes"  :"i",
        "ober"  :"o",
        "ufat"  :"u",
    }
    for(const [palabraEncriptada , palabra] of Object.entries(palabrasDesencriptar)){
        texto=texto.replaceAll(palabraEncriptada , palabra)
    }
    destex.value=texto;
}

function changeSearch(texto){
    if (texto!==""){
        var html= `<textarea name="" id="destext"> class="textoEncriptado" disabled></textarea>
                <div>
                    <p class="copyPortaPapeles" id="copyPortaPapeles">Copiado en potapapeles</p>
                    <input type="button" onclick="getCopiar()" value="Copiar" class="button copiar">
                </div>` ;
    }else{
        var html= `<img src="img/buscar.png" width="80%" alt="" class="imgBuscar">
                    <div>
                        <p style="font-size: 25px; margin-left: 20px;"><b>Ningún mensaje fue encontrado</b></p>
                        <p style="font-size: 15px;">Ingrese texto que desee encriptar o desencriptar</p>
                    <div>` ;
    }
    document.getElementById("contTexto2").innerHTML=html;
    console.log(texto)
    
}

function getCopiar() {
    const copy = document.getElementById('destext').value;
    
    navigator.clipboard.writeText(copy)
        .then(() => {
        document.getElementById("copyPortaPapeles").classList.remove("copyPortaPapeles")
        })
        .catch((error) => {
        console.error("Error al copiar al portapapeles: ", error);
    });
}