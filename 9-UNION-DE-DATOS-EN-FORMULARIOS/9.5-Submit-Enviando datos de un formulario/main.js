new Vue({
  el: '#app',
  data: {
    nombre: '',
    email: '',
    enviado: false
  },
  methods: {
    enviarDatos() {
      this.enviado = true;
    }
  }
});
