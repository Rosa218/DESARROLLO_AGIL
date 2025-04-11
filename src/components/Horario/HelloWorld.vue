<script setup>
import { ref } from 'vue' /*  al usar ref , usamos lo que son las referencias hacia variables*/
defineProps({
  msg: String
})

</script>

<template>
 
<h1>{{ msg }}</h1>
 
</template>

<style scoped>

</style>
