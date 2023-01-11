//Obtener la información del personaje al cual queremos ver su detalle

const idPersonajeStr = sessionStorage.getItem("editPersonaje")
  ? JSON.parse(sessionStorage.getItem("editPersonaje"))
  : null;



console.log("hh ",idPersonajeStr);

//Traer el array personajes desde el sessionStorage
const personajes = sessionStorage.getItem("personajes")
  ? JSON.parse(sessionStorage.getItem("personajes"))
  : [];

console.log(personajes);

//Encontrar el objeto personaje con el id que se obtuvo en idPersonaje

const personaje = idPersonajeStr
  ? personajes.find((persona) => persona.id === idPersonajeStr)
  : {};
console.log(personaje);

const index = idPersonajeStr
  ? personajes.findIndex((persona) => persona.id === idPersonajeStr)
  : {};

  console.log("index",index);
// console.log(typeof personaje.id);
// console.log(typeof idPersonaje);

//Agregar la información en el DOM
//1. Capturando el elemento en el cual queremos mostrar esa información
document.getElementById("id").value = personaje.id;
document.getElementById("name").value = personaje.name;
document.getElementById("length").value = personaje.length;
document.getElementById("channel").value = personaje.channel;
document.getElementById("subject").value = personaje.subject;
document.getElementById("video").value = personaje.video;
const container = document.querySelector(".main");
const title = document.querySelector(".title");
console.log(title);

title.innerText = `Página de detalles de ${personaje.name}`;

const form = document.querySelector(".form");
// const inputName = document.getElementById('name');
// inputName.value = "";



form.addEventListener("submit", (event) => {
  //.preventDefault() evita que ocurra la acción que viene asociada al submit por defecto (la recarga de la página)
  event.preventDefault();
  console.log("Esto es un submit");

  //Nos entrega un ARRAY con todos los elementos hijos de form
  const valuesForm = Object.values(form);
  console.log("valores",valuesForm);

  //Queremos obtener un objeto con toda la información ingresada en el input

  const newPersonajeInfo = {};
  
  valuesForm.forEach((valueInput) => {
    if (valueInput.id) {
      console.log(valueInput.value);
      newPersonajeInfo[valueInput.id] = valueInput.value;
    }
  });

  console.log("valores",newPersonajeInfo);

  //Debemos validar que todas las propiedades de newPersonajeInfo tengan un valor válido (no estén vacíos)

  //Arrays de objetos con la traducción de la propiedad

  const keysTraductor = [
    {
      labelName: "name",
      traduccion: "Nombre",
    },
    {
      labelName: "length",
      traduccion: "Duracion",
    },
    {
      labelName: "channel",
      traduccion: "channel",
    },
    {
      labelName: "subject",
      traduccion: "subject",
    },
    {
      labelName: "video",
      traduccion: "video",
    },
    
  ];

  let keyStr = "";
  for (const key in newPersonajeInfo) {
    const propertyPersonaje = newPersonajeInfo[key];
    console.log("106",newPersonajeInfo[key]);

    if (!propertyPersonaje) {
      const labelFound = keysTraductor.find(label => label.labelName === key);
      keyStr = keyStr + labelFound.traduccion + ", ";
    }
  }

  console.log(keyStr);
  if (keyStr) {
    let messenger = `El campo ${keyStr} no se encuentra diligenciado`;
    alert(messenger);
    return;
  }

  //Agregar el nuevo personaje al array personajes
  console.log("nuevo",newPersonajeInfo);

console.log("nuevo",newPersonajeInfo.id);
 

 console.log("nuevo2",newPersonajeInfo.id);

// personajes.push(newPersonajeInfo);

 personajes[index]=newPersonajeInfo;
  console.log(personajes);

  //Actualizar la información de personajes que tenemos en sessionStorage
  sessionStorage.setItem("personajes", JSON.stringify(personajes));

  //Limpiar cada campo del formulaio
  valuesForm.forEach(input => {
    if (input.id) { 
      input.value = "";
    }
  })

});