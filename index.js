
   var btnaceptar =document.querySelector(".aceptar");
   const aparece = ()=>{
    const flechita =document.querySelector(".flechita");
    flechita.style.visibility='visible'
   }
   btnaceptar.addEventListener("click",()=>{
    var sinresultado =document.querySelector(".sinresultado");
    sinresultado.style.visibility="hidden";
    var cuerpo =document.querySelector("#body")
    cuerpo.style.opacity="1";
   });

// var btnPublicar =document.querySelector("#publicar");

// btnPublicar.addEventListener("click",(e)=>{

// var titulo =document.querySelector("#titulo");
// var publicacion =document.querySelector("#comentario");
// if (titulo.value.length ==0) {
//      alert("no puedes dejar tu titulo vacio")
//     e.preventDefault();
// }
// else if(titulo.value.length <=3) {
//    alert("escriba un poco mas en tu titulo")
//     e.preventDefault();
// }
// else if(titulo.value.length >24) {
//     alert("no puedes escribir mas de 15 caracteres  en tu titulo eso incluye a los espacios")
//     e.preventDefault();
// }
// else if(publicacion.value.length ==0) {
//     alert("No puedes dejar  tu publicacion vacia")
//     e.preventDefault();
// }
// else if(publicacion.value.length <=5) {
//     alert("Escribe un poco mas en  tu publicacion")
//     e.preventDefault();
// }
// else if(publicacion.value.length >500) {
//     alert("no puedes escribir mas de 500 caracteres  en tu publicacion eso incluye a los espacios")
//     e.preventDefault();
// }
// });

/*FUNCION DEL BUSCADOR  */


var btnbuscar =document.querySelector("#btnbuscar");
btnbuscar.addEventListener("click",()=>{
     var buscador =document.querySelector("#buscador");
    if (buscador.value == "amor" ||buscador.value =="Amor" ||buscador.value =="Love" ||buscador.value =="love") {
       
        var classAmor =document.querySelectorAll(".amor");
        aparece()
        for (let index = 0; index < classAmor.length; index++) {
            classAmor[index].style.background="#FF69B4";
            
        }
    }
    else if(buscador.value == "motivacion" ||buscador.value =="Motivacion" || buscador.value =="motivation" || buscador.value =="Motivation"){
        var classMotivacion =document.querySelectorAll(".motivacion");
        aparece()
        for (let index = 0; index < classMotivacion.length; index++) {
            classMotivacion[index].style.background="lawngreen";
            
        }
    }
    // else if(buscador.value == "tristeza" ||buscador.value =="Tristeza" ||buscador.value =="tristesa" ||buscador.value =="Tristesa" ||buscador.value =="sad" ||buscador.value =="Sad" 
    // ||buscador.value =="triste" ||buscador.value =="Triste" ||buscador.value =="tristes" ||buscador.value =="Tristes"  ){
    //     var classTristeza =document.querySelectorAll(".tristeza");
      
    //     for (let index = 0; index < classTristeza.length; index++) {
    //         classTristeza[index].style.background="gray";
            
    //     }
    // }
    else if(buscador.value == "felicidad" ||buscador.value =="Felicidad" ||buscador.value =="felices" ||buscador.value =="Felices" ||buscador.value =="happiness" ||buscador.value =="Happiness" ||buscador.value =="Happy" ||buscador.value =="happy" ||buscador.value =="feliz" ||buscador.value =="Feliz"){
        var classFelicidad =document.querySelectorAll(".felicidad");
        aparece()
        for (let index = 0; index < classFelicidad.length; index++) {
            classFelicidad[index].style.background="yellow";
            
        }
    }
    else if(buscador.value == "superacion" ||buscador.value =="Superacion" ||buscador.value =="overcoming" ||buscador.value =="Overcoming" ||buscador.value =="superarse" ||buscador.value =="Superarse"){
        var classSuperarse =document.querySelectorAll(".superarse");
        aparece()
        for (let index = 0; index < classSuperarse.length; index++) {
            classSuperarse[index].style.background="lightseagreen";
            
        }
    }
    else if(buscador.value == "filosofica" ||buscador.value =="Filosofica" ||buscador.value =="filosofia" ||buscador.value =="Filosofia"
     ||buscador.value =="philosophical" ||buscador.value =="Philosophical"){
        var classFilosofica =document.querySelectorAll(".filosofica");
        aparece()
        for (let index = 0; index < classFilosofica.length; index++) {
            classFilosofica[index].style.background="olive";
            
        }
    }
    else if(buscador.value == "cientifica" ||buscador.value =="Cientifica" ||buscador.value =="cientificas" ||buscador.value =="Cientificas" ||buscador.value =="scientific" ||buscador.value =="Scientific"){
        var classCientificas =document.querySelectorAll(".cientificas");
        aparece()
        for (let index = 0; index < classCientificas.length; index++) {
            classCientificas[index].style.background="white"; 
        }
    }
    else{
        var sinresultado =document.querySelector(".sinresultado");
        var cuerpo =document.querySelector("#body")
        sinresultado.style.visibility="visible";
        cuerpo.style.opacity="-10";

    }
});

