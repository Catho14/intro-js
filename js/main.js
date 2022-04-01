/* alert("Hola Mundo!!!");
 
console.log("Este es otro mensaje");
*/
var nombre="Carlos Cathi";
let edad = 10;
// edad = "No quiero decirlo ";
let titulo = document.getElementById('titulo');
let mensaje = "Mi nombre es "+ nombre + " y mi edad es " + (edad+20);

console.log(mensaje);

titulo.innerHTML = mensaje;
titulo.style.color = '#0000ee';
//Poner en mayusculas
titulo.style.textTransform= 'uppercase';

titulo.onclick = function(){
    titulo.innerHTML="Le diste clic";
    titulo.style.textTransform= 'LowerCase';
};