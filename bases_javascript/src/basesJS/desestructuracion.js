// Desestructuración de objetos

//const persona = {
  //  nombre: "lupita",
    //apellidos: "Ramirez Vazquez",
    //email: "guadalupemsc.rv@gmail.com",
//};
//spread
//const persona2 = { ...persona };

//console.log("P1", persona.nombre);
//console.log("P2", persona2.nombre);

// persona2.nombre = "Carlos";

//consele.log("P1", persona.nombre);
//console.log("P2", persona2.nombre);

//Desestrucuturación de arreglos

const personajes = ["Goku", "Vegeta", "Trunks", "Bulma"];

//const [, , personaje3] = personajes;

const caracteres = [...personajes];

caracteres[3] = "Gohan";

console.log({ personajes });
console.log({ caracteres });