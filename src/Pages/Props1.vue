<template>
    <div>
      <h1 class="titulo-padre">Soy componente padre</h1>
  
      <div class="hijo">
        <h4 class="subtitulo">Soy componente hijo 1</h4>
        <p class="numero">10</p>
      </div>
  
      <div class="hijo">
        <h4 class="subtitulo">Soy componente hijo 2</h4>
        <p class="numero">4</p>
      </div>
    </div>
  </template>
  
  <style scoped>
  /* Color blanco para todo el texto */
  * {
    color: rgb(20, 19, 19);
  }
  
  .titulo-padre {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .hijo {
    margin-bottom: 20px;
  }
  
  .subtitulo {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .numero {
    font-size: 20px;
    margin: 0;
  }
  </style>
  