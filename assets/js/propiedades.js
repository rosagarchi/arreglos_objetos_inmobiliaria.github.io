const propiedadesVenta = [
  {
    nombre: "Casa Moderna",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion: "Hermosa casa moderna en el centro.",
    ubicacion: "Ciudad Central",
    habitaciones: 3,
    banos: 3,
    costo: 120000,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Apartamento Urbano",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion: "Apartamento con vista a la ciudad.",
    ubicacion: "Zona Norte",
    habitaciones: 2,
    banos: 2,
    costo: 90000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa Familiar",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion: "Casa espaciosa ideal para familias.",
    ubicacion: "Zona Sur",
    habitaciones: 4,
    banos: 3,
    costo: 150000,
    smoke: true,
    pets: false,
  },
  {
    nnombre: "Casa de Playa",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion: "Casa perfecta para disfrutar de las vacaciones.",
    ubicacion: "Costa Dorada",
    habitaciones: 3,
    banos: 2,
    costo: 120000,
    smoke: true,
    pets: true,
  },
];



const propiedadesAlquiler = [
  {
    nombre: "Departamento Ejecutivo",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion: "Espacio cómodo y moderno para profesionales.",
    ubicacion: "Zona Financiera",
    habitaciones: 1,
    banos: 1,
    costo: 1200, // Costo en alquiler mensual
    smoke: false,
    pets: false,
  },
  {
    nombre: "Casa Campestre",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion: "Perfecta para una escapada tranquila al campo.",
    ubicacion: "Zona Rural",
    habitaciones: 3,
    banos: 2,
    costo: 1800,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Estudio Acogedor",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion: "Un espacio pequeño y práctico para estudiantes.",
    ubicacion: "Zona Universitaria",
    habitaciones: 1,
    banos: 1,
    costo: 900,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Penthouse con Vista",
    src: "img/penthouse1.jpg",
    descripcion: "Ático de lujo con vista panorámica a la ciudad.",
    ubicacion: "Zona Alta",
    habitaciones: 2,
    banos: 2,
    costo: 2500,
    smoke: true,
    pets: false,
  },
];


function renderPropiedades(arrayPropiedades, contenedor, maximo) {

  const contenedorPropiedades = document.getElementById(contenedor);

  contenedorPropiedades.innerHTML = "";

  const max = maximo ? maximo : arrayPropiedades.length;

  arrayPropiedades.slice(0, max).forEach((propiedad) => {
    
    contenedorPropiedades.innerHTML += `
          <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${propiedad.src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${propiedad.nombre}
                </h5>
                <p class="card-text">
                  Hermosa casa moderna en el centro.
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i>
                  ${propiedad.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                  <i class="fas fa-bath"></i> ${propiedad.banos} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i>${propiedad.costo}</p>
              
                ${propiedad.smoke ? '<p class="text-success"><i class="fas fa-smoking"></i> Se permite fumar </p>' : '<p class="text-danger"><i class="fas fa-smoking-ban red"></i> No se permite fumar </p>'}
                ${propiedad.pets ? '<p class="text-success"><i class="fa-solid fa-paw"></i> Se permite mascotas </p>' : '<p class="text-danger"><i class="fa-solid fa-ban red"></i> No se permite mascotas </p>'}
              
              </div>
            </div>
          </div>`;
  });

}

