function obtenerProductosDisponibles(presupuestoDisponible) {
    const precios = {
      "VW Vento 2015": 12500,
      "VW Gol 2017": 9500,
      "VW Amarok 0km": 25000,
      "VW GTI 2016": 33200,
      "VW Polo Track 2022": 15000
    };

    let productosDisponibles = [];

    for (const producto in precios) {
      if (precios.hasOwnProperty(producto)) {
        if (precios[producto] <= presupuestoDisponible) {
          productosDisponibles.push(producto);
        }
      }
    }

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