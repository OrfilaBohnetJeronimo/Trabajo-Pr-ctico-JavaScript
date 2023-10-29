// 1. Mensaje de bienvenida
function mensajeDeBienvenida() {
  let nombre = prompt("1. Ingresa tu nombre:");
  if (nombre === "Santino" || nombre === "Nahuel") {
    alert("¡Bienvenido, " + nombre + "!");
  }
}

// 2. Mayor de edad
function esMayorDeEdad() {
  let edad = parseInt(prompt("2. Ingresa tu edad:"));
  if (edad >= 18) {
    alert("Eres mayor de edad.");
  } else {
    alert("Eres menor de edad.");
  }
}

// 3. Categoría de edad
function categoriaDeEdad() {
  let edad = parseInt(prompt("3. Ingresa tu edad:"));
  if (edad >= 6 && edad <= 11) {
    alert("Eres un niño.");
  } else if (edad >= 12 && edad <= 18) {
    alert("Eres un adolescente.");
  } else if (edad >= 19 && edad <= 26) {
    alert("Eres un joven.");
  } else if (edad >= 27 && edad <= 59) {
    alert("Eres un adulto.");
  } else {
    alert("Eres un anciano.");
  }
}

// 4. Día laborable o fin de semana
function diaLaborableOFinDeSemana() {
  let diaSemana = prompt("4. Ingresa un día de la semana:");
  diaSemana = diaSemana.toLowerCase();
  if (diaSemana === "lunes" || diaSemana === "martes" || diaSemana === "miércoles" || diaSemana === "jueves" || diaSemana === "viernes") {
    alert("Es un día laborable.");
  } else if (diaSemana === "sábado" || diaSemana === "domingo") {
    alert("Es un fin de semana.");
  } else {
    alert("Día no válido.");
  }
}

// 5. Comprobar contraseña
function comprobarContraseña() {
  let contraseña = prompt("5. Ingresa la contraseña:");
  if (contraseña === "secreto") {
    alert("Acceso concedido.");
  } else {
    alert("Acceso denegado.");
  }
}

// 6. Múltiplo de 5
function esMultiploDe5(numero) {
  return numero % 5 === 0;
}

// 7. Cálculo de descuento
function calcularDescuento(edad, precio) {
  if (edad > 65) {
    return precio * 0.9; // 10% de descuento
  } else {
    return precio;
  }
}

// 8. Categoría de notas
function categoriaDeNotas(calificacion) {
  if (calificacion >= 80) {
    return "MS (Muy Satisfactorio)";
  } else if (calificacion >= 60) {
    return "S (Satisfactorio)";
  } else {
    return "EP (Evaluación Pendiente)";
  }
}

// 9. Día de la semana
function diaDeLaSemana(numero) {
  const dias = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
  if (numero >= 1 && numero <= 7) {
    return dias[numero - 1];
  } else {
    return "Día no válido.";
  }
}

// 10. Año bisiesto
function esAnoBisiesto(ano) {
  return (ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !== 0);
}

// 11. Comprobar igualdad de cadenas
function sonCadenasIguales(cadena1, cadena2) {
  if (cadena1 === cadena2) {
    return "Las cadenas son iguales.";
  } else {
    return "Las cadenas son diferentes.";
  }
}

// 12. Calculadora de edad
function calcularEdad(anoNacimiento) {
  const fechaActual = new Date();
  const anoActual = fechaActual.getFullYear();
  return anoActual - anoNacimiento;
}
