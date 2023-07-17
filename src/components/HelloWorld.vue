<script setup lang="ts">
import { useFeatureStore } from '@/stores';

const featureStore = useFeatureStore();
const features = featureStore.$state.features;
</script>
<template>
    <div class="container">
        <!-- Text de Welcome + features -->
        <h1 class="title">Welcome <span class="text-accent">VFull</span>! All Features:</h1>
        <div class="container-features">
            <Feature v-for="feature in features" :key="feature.id" :feature="feature"></Feature>
        </div>
    </div>
</template>
<style scoped>

.container{
    @apply bg-accent m-6 p-2 rounded-2xl flex flex-col
}

.container-features{
    @apply flex flex-wrap justify-center;
}

.title { 
    @apply w-1/2 text-4xl text-center text-base-content text-zinc-50 font-bold bg-slate-950 p-2 rounded-2xl mx-auto
}

</style>