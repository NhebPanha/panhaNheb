<template>
    <div class="bg-background text-on-background font-body transition-colors duration-500">
        <section id="about" class="pt-24 md:pt-32 pb-16 md:pb-24 max-w-7xl mx-auto px-4 md:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
                <div class="lg:col-span-4">
                    <span class="font-label text-xs tracking-[0.2em] text-primary uppercase mb-4 block">
                        Get to know me
                    </span>
                    <h2 class="font-headline text-4xl md:text-5xl font-black tracking-tighter leading-none mb-8">
                        About <span class="text-secondary-fixed-dim">Me</span>
                    </h2>
                </div>
                <div class="lg:col-span-8">
                    <div class="glass-panel p-8 md:p-12">
                        <p class="text-on-surface-variant text-lg leading-relaxed mb-6">
                            I am a passionate software engineer and creative developer who synthesizes high-end digital aesthetics with robust backend infrastructure. With an eye for design and a focus on performance, I create experiences that leave a lasting impression.
                        </p>
                        <p class="text-on-surface-variant text-lg leading-relaxed">
                            My journey began with a fascination for web technologies, evolving into an expertise spanning from immersive WebGL experiences to micro-frontend architectures.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
</script>

<style scoped>
.glass-panel {
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(12px);
    border-radius: 12px;
    transition: transform 0.3s;
}

.dark .glass-panel {
    background: rgba(131, 130, 130, 0.144);
}
</style>
