<template>
    <div class="container mt-5 d-flex justify-content-center align-items-center">
      <div class="card shadow p-5 calculadora-grande">
        <h1 class="text-center mb-5 display-4">Calculadora</h1>
  
        <div class="mb-4">
          <label for="numero1" class="form-label fs-4">Número 1</label>
          <input
            type="number"
            class="form-control form-control-lg"
            v-model="numero1"
          />
        </div>
  
        <div class="mb-4">
          <label for="numero2" class="form-label fs-4">Número 2</label>
          <input
            type="number"
            class="form-control form-control-lg"
            v-model="numero2"
          />
        </div>
  
        <div class="d-flex justify-content-center gap-3 flex-wrap mb-4">
          <button @click="sumar" class="btn btn-danger btn-xl px-4 py-2 fs-4">
            Sumar
          </button>
          <button @click="restar" class="btn btn-warning btn-xl px-4 py-2 fs-4">
            Restar
          </button>
          <button
            @click="multiplicar"
            class="btn btn-success btn-xl px-4 py-2 fs-4"
          >
            Multiplicar
          </button>
          <button @click="dividir" class="btn btn-primary btn-xl px-4 py-2 fs-4">
            Dividir
          </button>
        </div>
  
        <h2 class="text-center mt-4 fs-3">
          Resultado: <strong>{{ resultado }}</strong>
        </h2>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        numero1: 0,
        numero2: 0,
        resultado: 0,
      };
    },
    methods: {
      sumar() {
        this.resultado =
          parseFloat(this.numero1) + parseFloat(this.numero2);
      },
      restar() {
        this.resultado =
          parseFloat(this.numero1) - parseFloat(this.numero2);
      },
      multiplicar() {
        this.resultado =
          parseFloat(this.numero1) * parseFloat(this.numero2);
      },
      dividir() {
        if (parseFloat(this.numero2) !== 0) {
          this.resultado =
            parseFloat(this.numero1) / parseFloat(this.numero2);
        } else {
          this.resultado = 'Error: División por cero';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    min-height: 100vh;
  }
  
  .calculadora-grande {
    width: 800%;
    max-width: 90%;
    font-size: 1.5rem;
  }
  
  input[type='number'] {
    font-size: 1.5rem;
  }
  </style>
  