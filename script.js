// 1. Mensaje de bienvenida
function mensajeDeBienvenida() {
  let nombre = prompt("1. Ingresa tu nombre:");
  if (nombre === "Santino" || nombre === "Nahuel") {
    alert("¡Bienvenido, " + nombre + "!");
  } else {
    alert("¡Bienvenido, " + nombre + "!");
  }
}
alert(mensajeDeBienvenida())

// 2. Mayor de edad
function esMayorDeEdad() {
  let edad = Number(prompt("2. Ingresa tu edad:"));
  if (edad >= 18) {
    alert("Eres mayor de edad.");
  } else {
    alert("Eres menor de edad.");
  }
}
alert(esMayorDeEdad())

// 3. Categoría de edad
function categoriaDeEdad() {
  let edad = Number(prompt("3. Ingresa tu edad:"));
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
alert(categoriaDeEdad())

// 4. Día laborable o fin de semana
function diaLaborableOFinDeSemana() {
  let diaSemana = prompt("4. Ingresa un día de la semana:");
  diaSemana = diaSemana.toLowerCase();
  if (diaSemana === "lunes" || diaSemana === "martes" || diaSemana === "miércoles" || diaSemana === "jueves" || diaSemana === "viernes" || diaSemana === "sábado") {
    alert("Es un día laborable.");
  } else if (diaSemana === "domingo") {
    alert("Es un fin de semana.");
  } else {
    alert("Día no válido.");
  }
}
alert(diaLaborableOFinDeSemana())

// 5. Comprobar contraseña
function comprobarContraseña() {
  let contraseña = prompt("5. Ingresa la contraseña:");
  if (contraseña === "secreto") {
    alert("Acceso concedido.");
  } else {
    alert("Acceso denegado.");
  }
}
alert(comprobarContraseña())

// 6. Múltiplo de 5
function esMultiploDe5(numero) {
  numero = Number(prompt("¡Elije un numero!"))
  return numero % 5 === 0;
}
alert(esMultiploDe5())

// 7. Cálculo de descuento
function calcularDescuento(edad, precio) {
  edad = Number(prompt("Cual es tu edad?"))
  precio = Number(prompt("Cual es el precio de la compra"))
  if (edad > 65) {
    return precio * 0.9; // 10% de descuento
  } else {
    return precio;
  }
}
alert(calcularDescuento())

// 8. Categoría de notas
function categoriaDeNotas(calificacion) {
  calificacion = Number(prompt("¡Cual es tu calificacion (Un numero del 0 al 100)!"))
  if (calificacion >= 80) {
    return "MS (Muy Satisfactorio)";
  } else if (calificacion >= 60) {
    return "S (Satisfactorio)";
  } else {
    return "EP (Evaluación Pendiente)";
  }
}
alert(categoriaDeNotas())

// 9. Día de la semana
function diaDeLaSemana(numero) {
  numero = Number(prompt("Elije un numero"))
  const dias = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
  if (numero >= 1 && numero <= 7) {
    return dias[numero - 1];
  } else {
    return "Día no válido.";
  }
}
alert(diaDeLaSemana())

// 10. Año bisiesto
function esAñoBisiesto(año) {
  año = Number(prompt("Que año es?"))
  return (año % 400 === 0) || (año % 4 === 0 && año % 100 !== 0);
}
alert(esAñoBisiesto())

// 11. Comprobar igualdad de cadenas
function sonCadenasIguales(cadena1, cadena2) {
  cadena1 = Number(prompt("Dime un numero"))
  cadena2 = Number(prompt("Dime otro numero o el mismo"))
  if (cadena1 === cadena2) {
    return "Las cadenas son iguales.";
  } else {
    return "Las cadenas son diferentes.";
  }
}
alert(sonCadenasIguales())

// 12. Calculadora de edad
function calcularEdad(añoNacimiento) {
  const fechaActual = new Date();
  const añoActual = fechaActual.getFullYear();
  return añoActual - añoNacimiento;
}
alert(calcularEdad())
