function obtenerProductosDisponibles(presupuestoDisponible) {
  const productos = [
    { modelo: "VW Vento 2015", precio: 12500 },
    { modelo: "VW Gol 2017", precio: 9500 },
    { modelo: "VW Amarok 0km", precio: 25000 },
    { modelo: "VW GTI 2016", precio: 33200 },
    { modelo: "VW Polo Track 2022", precio: 15000 }
  ];

  const productosDisponibles = productos
    .filter(producto => producto.precio <= presupuestoDisponible)
    .map(producto => producto.modelo);

  return productosDisponibles;
}

let presupuestoUsuario = prompt("Ingresa tu presupuesto disponible:");
let presupuestoDisponible = parseFloat(presupuestoUsuario);

if (!isNaN(presupuestoDisponible)) {
  let productosDisponibles = obtenerProductosDisponibles(presupuestoDisponible);

  if (productosDisponibles.length > 0) {
    alert(`Los productos disponibles dentro de tu presupuesto son: ${productosDisponibles.join(", ")}`);
  } else {
    alert("Lo siento, no hay productos disponibles dentro de tu presupuesto.");
  }
} else {
  alert("Por favor, ingresa un presupuesto válido.");
}
