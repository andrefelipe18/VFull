<script setup lang="ts">

const props = defineProps({
    feature: {
        type: Object,
        required: true
    }
});
</script>
<template>
    <div class="card w-80 bg-base-100 shadow-xl m-2">
        <div class="card-body">
        <h2 class="card-title">{{ feature.name }}</h2>
        <!-- Link da documentação em um botao accent -->
        <a :href="feature.link" target="_blank" class="btn btn-accent">Documentation</a>
        </div>
    </div>   
</template>
<style scoped>

</style>