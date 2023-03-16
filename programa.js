//crear eventListener

let botonAlmacenar= document.getElementById("btnAlmacenar");
let botonBorrar= document.getElementById("btnBorrar");

botonAlmacenar.addEventListener('click', ()=>{
    //console.log("estoy respondiendo");
    sessionStorage.setItem('nombre', 'andres');
    localStorage.setItem('Apellido','gomez')
});

botonBorrar.addEventListener('click', function(){
    sessionStorage.clear();
    localStorage.clear();
    localStorage.getItem()
});

function construirFilas(){

    for (let i=0; i<window.sessionStorage.length;i++){

        let cuerpoTabla=document.getElementById("cuerpo datos");
        let fila=document.createElement("tr");
        let celda=document.createElement("td");
        let texto=document.createTextNode(sessionStorage.key(i));
        celda.appendChild(texto);
        fila.appendChild(celda);
        
        celda=document.createElement("td");
        let valor=sessionStorage.getItem(sessionStorage.key(i));
        texto=document.createTextNode(valor);
        celda.appendChild(texto);
        fila.appendChild(celda);

        cuerpoTabla.appendChild(fila);
    }
}

construirFilas();


