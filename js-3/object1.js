var pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    hobbies: ["programar","squash","piano"],
    estatura: 1.8,
}

for (const propiedad in pedro) {
   console.log(propiedad + " : " + pedro[propiedad]   )
}

function saluda(objeto) {
    let saludo = "Hola, me llamo " + objeto.nombre
    return saludo
}

console.log(saluda(pedro))

//**************************************************************** */

//************************************************************************ */

