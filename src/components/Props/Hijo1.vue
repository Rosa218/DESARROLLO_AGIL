<script setup>
import { ref } from 'vue' /*  al usar ref , usamos lo que son las referencias hacia variables*/
defineProps({
  edad: String
})

</script>

<template>
 <h6>Soy el componente Hijo1</h6> 
 <p>Mi edad es: {{ edad }}</p>

 
</template>

<style scoped>

</style>
