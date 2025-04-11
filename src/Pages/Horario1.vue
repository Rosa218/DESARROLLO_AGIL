<template>
    
    <div class="container mt-5 p-4 shadow-lg rounded">
      <h3 class="title">Horario</h3>
      <div class="table-responsive">
        <!--Informacion del alumo nc, nombre c grado 14, periodo ener-jun25-->
        <table class="table table-bordered text-center align-middle shadow-lg rounded w-100">
          <thead class="table-dark text-white">
            <tr>
              <th scope="col">Numero de Control</th>
              <th scope="col">Nombre</th>
              <th scope="col">Carrera</th>
              <th scope="col">Periodo</th>
             
             
            </tr>
          </thead>
          <tbody>
            <tr v-for="(d, index) in datos" :key="index">
             
              <td :class="getDatos(d.nc)" class="p-3">{{ d.nc || 'Libre' }}</td>
              <td :class="getDatos(d.nombre)" class="p-3">{{ d.nombre || 'Libre' }}</td>
              <td :class="getDatos(d.carrera)" class="p-3">{{ d.carrera || 'Libre' }}</td>
              <td :class="getDatos(d.periodo)" class="p-3">{{ d.periodo || 'Libre' }}</td>
              
            </tr>
          </tbody>
        </table>
      
        <!--Horarios-->
        <table class="table table-bordered text-center align-middle shadow-lg rounded w-100">
          <thead class="table-dark text-white">
            <tr>
              <th scope="col">Hora</th>
              <th scope="col">Lunes</th>
              <th scope="col">Martes</th>
              <th scope="col">Miércoles</th>
              <th scope="col">Jueves</th>
              <th scope="col">Viernes</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(h, index) in horario" :key="index">
              <td class="fw-bold bg-secondary text-white">{{ h.hora }}</td>
              <td :class="getClass(h.lunes)" class="p-3">{{ h.lunes || 'Libre' }}</td>
              <td :class="getClass(h.martes)" class="p-3">{{ h.martes || 'Libre' }}</td>
              <td :class="getClass(h.miercoles)" class="p-3">{{ h.miercoles || 'Libre' }}</td>
              <td :class="getClass(h.jueves)" class="p-3">{{ h.jueves || 'Libre' }}</td>
              <td :class="getClass(h.viernes)" class="p-3">{{ h.viernes || 'Libre' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const horario = ref([
    { hora: '7:00 - 9:00', lunes: 'Programación Lógica Funcional', martes: 'Inteligencia Artificial', miercoles: 'Desarrollo Ágil', jueves: 'Programación Lógica y funcional', viernes: '' },
    { hora: '9:00 - 11:00', lunes: 'Desarrollo Ágil', martes: 'Administración de Redes', miercoles: '', jueves: 'Administración de Redes', viernes: 'Desarrollo Agil' },
    { hora: '11:00 - 13:00', lunes: '', martes: 'Desarrollo en la Nube', miercoles: 'Desarrollo en la Nube', jueves: 'Inteligencia Artificial', viernes: 'Desarrollo en la Nube' },
    { hora: '13:00 - 15:00', lunes: '', martes: '', miercoles: 'Desarrollo con Realidad Aumentada', jueves: 'Desarrollo con Realidad Aumentada', viernes: '' },
    { hora: '15:00 - 17:00', lunes: '', martes: 'Desarrollo con Realidad Aumentada', miercoles: '', jueves: '', viernes: '' },
  ]);

  const datos= ref([
    {nc: '18620216', nombre: 'Rosa Salazar Doroteo', carrera: 'ISC', periodo: 'Enero-Junio 2025'}
    ])


  
  const getClass = (materia) => {
    return materia ? 'table-success text-dark fw-bold' : 'table-light text-muted';
  };

  const getDatos = (datos) => {
    return datos ? 'table-success text-dark fw-bold' : 'table-light text-muted';
  };
  
  </script>
  
  <style scoped>
  
.container {
  
  min-height: 100vh;
  background-color: transparent; /* Negro con transparencia */
  backdrop-filter: blur(4px); /* Difumina el fondo si hay algo detrás */
  font-family: 'Lora', serif;
  display: flex;
  flex-direction: column;
  align-items: stretch;


}

.table {
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  transition: transform 0.3s ease;
}

th, td {
  padding: 14px;
  font-size: 1.1rem;
  text-align: center;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
}

th {
  background-color: #0c7ae8 !important;
  color: #fff;
  text-transform: uppercase;
}

td {
  background-color: #f8f9fa;
}

tr:hover {
  transform: scale(1.02);
}

.table-success {
  background-color: #70b77e !important;
  font-weight: bold;
}

.table-light {
  background-color: #e9ecef !important;
  color: #6c757d;
}

.fw-bold {
  font-weight: bold;
  background-color: #d6d8db !important;
  color: #495057;
}

.title {
  font-size: 2.2rem;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  text-align: center;
  background: linear-gradient(90deg, #4a90e2, #34495e);
  color: white;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0px 6px 15px rgba(159, 210, 104, 0.3);
  margin-bottom: 30px;
}

</style>

  
  