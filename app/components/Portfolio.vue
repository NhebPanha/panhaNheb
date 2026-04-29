<template>
    <div id="projects" class="bg-background text-on-background font-body">
        <!-- Main -->
        <main class="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-8 max-w-7xl mx-auto">
            <!-- Hero -->
            <section class="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-32 items-end">

                <div class="lg:col-span-8">
                    <span class="font-label text-xs tracking-[0.2em] text-tertiary mb-4 block">
                        IDENTIFICATION: ARCHITECT_01
                    </span>

                    <h1
                        class="font-headline text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
                        Crafting <span class="text-secondary">Digital</span><br />
                        Refraction.
                    </h1>

                    <p class="text-xl md:text-2xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
                        A Full Stack Developer dedicated to
                        <span class="font-semibold text-on-surface">Ethical Futurism</span>.
                    </p>
                </div>

                <!-- Status Card -->
                <div class="lg:col-span-4 hidden lg:block">
                    <div class="glass-panel p-8 rounded-xl power-rail-pink relative overflow-hidden">
                        <p class="text-sm font-medium">Available for Innovation</p>
                    </div>
                </div>

            </section>

            <!-- About -->
            <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-6">

                <!-- About Card -->
                <div class="md:col-span-4 lg:col-span-7 glass-panel rounded-xl p-10">

                    <h2 class="font-headline text-3xl font-bold mb-6 flex items-center gap-3">
                        <span class="material-symbols-outlined text-primary">fingerprint</span>
                        About The Architect
                    </h2>

                    <p class="text-on-surface-variant mb-6">
                        I specialize in bridging backend logic and frontend UX.
                    </p>

                    <div class="flex gap-4 mt-8">
                        <div class="bg-surface-container-high px-4 py-2">
                            <span class="text-xs">YEARS_EXP</span>
                            <div class="font-bold text-primary">06+</div>
                        </div>

                        <div class="bg-surface-container-high px-4 py-2">
                            <span class="text-xs">PROJECTS</span>
                            <div class="font-bold text-secondary">42</div>
                        </div>
                    </div>

                </div>

                <!-- Skills -->
                <div class="md:col-span-4 lg:col-span-5 flex flex-col gap-6">

                    <!-- Frontend -->
                    <div class="glass-panel p-8 rounded-xl power-rail-cyan">
                        <h3 class="text-secondary mb-4">Frontend</h3>

                        <div v-for="skill in frontendSkills" :key="skill.name" class="mb-4">
                            <div class="flex justify-between">
                                <span>{{ skill.name }}</span>
                                <span>{{ skill.level }}%</span>
                            </div>
                            <div class="h-1 bg-gray-200">
                                <div class="h-full bg-secondary" :style="{ width: skill.level + '%' }"></div>
                            </div>
                        </div>
                    </div>

                    <!-- Backend -->
                    <div class="glass-panel p-8 rounded-xl power-rail-pink">
                        <h3 class="text-tertiary mb-4">Backend</h3>

                        <div v-for="skill in backendSkills" :key="skill.name" class="mb-4">
                            <div class="flex justify-between">
                                <span>{{ skill.name }}</span>
                                <span>{{ skill.level }}%</span>
                            </div>
                            <div class="h-1 bg-gray-200">
                                <div class="h-full bg-tertiary" :style="{ width: skill.level + '%' }"></div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </main>

    </div>
</template>

<script setup>
const frontendSkills = [
    { name: "Flutter", level: 95 },
    { name: "Vue.js", level: 90 }
]

const backendSkills = [
    { name: "Laravel", level: 88 },
    { name: "Supabase", level: 92 },
    { name: "PostgreSQL", level: 85 }
]

</script>
<style>
.glass-panel {
    background: #ffffff66;
    backdrop-filter: blur(12px);
}

.power-rail-cyan {
    border-left: 2px solid #00fbfb;
}

.power-rail-pink {
    border-left: 2px solid #ff81f5;
}
</style>