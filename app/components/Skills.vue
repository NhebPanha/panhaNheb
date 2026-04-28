<template>
    <div class="bg-background text-on-background font-body transition-colors duration-500">
        <section id="skills" class="pt-24 md:pt-32 pb-16 md:pb-24 max-w-7xl mx-auto px-4 md:px-8">
            <div class="text-center mb-16">
                <span class="font-label text-xs tracking-[0.2em] text-primary uppercase mb-4 block">
                    Core Competencies
                </span>
                <h2 class="font-headline text-4xl md:text-5xl font-black tracking-tighter leading-none">
                    My <span class="text-tertiary">Skills</span>
                </h2>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div v-for="(skill, index) in skills" :key="index" 
                    class="glass-panel p-6 text-center font-bold flex flex-col items-center justify-center gap-4 hover:-translate-y-2 transition-transform duration-300">
                    <span class="text-xl">{{ skill }}</span>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const skills = ref([
    'Vue.js & Nuxt 3',
    'React & Next.js',
    'Tailwind CSS',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
    'WebGL & Three.js',
    'Cloud Architecture'
])
</script>

<style scoped>
.glass-panel {
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(12px);
    border-radius: 12px;
}

.dark .glass-panel {
    background: rgba(131, 130, 130, 0.144);
}
</style>