var buscador =document.querySelector("#buscador");

buscador.addEventListener("click",()=>{
    if (buscador.value == "amor" ||buscador.value =="Amor" ||buscador.value =="Love" ||buscador.value =="love") {
       
        var classAmor =document.querySelectorAll(".amor");
        const flechita= document.querySelector('.flechita')
        flechita.style.visibility='hidden';
        for (let index = 0; index < classAmor.length; index++) {
            classAmor[index].style.background="#fff";
            
        }
    }
    else if(buscador.value == "motivacion" ||buscador.value =="Motivacion" || buscador.value =="motivation" || buscador.value =="Motivation"){
        var classMotivacion =document.querySelectorAll(".motivacion");
        const flechita= document.querySelector('.flechita')
        flechita.style.visibility='hidden';
        for (let index = 0; index < classMotivacion.length; index++) {
            classMotivacion[index].style.background="#fff";
            
        }
    }
    // else if(buscador.value == "tristeza" ||buscador.value =="Tristeza" ||buscador.value =="tristesa" ||buscador.value =="Tristesa" ||buscador.value =="sad" ||buscador.value =="Sad"
    // ||buscador.value =="triste" ||buscador.value =="Triste" ||buscador.value =="tristes" ||buscador.value =="Tristes"){
    //     var classTristeza =document.querySelectorAll(".tristeza");
    //     const flechita= document.querySelector('.flechita')
    //     flechita.style.visibility='hidden';
    //     for (let index = 0; index < classTristeza.length; index++) {
    //         classTristeza[index].style.background="#fff";
            
    //     }
    // }
    else if(buscador.value == "felicidad" ||buscador.value =="Felicidad" ||buscador.value =="felices" ||buscador.value =="Felices" ||buscador.value =="happiness" ||buscador.value =="Happiness" ||buscador.value =="Happy" ||buscador.value =="happy" ||buscador.value =="feliz" ||buscador.value =="Feliz"){
        var classFelicidad =document.querySelectorAll(".felicidad");
        const flechita= document.querySelector('.flechita')
        flechita.style.visibility='hidden';
        for (let index = 0; index < classFelicidad.length; index++) {
            classFelicidad[index].style.background="#fff";
            
        }
    }
    else if(buscador.value == "superacion" ||buscador.value =="Superacion" ||buscador.value =="overcoming" ||buscador.value =="Overcoming" ||buscador.value =="superarse" ||buscador.value =="Superarse"){
        var classSuperarse =document.querySelectorAll(".superarse");
        const flechita= document.querySelector('.flechita')
        flechita.style.visibility='hidden';
        for (let index = 0; index < classSuperarse.length; index++) {
            classSuperarse[index].style.background="#fff";
            
        }
    }
    else if(buscador.value == "filosofica" ||buscador.value =="Filosofica" ||buscador.value =="filosofia" ||buscador.value =="Filosofia"
     ||buscador.value =="philosophical" ||buscador.value =="Philosophical"){
        var classFilosofica =document.querySelectorAll(".filosofica");
        const flechita= document.querySelector('.flechita')
        flechita.style.visibility='hidden';
        for (let index = 0; index < classFilosofica.length; index++) {
            classFilosofica[index].style.background="#fff";
            
        }
    }
    else if(buscador.value == "cientifica" ||buscador.value =="Cientifica" ||buscador.value =="cientificas" ||buscador.value =="Cientificas" ||buscador.value =="scientific" ||buscador.value =="Scientific"){
        var classCientificas =document.querySelectorAll(".cientificas");
        const flechita= document.querySelector('.flechita')
        flechita.style.visibility='hidden';
        for (let index = 0; index < classCientificas.length; index++) {
            classCientificas[index].style.background="#fff";
            
        }
    }
})
document.body.addEventListener('keydown',(e)=> {
    if(e.key === 'Enter') btnbuscar.click()
})