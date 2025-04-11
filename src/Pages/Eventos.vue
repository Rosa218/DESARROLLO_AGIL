<template>
    <div class="container d-flex justify-content-center align-items-center" style="height: 100vh;">
        <div class="row text-center">
            <div class="mb-4">
                <h4>Evento Click</h4>
                <div class="d-flex justify-content-center">
                    <button @click="clic" class="btn btn-danger mx-2" type="button">Dale clic</button>
                    <button @click="soyButon" class="btn btn-warning mx-2" type="button">Dale clic 2</button>
                </div>
            </div>
            <div class="mb-4">
                <h4>Evento Change</h4>
                <label class="input-group-text">Ingresa tu nombre</label>
                <input class="form-control" type="text" id="nombre" @change="nombreE">
                <p class="mt-2">El nombre ingresado es: <strong>{{ nombre }}</strong></p>
            </div>
            <div class="mb-4">
                <h3>Evento de mouseenter y mouseleave</h3>
                <div
                    class="text-center"
                    style="color:black; width: 300px;height: 200px;background-color: blueviolet;text-align: center;padding: 15px; border-radius: 14px;"
                    @mouseenter="mostrarMensaje"
                    @mouseleave="ocultarMensaje"
                >
                    <p>Pase el mouse</p>
                    <p>{{ mensaje }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nombre: '',
            mensaje: '',
        }
    },
    methods: {
        clic() {
            alert("Gracias por darle clic")
        },
        soyButon() {
            alert("Soy botón")
        },
        nombreE(event) {
            this.nombre = event.target.value;
        },
        mostrarMensaje() {
            this.mensaje = "El mouse está dentro del rectángulo"
        },
        ocultarMensaje() {
            this.mensaje = "El mouse está fuera del rectángulo"
        }
    }
}
</script>

<style>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.row {
    text-align: center;
}

button {
    margin: 0 10px;
}
</style>
