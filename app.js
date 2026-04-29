//	Alumno (nombre,apellido ,legajo , fechaNacimiento ,DNI , añoCursado , FechaIngreso , Email , Carrera , Imagen , Promedio , etc)
const Alumno = {
  nombre: "Agustina Julieta ",
  apellido: "Cedrón",
  edad: 20,
  legajo: 63324,
  fechaNacimiento: "2005-07-01",
  DNI: 46543412,
  anioCursado: "2do",
  fechaIngreso: "2025-03-17",
  email: "agustinacedron7@gmail.com",
  carrera: "Tecnicatura Universitaria en Programación",
  imagen: "./img/yo.jfif",
};
//	Facultad (nombre , direccion , Imagen , ciudad, añoFundacion , Telefono , Url , Decano , CantCarreras ,etc)
const Facultad = {
  nombre: "Universidad Tecnológica Nacional - Facultad Regional Tucumán",
  direccion: "Rivadavia 1050, San Miguel de Tucumán, Tucumán",
  imagen: "./img/facultad.jfif",
  ciudad: "Tucumán",
  anioFundacion: "1954",
  telefono: "03814217150",
  url: "https://frt.utn.edu.ar/",
  decano: "Ing.Rubén Egea ",
  cantCarreras: "15",
  carreraGrado: [
    " -Ingeniería en Sistemas de Información",
    " -Ingeniería en Energía Electrica",
    " -Ingeniería Mecanica",
    " -Ingeniería Civil",
    " -Ingeniería Electrónica",
  ],
  carreraPregrado: [
    " -Tecnicatura Universitaria en Programación",
    " -Tecnicatura Universitaria en Informatica",
    " -Tecnicatura Universitaria en Mecatrónica",
    " -Tecnicatura Universitaria en Higiene y Seguridad en el Trabajo",
    " -Tecnicatura Universitaria en Logística",
    " -Tecnicatura Universitaria en Desarrollo y Producción de Videojuegos",
    " -Tecnicatura Universitaria en Energías Sustentables",
  ],
  complemCurricular: [
    " -Licenciatura en Tecnología Educativa",
    " -Licenciatura en Higiene y Seguridad en el Trabajo",
    " -Licenciatura en Gestión Ambiental",
  ],
};
const card = (document.getElementById("card-alum").innerHTML =
  `<p>¡Hola!, soy ${Alumno.nombre}${Alumno.apellido}, tengo ${Alumno.edad} años
 y soy estudiante de la ${Alumno.carrera} en la ${Facultad.nombre}</p>
<p>Mi legajo es: ${Alumno.legajo}</p>
<p>Fecha de Nacimiento: ${Alumno.fechaNacimiento}</p>
<p>DNI: ${Alumno.DNI}</p>
<p>Año Cursado: ${Alumno.anioCursado}</p>
<p>Fecha de Ingreso: ${Alumno.fechaIngreso}</p>
<p>Email: ${Alumno.email}</p>
<img src="${Alumno.imagen}">
`);
document.getElementById("article").innerHTML += `<h3>${Facultad.nombre}</h3>
<p>Dirección: ${Facultad.direccion}</p>
<p>Ciudad: ${Facultad.ciudad}</p>
<p>Año de Fundación: ${Facultad.anioFundacion}</p>
<p>Teléfono: ${Facultad.telefono}</p>
<p>URL: <a href="${Facultad.url}">${Facultad.url}</a></p>
<p>Decano: ${Facultad.decano}</p>
<p>Cantidad de Carerras: ${Facultad.cantCarreras}</p>`;
((document.getElementById("article").innerHTML += `<h3>Carreras de Grado</h3>`),
  Facultad.carreraGrado.map(
    (carrera) =>
      (document.getElementById("article").innerHTML += `<p> ${carrera}</p>`),
  ),
  (document.getElementById("article").innerHTML +=
    `<h3>Carreras de Pregrado</h3>`),
  Facultad.carreraPregrado.map(
    (carrera) =>
      (document.getElementById("article").innerHTML += `<p> ${carrera}</p>`),
  ),
  (document.getElementById("article").innerHTML +=
    `<h3>Ciclo de Complementación Curricular</h3>`),
  Facultad.complemCurricular.map(
    (carrera) =>
      (document.getElementById("article").innerHTML += `<p> ${carrera}</p>`),
  ));
