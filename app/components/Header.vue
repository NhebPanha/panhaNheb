<template>
  <!-- TopNavBar -->
  <nav
    class="fixed top-0 w-full z-50 glass-nav shadow-[0_20px_40px_rgba(0,245,255,0.06)] transition-colors duration-500">

    <div class="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
      <!-- Logo -->
      <div class="text-2xl font-black tracking-tighter text-on-surface font-headline">
        NHEB
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500">
          Panha
        </span>
      </div>
      <!-- Nav Links -->
      <div class="hidden md:flex gap-8 items-center">
        <a v-for="link in navLinks" :key="link.name" :href="link.href" :class="[
          'font-headline tracking-tight text-sm uppercase transition-colors',
          link.active
            ? 'text-cyan-500 border-b-2 border-cyan-500 pb-1'
            : 'text-slate-600 dark:text-slate-300 hover:text-cyan-500'
        ]">
          {{ link.name }}
        </a>
      </div>

      <!-- Right Actions -->
      <div class="flex items-center gap-4">
        <!-- 🌙 Dark Mode Toggle -->
        <button @click="toggleDark"
          class="transition-colors center">
          <span class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">
            {{ isDark ? 'light_mode' : 'dark_mode' }}
          </span>
        </button>
        <!-- Resume Button -->
        <button
          class="bg-primary text-on-primary px-6 py-2 font-headline text-sm uppercase tracking-widest rounded-lg hover:bg-primary-dim transition-all active:scale-95">
          Resume
        </button>
      </div>
    </div>

    <!-- Power Rail Accent -->
    <div class="h-[2px] w-full power-rail"></div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const navLinks = [
  { name: 'Hero', href: '#', active: true },
  { name: 'About', href: '#' },
  { name: 'Projects', href: '#' },
  { name: 'Experience', href: '#' },
  { name: 'Skills', href: '#' },
  { name: 'Contact', href: '#' }
];

const isDark = ref(false)

const toggleDark = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark')

  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')

  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  document.documentElement.classList.toggle('dark', isDark.value)
})
</script>

<style scoped>
/* ================= NAV GLASS ================= */
.glass-nav {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(12px);
}

.dark .glass-nav {
  background: rgba(10, 10, 10, 0.7);
}

/* ================= COLORS ================= */
.text-on-surface {
  color: #111;
}

.dark .text-on-surface {
  color: #f5f5f5;
}

.text-on-surface-variant {
  color: #666;
}

.dark .text-on-surface-variant {
  color: #bbb;
}

/* ================= BUTTON COLORS ================= */
.bg-primary {
  background: #811cd9;
}

.bg-primary-dim:hover {
  background: #6d16b8;
}

.text-on-primary {
  color: #fff;
}

/* ================= POWER LINE ================= */
.power-rail {
  background: linear-gradient(90deg, #811cd9, #00fbfb, #811cd9);
  animation: moveRail 3s linear infinite;
}

@keyframes moveRail {
  from {
    background-position: 0%;
  }

  to {
    background-position: 200%;
  }
}
</style>