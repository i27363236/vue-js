<script setup>
import HelloWorld from './components/HelloWorld.vue'
const todos = ref([
  {id:1, text: '練習Vue Props'},
  {id:2, text: '練習Vue Emit'},
])
</script>

<template>
  <HelloWorld />
</template>
