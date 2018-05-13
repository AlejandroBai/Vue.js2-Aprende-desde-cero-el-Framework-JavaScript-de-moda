new Vue({
  el: '#app',
  data: {
    busqueda: '',
    rangoElegido: '',
    rangoEdad: ['+18', '+12', 'TP'],
    minimo: 0,
    ordenValoracion: 1,
    ordenAlfabetico: 1,
    textoValoracion: 'Puntuación',
    textoAlfabetico: 'Alfabéticamente',
    peliculas: [{
        titulo: 'Crepúsculo',
        rangoEdad: '+12',
        valoracion: 4.8
      },
      {
        titulo: 'Coco',
        rangoEdad: 'TP',
        valoracion: 8.9
      },
      {
        titulo: 'El Club de la Lucha',
        rangoEdad: '+18',
        valoracion: 9.2
      },
      {
        titulo: 'El Exorcista',
        rangoEdad: '+18',
        valoracion: 8
      },
      {
        titulo: 'Pulp Fiction',
        rangoEdad: '+18',
        valoracion: 9.1
      },
      {
        titulo: 'Fast & Furious 8',
        rangoEdad: '+12',
        valoracion: 5
      },
      {
        titulo: 'Reservoir Dogs',
        rangoEdad: '+18',
        valoracion: 9
      },
      {
        titulo: 'Piratas del Caribe',
        rangoEdad: '+12',
        valoracion: 8.2
      },
      {
        titulo: 'Shrek',
        rangoEdad: 'TP',
        valoracion: 8.2
      }
    ]
  },
  computed: {
    funcionamiento() {
      var orden = this.orden;
      var busqueda = this.busqueda.toLowerCase();
      var rangoEdad = this.rangoElegido;
      var minimo = this.minimo;

      return this.peliculas.filter(function (pelicula) {
        var filtrado = pelicula.rangoEdad.includes(rangoEdad);
        var filtrado2 = pelicula.titulo.toLowerCase().includes(busqueda);
        var filtrado3 = pelicula.valoracion >= minimo;
        return filtrado && filtrado2 && filtrado3;
      });
    }
  },
  methods: {
    ordenarValoracion() {
      let ordenValoracion = this.ordenValoracion;
      if (this.ordenValoracion === 1) {
        this.peliculas.sort(function (a, b) {
          return (a.valoracion - b.valoracion) * ordenValoracion;
        });
        this.textoValoracion = 'Ver mejores arriba';
        this.ordenValoracion = -1;
      } else {
        this.peliculas.sort(function (a, b) {
          return (a.valoracion - b.valoracion) * ordenValoracion;
        });
        this.textoValoracion = 'Ver peores arriba';
        this.ordenValoracion = 1;
      }
    },
    ordenarAlfabeticamente() {
      let ordenAlfabetico = this.ordenAlfabetico;
      let peliculas = this.peliculas;
      if (this.ordenAlfabetico === 1) {
        this.peliculas.sort(function (a, b) {
          var x = a.titulo;
          var y = b.titulo;
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        });
        this.textoAlfabetico = 'Alfabéticamente Z - A';
        this.ordenAlfabetico = -1;
      } else {
        this.peliculas.sort(function (a, b) {
          return (a.titulo > b.titulo) ? 1 : ((b.titulo > a.titulo) ? -1 : 0);
        });
        this.peliculas.reverse();
        this.textoAlfabetico = 'Alfabéticamente A - Z';
        this.ordenAlfabetico = 1;
      }
    }
  }
});