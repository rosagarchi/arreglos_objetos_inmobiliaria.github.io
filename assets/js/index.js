
document.addEventListener('DOMContentLoaded', () => {
  // Renderizar primeras 3 propiedades de venta y alquiler
  renderPropiedades(propiedadesVenta, "contenedor_propiedades_venta", 3);
  renderPropiedades(propiedadesAlquiler, "contenedor_propiedades_alquiler", 3);  

  // enlaces botones
  document.querySelector('#venta .btn-dark').href = 'propiedades_venta.html';
  document.querySelector('#alquiler .btn-dark').href = 'propiedades_alquiler.html';
});
