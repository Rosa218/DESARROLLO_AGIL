<template>
    <div id="app" class="full-screen">
      <div class="content">
        <h1 class="title">HOLA MUNDO</h1>
        <button class="btn" @click="alertMessage">Hola soy un boton</button>
        <img
          class="imagen-central"
          src="https://imgs.search.brave.com/ul9GRrFxTHAOLTdEXbOda0sJ5_8FIpG_mCDJrs4cgs0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4w/My5sb2xhZmxvcmEu/Y29tL2Jvbm55Z2lm/dC9sZjM5Ni0xL00v/Y2hyaXN0bWFzLWV2/ZS1lbW90aW9uLWxv/bGEyMTMtMS04ZDUy/YjRiYjIxYWQxNGYt/OWIyZDlmNy5qcGc"
          alt="Imagen mágica"
        />
        <p class="quote">
         Una curiosidad sobre las rosas es que existen más de 35,000 especies diferentes de rosas en el mundo.
 Además, las rosas rojas Freedom y Red Naomi son las más vendidas como flores cortadas.
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      alertMessage() {
        alert('¡Hola! Has hecho clic en el botón.');
      }
    }
  };
  </script>
  
  <style scoped>
  .full-screen {
    min-height: 100vh;
    background: url('') no-repeat center center fixed;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    color: white;
  }
  
  .content {
    text-align: center;
    background: rgba(0, 0, 0, 0.6);
    padding: 2rem;
    border-radius: 15px;
    max-width: 600px;
    width: 100%;
  }
  
  .title {
    font-size: 4rem;
    font-weight: bold;
    color: red;
    margin-bottom: 1.5rem;
  }
  
  .btn {
    background-color: white;
    color: black;
    border: none;
    padding: 0.6rem 1.2rem;
    font-size: 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;
    cursor: pointer;
  }
  
  .btn:hover {
    background-color: #ddd;
  }
  
  .imagen-central {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    margin: 1rem 0;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
  }
  
  .quote {
    margin-top: 1.5rem;
    font-size: 1rem;
    font-style: italic;
  }
  </style>
  