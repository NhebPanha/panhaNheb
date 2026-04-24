<template>
  <div class="bg-background text-on-background font-body min-h-screen transition-colors duration-500">
    <!-- Hero Section -->
    <main class="relative min-h-screen flex items-center overflow-hidden bg-grid-pattern pt-20">
      <!-- ✅ Animated Background Layers -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
      </div>
      <div class="particles"></div>
      <!-- Content -->
      <div class="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center color-black">

        <!-- Hero Content -->
        <div class="lg:col-span-7 z-10">
          <div
            class="inline-block bg-tertiary-container text-on-tertiary-container px-3 py-1 text-[10px] tracking-[0.2em] uppercase mb-6">
            Digital Craftsman // v2.0
          </div>

          <h1 class="text-6xl md:text-8xl font-black leading-[0.9] mb-8">
            NHEB
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500">
              Panha
            </span>
          </h1>

          <div class="flex items-center gap-4 mb-8">
            <div class="h-[1px] w-12 bg-outline-variant/30"></div>
            <p class="text-xl uppercase">
              Flutter Developer <span class="text-secondary mx-2">/</span> Full Stack Architect
            </p>
          </div>

          <p class="text-lg max-w-lg mb-12 leading-relaxed text-on-surface-variant">
            Architecting seamless mobile experiences and robust backends with high-fidelity precision.
          </p>

          <div class="flex flex-wrap gap-6">
            <button class="btn-primary">
              View My Work
            </button>

            <button class="btn-outline">
              Contact Me
            </button>
          </div>
        </div>
        <!-- Profile Image -->
        <div class="lg:col-span-5 relative flex justify-center lg:justify-end">
          <div class="relative w-80 h-80 md:w-96 md:h-96">

            <div class="ring ring-1"></div>
            <div class="ring ring-2"></div>

            <!-- Floating Tags -->
            <div class="tag left-tag">Dart Specialist</div>
            <div class="tag right-tag">Cloud Architect</div>

            <div class="profile-img">
              <img src="/image/panha_profile.png" class="object-cover" />
            </div>

          </div>
        </div>

      </div>

      <!-- Scroll Indicator -->
      <div class="scroll-indicator">
        <span>Initiate Scroll</span>
        <div></div>
      </div>

    </main>
  </div>
</template>

<!-- Light and Dark Theme Toggle -->
<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

const toggleDark = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark')

  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')

  if (savedTheme === 'dark') {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})
</script>

<style scoped>
/* ================= BACKGROUND ================= */
/* LIGHT MODE (default) */
.bg-grid-pattern {
  background-image:
    linear-gradient(to right, rgba(0, 0, 0, 0.06) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.06) 1px, transparent 1px);
  background-size: 40px 40px;
  animation: moveGrid 20s linear infinite;
}

/* DARK MODE */
.dark .bg-grid-pattern {
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px);
}

@keyframes moveGrid {
  from {
    background-position: 0 0;
  }

  to {
    background-position: 40px 40px;
  }
}

/* ================= BLOBS ================= */
.blob {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.4;
  animation: floatBlob 12s infinite ease-in-out alternate;
}

.blob-1 {
  background: #811cd9;
  top: -10%;
  right: -5%;
}

.blob-2 {
  background: #00fbfb;
  bottom: -10%;
  left: -5%;
  animation-delay: 4s;
}

@keyframes floatBlob {
  0% {
    transform: translate(0, 0) scale(1);
  }

  100% {
    transform: translate(-60px, 60px) scale(1.2);
  }
}

/* ================= PARTICLES ================= */

.particles {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(0, 251, 251, 0.4) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: particleMove 30s linear infinite;
  opacity: 0.2;
}

@keyframes particleMove {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-200px);
  }
}

/* ================= PROFILE ================= */

.profile-img {
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #111;
  position: relative;
  z-index: 10;
}

.ring {
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  border: 1px solid rgba(129, 28, 217, 0.2);
  animation: pulse 3s infinite;
}

.ring-2 {
  inset: -40px;
  border-color: rgba(0, 251, 251, 0.2);
  animation-delay: 1s;
}

@keyframes pulse {

  0%,
  100% {
    transform: scale(1);
    opacity: 0.6;
  }

  50% {
    transform: scale(1.05);
    opacity: 1;
  }
}

/* ================= TAGS ================= */

.tag {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 8px 12px;
  font-size: 10px;
  text-transform: uppercase;
}

.left-tag {
  top: 0;
  left: -20px;
  border-left: 4px solid #811cd9;
}

.right-tag {
  bottom: -5px;
  right: -20px;
  border-left: 4px solid #00fbfb;
}

/* ================= BUTTONS ================= */

.btn-primary {
  background: #811cd9;
  padding: 16px 28px;
  text-transform: uppercase;
  font-weight: bold;
  transition: 0.3s;
}

.btn-primary:hover {
  box-shadow: 0 0 20px rgba(129, 28, 217, 0.6);
}

.btn-outline {
  border: 1px solid #00fbfb;
  padding: 16px 28px;
  color: #00fbfb;
}

.btn-outline:hover {
  background: rgba(0, 251, 251, 0.1);
}

/* ================= SCROLL ================= */

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 10px;
  opacity: 0.5;
}

.scroll-indicator div {
  width: 1px;
  height: 40px;
  background: linear-gradient(#811cd9, transparent);
  margin: auto;
}

/* ================= HOVER EFFECT ================= */

main:hover .blob {
  filter: blur(150px);
  opacity: 0.6;
}
</style>