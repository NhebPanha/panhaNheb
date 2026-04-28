<template>
    <div class="bg-background text-on-background font-body min-h-screen transition-colors duration-500">
        <section id="experience" class="pt-24 md:pt-32 pb-16 md:pb-24 max-w-7xl mx-auto px-4 md:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">

                <!-- Left Panel -->
                <div class="lg:col-span-4 sticky top-32 h-fit">
                    <span class="font-label text-xs tracking-[0.2em] text-primary uppercase mb-4 block">
                        Professional Journey
                    </span>

                    <h2 class="font-headline text-4xl md:text-5xl font-black tracking-tighter leading-none mb-8">
                        The <span class="text-secondary-fixed-dim">Architectural</span><br />
                        Timeline
                    </h2>

                    <p class="text-on-surface-variant text-lg leading-relaxed max-w-xs">
                        Synthesizing high-end digital aesthetics with robust backend infrastructure.
                    </p>
                </div>

                <!-- Timeline -->
                <div class="lg:col-span-8 relative pl-12 md:pl-24">

                    <!-- Vertical Line -->
                    <div class="absolute left-4 md:left-12 top-0 bottom-0 w-px timeline-line opacity-30"></div>

                    <!-- Timeline Items -->
                    <div v-for="(item, index) in experiences" :key="index"
                        class="relative mb-24 group opacity-0 translate-y-8 animate-fadeIn"
                        :style="{ animationDelay: `${index * 0.2}s` }">
                        <!-- Dot -->
                        <div class="absolute -left-10 md:-left-[52px] top-2 w-4 h-4 rounded-full border-4 border-background z-10"
                            :class="item.dotColor"></div>

                        <!-- Card -->
                        <div
                            class="glass-panel p-8 power-rail-left hover:translate-x-2 transition-transform duration-300">
                            <span
                                class="font-label text-[10px] tracking-widest text-secondary-dim font-bold uppercase block mb-2">
                                {{ item.year }}
                            </span>

                            <h3 class="font-headline text-2xl font-bold mb-1">{{ item.role }}</h3>

                            <p class="text-sm mb-6" :class="item.textColor">{{ item.company }}</p>

                            <p class="text-sm text-on-surface-variant mb-4">{{ item.description }}</p>

                            <div class="flex flex-wrap gap-2">
                                <span v-for="tech in item.tech" :key="tech"
                                    class="bg-surface-container px-3 py-1 text-[10px] uppercase">
                                    {{ tech }}
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- ================= CONTACT ================= -->
        <section id="contact"
            class="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start pb-16 md:pb-24 max-w-7xl mx-auto px-4 md:px-8">

            <!-- Left Contact Info -->
            <div class="lg:col-span-5">
                <h2 class="font-headline text-4xl md:text-5xl font-black tracking-tighter mb-12">
                    Establish <br />
                    <span class="text-tertiary">Connectivity</span>
                </h2>

                <div class="space-y-12">
                    <div>
                        <span class="text-xs uppercase block mb-2">Direct Channel</span>
                        <p class="text-2xl font-bold">hello@luminous.arch</p>
                    </div>

                    <div>
                        <span class="text-xs uppercase block mb-2">HQ Location</span>
                        <p class="text-2xl font-bold">Neo-Tokyo, Sector 7</p>
                    </div>
                </div>
            </div>

            <!-- Contact Form -->
            <div class="lg:col-span-7">
                <div class="glass-panel p-10 md:p-16">
                    <form @submit.prevent="handleSubmit" class="space-y-10">

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <input v-model="form.name" placeholder="Your Name" class="input-style" />
                            <input v-model="form.email" type="email" placeholder="email@address.com"
                                class="input-style" />
                        </div>

                        <select v-model="form.type" class="input-style">
                            <option>Project Inquiry</option>
                            <option>Collaboration</option>
                            <option>Audit</option>
                            <option>General</option>
                        </select>

                        <textarea v-model="form.message" rows="4" placeholder="Your message..."
                            class="input-style resize-none"></textarea>

                        <button class="bg-white text-black border border-gray-200 px-8 md:px-12 py-4 uppercase text-xs tracking-widest w-full md:w-auto
         hover:shadow-lg transition-shadow duration-300
         dark:bg-black dark:text-white dark:border-gray-800">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

        </section>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";

// Dark mode toggle
const isDark = ref(false);
const toggleDark = () => {
    isDark.value = !isDark.value;
    document.documentElement.classList.toggle("dark", isDark.value);
    localStorage.setItem("theme", isDark.value ? "dark" : "light");
};
onMounted(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        isDark.value = true;
        document.documentElement.classList.add("dark");
    }
});

// Experiences for timeline
const experiences = [
    {
        year: "2022 — Present",
        role: "Lead Systems Architect",
        company: "Quantum Dynamics Inc.",
        description: "Migrated systems to micro-frontend architecture.",
        tech: ["Cloud", "Rust", "WASM"],
        dotColor: "bg-primary shadow-[0_0_15px_rgba(129,28,217,0.8)]",
        textColor: "text-primary",
    },
    {
        year: "2020 — 2022",
        role: "Senior Creative Developer",
        company: "Neon Studio London",
        description: "Built immersive WebGL experiences.",
        tech: ["Three.js", "GLSL", "Next.js"],
        dotColor: "bg-secondary shadow-[0_0_15px_rgba(0,251,251,0.8)]",
        textColor: "text-secondary",
    },
    {
        year: "2018 — 2020",
        role: "Full Stack Engineer",
        company: "Base Protocol",
        description: "Worked on blockchain fintech systems.",
        tech: ["Node.js", "PostgreSQL", "Auth0"],
        dotColor: "bg-tertiary shadow-[0_0_15px_rgba(255,129,245,0.8)]",
        textColor: "text-tertiary",
    },
];

// Contact form
const form = reactive({
    name: "",
    email: "",
    type: "Project Inquiry",
    message: "",
});

const handleSubmit = () => {
    console.log("Form Data:", form);
};
</script>
<style scoped>
/* Fade in animation for timeline */
@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fadeIn {
    animation: fadeIn 0.6s forwards;
}

/* Glass panel styling */
.glass-panel {
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(12px);
    border-radius: 12px;
    transition: transform 0.3s;
}

.dark .glass-panel {
    background: rgba(131, 130, 130, 0.144);
}

/* Input styling */
.input-style {
    width: 100%;
    border-bottom: 2px solid #ccc;
    padding: 10px 0;
    background: transparent;
    outline: none;
    transition: border-color 0.3s;
}

.dark .input-style {
    border-color: #555;
    color: #f5f5f5;
}

.input-style:focus {
    border-color: #811cd9;
}

/* Timeline line */
.timeline-line {
    background: linear-gradient(to bottom, #811cd9, #00fbfb, #ff81f5);
}

/* Button hover shadow */
button:hover {
    box-shadow: 0 8px 20px rgba(129, 28, 217, 0.4);
}
</style>