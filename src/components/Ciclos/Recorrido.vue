<script>
export default {
    data() {
        return {
            // Datos de alumnos con id, apellidos y lo que les gusta
            alumnos: [
                { id: 1, nc: 12345, nombre: 'Rosa', apellidoPaterno: 'Martínez', apellidoMaterno: 'González', carrera: 'ISC', meGusta: 'Leer libros' },
                { id: 2, nc: 12346, nombre: 'Juan', apellidoPaterno: 'Pérez', apellidoMaterno: 'López', carrera: 'TICS', meGusta: 'Jugar videojuegos' },
                { id: 3, nc: 12347, nombre: 'Efrain', apellidoPaterno: 'Rodríguez', apellidoMaterno: 'Morales', carrera: 'ISC', meGusta: 'Cine' },
                { id: 4, nc: 12348, nombre: 'Luis', apellidoPaterno: 'Sánchez', apellidoMaterno: 'Torres', carrera: 'TICS', meGusta: 'Programar' },
                { id: 5, nc: 12349, nombre: 'María', apellidoPaterno: 'Gómez', apellidoMaterno: 'Hernández', carrera: 'ISC', meGusta: 'Dibujar' },
                { id: 6, nc: 12350, nombre: 'Ana', apellidoPaterno: 'Ramírez', apellidoMaterno: 'Jiménez', carrera: 'TICS', meGusta: 'Leer libros' },
                { id: 7, nc: 12351, nombre: 'Pedro', apellidoPaterno: 'Torres', apellidoMaterno: 'García', carrera: 'ISC', meGusta: 'Cine' },
                { id: 8, nc: 12352, nombre: 'José', apellidoPaterno: 'Hernández', apellidoMaterno: 'Martínez', carrera: 'TICS', meGusta: 'Jugar videojuegos' },
                { id: 9, nc: 12353, nombre: 'Luisa', apellidoPaterno: 'García', apellidoMaterno: 'Pérez', carrera: 'ISC', meGusta: 'Dibujar' },
            ]
        }
    }
}
</script>
<template>
    <div class="container"> 
        <h3 class="mt-4">Lista de alumnos</h3>
        <ul>
            <li v-for="alumno in alumnos" :key="alumno.id" class="alumno-item">
                <strong class="lab1">ID: </strong>&nbsp;<span class="label">{{ alumno.id }} </span>  &nbsp;&nbsp;&nbsp;
                <strong class="lab1">NC: </strong>&nbsp;<span >{{ alumno.nc }} </span>  &nbsp;&nbsp;&nbsp;
                <strong class="lab1">Nombre Completo: </strong>&nbsp;<span class="label">{{ alumno.nombre }}</span>&nbsp;
                <span >{{ alumno.apellidoPaterno }}</span>&nbsp;
                <span >{{ alumno.apellidoMaterno }}</span>&nbsp;&nbsp;&nbsp;
                <strong class="lab1">Carrera: </strong>&nbsp;<span >{{ alumno.carrera }}</span>&nbsp; &nbsp;&nbsp;
                <strong class="lab1">Le gusta: </strong>&nbsp;<span >{{ alumno.meGusta }}</span>
            </li>
        </ul>
    </div>
</template>
<style>
h3 {
    color: rgb(238, 55, 55);
    background-color: #215487; /* Color serio */
    border-radius: 15px;
    padding: 10px;
    text-align: center;
}

ul {
    list-style-type: none;
    padding: 0;
    color: #34495e; /* Color de texto más serio */
}

li {
    color: white;
    background-color: #215487; /* Fondo gris oscuro */
    border-radius: 15px;
    padding: 10px;
    margin: 10px;
    font-size: 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
}
.lab1 {
    color: #1b1d1b; /* Color gris claro */
    font-weight: bold;
    text-align: center;
}


.container {
    padding: 20px;
    text-align:justify;
    background-color: #bdc3c7; /* Color gris */
    border-radius: 15px;
    margin-top: 20px;
}

strong {
    color: #ecf0f1; /* Color gris claro */
}
</style>
