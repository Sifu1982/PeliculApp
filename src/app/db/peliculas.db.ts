import { Pelicula } from "../models/pelicula.model";
import { Persona } from "../models/persona.model";

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
            new Persona('Juan', 'Pérez')
        ]
    },
    new Pelicula(2, 'Jurassic Park', new Date(1990, 3, 23), 2000000, new Persona('Steven', 'Spielberg'), 'Acción', 'Warner', [new Persona('Francisco', 'Álvarez'),
    new Persona('Jose', 'Rodríguez'),
    new Persona('Juan', 'Pérez'),]),
    new Pelicula(3, 'Jurassic Park 2', new Date(1990, 3, 23), 2000000, new Persona('Steven', 'Spielberg'), 'Acción', 'Warner', [new Persona('Francisco', 'Álvarez'),
    new Persona('Jose', 'Rodríguez'),
    new Persona('Juan', 'Pérez')]),
    new Pelicula(4, 'Jurassic Park 3', new Date(1990, 3, 23), 2000000, new Persona('Steven', 'Spielberg'), 'Acción', 'Warner', [new Persona('Francisco', 'Álvarez'),
    new Persona('Jose', 'Rodríguez'),
    new Persona('Juan', 'Pérez')]),
    new Pelicula(5, 'Madagascar', new Date(1990, 3, 23), 2000000, new Persona('Steven', 'Spielberg'), 'Acción', 'Warner', [new Persona('Francisco', 'Álvarez'),
    new Persona('Jose', 'Rodríguez'),
    new Persona('Juan', 'Pérez')]),
    new Pelicula(6, 'Madagascar 2', new Date(1990, 3, 23), 2000000, new Persona('Steven', 'Spielberg'), 'Acción', 'Warner', [new Persona('Francisco', 'Álvarez'),
    new Persona('Jose', 'Rodríguez'),
    new Persona('Juan', 'Pérez')]),
    new Pelicula(7, 'Madagascar 3', new Date(1990, 3, 23), 2000000, new Persona('Steven', 'Spielberg'), 'Acción', 'Warner', [new Persona('Francisco', 'Álvarez'),
    new Persona('Jose', 'Rodríguez'),
    new Persona('Juan', 'Pérez')])
]