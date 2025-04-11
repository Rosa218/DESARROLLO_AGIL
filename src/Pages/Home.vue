<script>
export default {
    data() {
        return {
            display: '',
            currentValue: 0,
        };
    },
    methods: {
        agregarNumero(numero) {
            this.display += numero;
        },
        calculo() {
            try {
                this.currentValue = eval(this.display);
                this.display = this.currentValue.toString();
            } catch (error) {
                this.display = 'Error';
            }
        },
        LimpiarDisplay() {
            this.display = '';
        },
        EliminarNumero() {
            this.display = this.display.slice(0, -1);
        }
    }  
}
</script>

<template>
<div class="Container d-flex justify-content-center mt-4" style="height: 500px;">
    <div class="card p-4" style="width: 400px; background-color: #8cbdfc;">
        <div class="card-body">
            <h4 class="text-center mb-3">Calculadora v2</h4>
            <div class="mb-3">
                <input type="text" class="form-control" v-model="display" disabled>
            </div>
            <div class="d-flex justify-content-between mb-2">
                <button class="btn btn-secondary" @click="agregarNumero('%')">%</button>
                <button class="btn btn-secondary" @click="LimpiarDisplay">CE</button>
                <button class="btn btn-secondary" @click="LimpiarDisplay">C</button>  
                <button class="btn btn-danger" @click="EliminarNumero">B</button>    
            </div>
            <div class="d-flex justify-content-between mb-2">
                <button class="btn btn-secondary" @click="agregarNumero(9)">9</button>
                <button class="btn btn-secondary" @click="agregarNumero(8)">8</button>
                <button class="btn btn-secondary" @click="agregarNumero(7)">7</button>  
                <button class="btn btn-danger" @click="agregarNumero('/')">/</button>    
            </div>
            <div class="d-flex justify-content-between mb-2">
                <button class="btn btn-secondary" @click="agregarNumero(4)">4</button>
                <button class="btn btn-secondary" @click="agregarNumero(5)">5</button>
                <button class="btn btn-secondary" @click="agregarNumero(6)">6</button>      
                <button class="btn btn-danger" @click="agregarNumero('*')">X</button>
            </div>
            <div class="d-flex justify-content-between mb-2">
                <button class="btn btn-secondary" @click="agregarNumero(1)">1</button>
                <button class="btn btn-secondary" @click="agregarNumero(2)">2</button>
                <button class="btn btn-secondary" @click="agregarNumero(3)">3</button>      
                <button class="btn btn-danger" @click="agregarNumero('-')">-</button>
            </div>
            <div class="d-flex justify-content-between">
                <button class="btn btn-success" @click="calculo">=</button>
                <button class="btn btn-secondary" @click="agregarNumero(0)">0</button>
                <button class="btn btn-secondary" @click="agregarNumero('.')">.</button>      
                <button class="btn btn-danger" @click="agregarNumero('+')">+</button>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.card {
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    font-size: 20px;
}

.card-body {
    background-color: #8cbdfc;
}

.card-body input {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 15px;
    font-size: 22px;
    text-align: right;
}

.card-body button {
    border-radius: 5px;
    font-size: 22px;
    padding: 10px 16px;
    width: 70px;
}
</style>
