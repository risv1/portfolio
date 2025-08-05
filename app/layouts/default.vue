<script setup>
const { createFireflyEffect, refreshParticles, isDark } = useFireflyParticles();

onMounted(async () => {
  await createFireflyEffect();
});

watch(isDark, async () => {
  await refreshParticles();
});
</script>

<template>
  <div class="min-h-screen w-full overflow-hidden bg-white dark:bg-black transition-colors duration-300 relative">
    <div id="tsparticles" class="absolute inset-0 pointer-events-none z-0"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></div>

    <div class="relative z-10">
      <Navbar />
      <main class="max-w-5xl container mx-auto w-full pr-10 md:pr-0">
        <slot />
      </main>
    </div>
  </div>
</template>
