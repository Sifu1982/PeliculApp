import { Pelicula } from '../models/pelicula.model';
import { Persona } from '../models/persona.model';

export const PELICULAS: Pelicula[] = [
  {
    id: 1,
    titulo: 'La Amenaza Fantasma',
    fechaDeEstreno: new Date(1978, 0, 1),
    recaudacion: 1000000,
    direccion: new Persona('George', 'Lucas'),
    genero: 'Fantasía',
    productora: 'Lucas Film',
    castPrincipal: [
      new Persona('Francisco', 'Álvarez'),
      new Persona('Jose', 'Rodríguez'),
      new Persona('Juan', 'Pérez'),
    ],
  },
  new Pelicula(
    2,
    'Jurassic Park',
    new Date(1990, 3, 23),
    2000000,
    new Persona('Steven', 'Spielberg'),
    'Acción',
    'Warner',
    [
      new Persona('Pepe', 'Martínez'),
      new Persona('Laura', 'Rodríguez'),
      new Persona('Juan', 'Roca'),
    ]
  ),
  new Pelicula(
    3,
    'Jurassic Park 2',
    new Date(1995, 6, 21),
    2000000,
    new Persona('Steven', 'Spielberg'),
    'Acción',
    'Warner',
    [
      new Persona('Ana', 'Estévez'),
      new Persona('Jorge', 'Lorenzo'),
      new Persona('Aurora', 'Prieto'),
    ]
  ),
  new Pelicula(
    4,
    'Jurassic Park 3',
    new Date(1990, 3, 23),
    2000000,
    new Persona('Steven', 'Spielberg'),
    'Acción',
    'Warner',
    [
      new Persona('Francisco', 'Baeza'),
      new Persona('Ricardo', 'Ortega'),
      new Persona('Isabel', 'Castejón'),
    ]
  ),
  new Pelicula(
    5,
    'Madagascar',
    new Date(1990, 3, 23),
    2000000,
    new Persona('Eric', 'Darnell'),
    'Animación',
    'Dream Works',
    [
      new Persona('Juan', 'Álvarez'),
      new Persona('Eva', 'Rodríguez'),
      new Persona('Arantxa', 'Pérez'),
    ]
  ),
  new Pelicula(
    6,
    'Madagascar 2',
    new Date(1990, 3, 23),
    2000000,
    new Persona('Eric', 'Darnell'),
    'Animación',
    'Dream Works',
    [
      new Persona('Peter', 'End'),
      new Persona('Harry', 'Petter'),
      new Persona('John', 'Wix'),
    ]
  ),
  new Pelicula(
    7,
    'Madagascar 3',
    new Date(1990, 3, 23),
    2000000,
    new Persona('Eric', 'Darnell'),
    'Animación',
    'Dream Works',
    [
      new Persona('Esteve', 'Johnson'),
      new Persona('Lee', 'Brown'),
      new Persona('Elisabeth', 'Bread'),
    ]
  ),
];
