//1. Capturar el formulario

const form = document.querySelector(".form");
// const inputName = document.getElementById('name');
// inputName.value = "";

//Para obtener los datos de sessionStorage usamos el método getItem(). Este método recibe un parámetro que sería la key (nombre de la propiedad que queremos recuperar desde sessionStorage)

let personajes = sessionStorage.getItem("personajes")
  ? JSON.parse(sessionStorage.getItem("personajes"))
  : [];

console.log(personajes);

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
      newPersonajeInfo[valueInput.id] = valueInput.value;
    }
  });

  console.log("valores32",newPersonajeInfo);

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
    console.log(newPersonajeInfo[key]);

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
 
  personajes.push(newPersonajeInfo);

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
