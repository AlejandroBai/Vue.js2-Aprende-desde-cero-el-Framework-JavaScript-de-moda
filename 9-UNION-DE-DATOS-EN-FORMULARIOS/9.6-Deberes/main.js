new Vue({
  el: '#app',
  data: {
    nombre: '',
    email: '',
    contrasena: '',
    edad: '',
    sexo: '',
    newsletter: [],
    mensaje: 'Escribe tu mensaje',
    seleccionada: '',
    select: ['Alta', 'Normal', 'Baja'],
    enviado: false
  },
  methods: {
    enviarDatos() {
      this.enviado = true;
    }
  }
});