//	Lenguajes (nombre ,tipo , añoCreacion , Creador , nivelDificultad , esCompilado , Popularidad ,usoPrincipal, etc)
const Lenguaje = [
  {
    id: 1,
    nombre: "C#",
    tipo: "Orientado a Objetos",
    anioCreacion: 2000,
    creador: "Microsoft",
    nivelDificultad: "Intermedio",
    esCompilado: "Si",
    popularidad: "Alta",
    usoPrincipal:
      "Desarrollo de aplicaciones de escritorio, videojuegos y aplicaciones web con ASP.NET",
  },
  {
    id: 2,
    nombre: "JavaScript",
    tipo: "Interpretado",
    anioCreacion: 1995,
    creador: "Brendan Eich",
    nivelDificultad: "Intermedio",
    esCompilado: "No",
    popularidad: "Alta",
    usoPrincipal: "Desarrollo web",
  },
  {
    id: 3,
    nombre: "Python",
    tipo: "Interpretado",
    anioCreacion: 1991,
    creador: "Guido Van Rossum",
    nivelDificultad: "Bajo",
    esCompilado: "No",
    popularidad: "Alta",
    usoPrincipal: "Desarrollo web, análisis de datos, IA y automatización",
  },
  {
    id: 4,
    nombre: "C",
    tipo: "Estructurado",
    anioCreacion: 1972,
    creador: "Dennis Ritchie",
    nivelDificultad: "Alto",
    esCompilado: "Si",
    popularidad: "Alta",
    usoPrincipal: "Desarrollo de sistemas operativos",
  },
  {
    id: 5,
    nombre: "C++",
    tipo: "Orientado a objetos",
    anioCreacion: 1979,
    creador: "Bjarne Stroustrup",
    nivelDificultad: "Alto",
    esCompilado: "Si",
    popularidad: "Alta",
    usoPrincipal: "Desarrollo de aplicaciones de alto rendimiento",
  },
  {
    id: 6,
    nombre: "Cobol",
    tipo: "Estructurado",
    anioCreacion: 1959,
    creador: "Grace Murray Hopper",
    nivelDificultad: "Alto",
    esCompilado: "Si",
    popularidad: "Baja",
    usoPrincipal: "Informática de Gestión",
  },
  {
    id: 7,
    nombre: "PHP",
    tipo: "Interpretado",
    anioCreacion: 1994,
    creador: "Rasmus Lerdorf",
    nivelDificultad: "Bajo",
    esCompilado: "No",
    popularidad: "Media",
    usoPrincipal: "Desarrollo web",
  },
  {
    id: 8,
    nombre: "Julia",
    tipo: "Interpretado",
    anioCreacion: 2012,
    creador: "Jeff Bezanson, Stefan Karpinski, Viral B. Shah y Alan Edelman",
    nivelDificultad: "Intermedio",
    esCompilado: "No",
    popularidad: "Baja",
    usoPrincipal: "Análisis de datos y computación científica",
  },
  {
    id: 9,
    nombre: "Pascal",
    tipo: "Estructurado",
    anioCreacion: 1970,
    creador: "Niklaus Wirth",
    nivelDificultad: "Bajo",
    esCompilado: "Si",
    popularidad: "Baja",
    usoPrincipal: "Enseñanza de programación",
  },
  {
    id: 10,
    nombre: "Swift",
    tipo: "Orientado a Objetos",
    anioCreacion: 2014,
    creador: "Apple",
    nivelDificultad: "Intermedio",
    esCompilado: "Si",
    popularidad: "Media",
    usoPrincipal: "Desarrollo de aplicaciones iOS y macOS",
  },
];
Lenguaje.map(
  (lenguaje) =>
    (document.getElementById("aside").innerHTML +=
      `<h3>Nombre: ${lenguaje.nombre}</h3><p>Año de creación: ${lenguaje.anioCreacion}</p><p>Creador: ${lenguaje.creador}</p><p>Nivel de dificultad: ${lenguaje.nivelDificultad}</p><p>Es compilado: ${lenguaje.esCompilado}</p>
<p>Popularidad: ${lenguaje.popularidad}</p><p>Uso principal: ${lenguaje.usoPrincipal}</p>`),
);
const Aprender = ["React", "Node.js", "Angular", "Python", "APIs REST"];

Aprender.map((aprender) =>(document.getElementById("aprender").innerHTML += `<li>${aprender}</li>`),
);
