let persona = {
    nombre:"camilo",
    edad: "28",
    ciudad: "sogamoso",
    profesion: "ingeniero",
}

console.log(persona)

function presentacion(presentacion) {
    let mensaje = ""
    for (const propiedad in presentacion) {
        mensaje = mensaje + propiedad + " : " + presentacion[propiedad] +", "  
     }
    console.log(mensaje) 
}

presentacion(persona)

persona.hobbies = ["gym", "basketball", "traveling"]

console.log(persona.hobbies)

for (let i = 0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i])    
}
