<template >
    <div class="conteiner">
        <div class="row mt-4">
            <div>
                <h4>Evento Clic</h4>
                <button @click="clic" class="btn btn-danger" type="button">Dale Clic</button>
                <button @click="soyButon" class="btn btn-warning mx-2" type="button">Dale Clic 2</button>
            </div>
            <div>
                <h4>Evento Change</h4>
                <label class="input-group-text" for="">Ingresa tu nombre</label>
                <input class="form-control mt-2" type="text" id="nombre" @change="nombreE">
                <p>El nombre ingresado es:<strong>{{nombre}}</strong></p>

            </div>
            <h3>Evento mouseover y  mouseleave</h3>
            <div style="color:#ffff; width: 200px; height: 200px; background-color: black; text-align: center; padding: 15px; border-radius: 14px;"
             @mouseover="mostrarMensaje" @mouseleave="ocultarMensaje">
             <p >pase el mouse</p>
             <p>{{ mensaje }}</p>


            </div>
     
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            nombre: ''
            , mensaje: ''
        }
    },

    methods:{
        clic(){
            alert("Gracias por darle clic");
        },
        soyButon(){
            alert("Soy un boton de advertencia");
        },
        nombreE(event){
            this.nombre=event.target.value

        }
        , mostrarMensaje(){
            this.mensaje = "El mouse esta dentro del rectangulo";
        },
        ocultarMensaje(){
            this.mensaje = "El mouse esta fuera del rectangulo";
        }

    }
}
</script>
<style >
    
</style>