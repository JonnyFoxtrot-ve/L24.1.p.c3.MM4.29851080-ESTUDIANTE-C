const arrayEstudiantes = [
  { nombre: "Alejandro", semestre: 5, nota: 4 },
  { nombre: "Fernando", semestre: 6, nota: 15 },
  { nombre: "Maria", semestre: 5, nota: 9 },
  { nombre: "Luis", semestre: 6, nota: 16 },
  { nombre: "Bruce", semestre: 7, nota: 17 },
];

let insertarEstudEnPosicion = (
  arrayEstudiantes,
  nombre,
  semestre,
  nota,
  posicion
) => {
  const nuevoEstudiante = { nombre, semestre, nota };

  if (posicion < 0) {
    posicion = 0;
  } else if (posicion > arrayEstudiantes.length) {
    posicion = arrayEstudiantes.length;
  }

  arrayEstudiantes.splice(posicion, 0, nuevoEstudiante);

  return arrayEstudiantes;
};

let salida = document.getElementById("salida");
let posicionAgregar = parseInt(
  prompt("Ingrese la posición en la que desea agregar el nuevo estudiante")
);
let EstudAgregado = insertarEstudEnPosicion(
  arrayEstudiantes,
  "Gabriel",
  6,
  16,
  posicionAgregar
);

console.log(arrayEstudiantes);
salida.innerHTML += `<pre>${JSON.stringify(arrayEstudiantes, null, 2)}</pre>`;
