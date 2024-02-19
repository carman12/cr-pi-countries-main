const validation = (fieldName, value, paisesDisponibles) => {
  const errors = {};

  switch (fieldName) {
    case "nombre":
      if (!/^[A-Za-z\s]+$/.test(value)) {
        errors.name = "El nombre ingresado no es válido";
      }
      if (!value) {
        errors.name = "Debe ingresar un nombre";
      }
      break;

    case "dificultad":
      if (!/^[1-5]$/.test(value)) {
        errors.dificultad = "La dificultad debe ser un número del 1 al 5";
      }
      if (!value) {
        errors.dificultad = "Debe seleccionar una dificultad";
      }
      break;

    case "duracion":
      if (!value) {
        errors.duracion = "Debe ingresar una duración";
      }
      break;

    case "temporada":
      const temporadasValidas = ["verano", "otoño", "invierno", "primavera"];
      if (!temporadasValidas.includes(value.toLowerCase())) {
        errors.temporada = "La temporada debe ser verano, otoño, invierno o primavera";
      }
      if (!value) {
        errors.temporada = "Debe seleccionar una temporada";
      }
      break;

    case "paises":
      if (!value) {
        errors.paises = "Debe ingresar al menos un país";
      } else if (!paisesDisponibles.includes(value)) {
        errors.paises = "El país ingresado no está disponible";
      }
      break;

    default:
      break;
  }

  return errors;
};

export default validation;
