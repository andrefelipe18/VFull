<script setup>
import { useCounterStore } from '@/stores/'

const counterStore = useCounterStore()
</script>
<template>
  <h1>Bem vindo ao Pinia</h1>
  <p>Contador: {{ counterStore.counter }}</p>
  <p>Double Count: {{ counterStore.doubleCount }}</p>
  <button @click="counterStore.increment">Incrementar</button>
</template>