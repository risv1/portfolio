<template>
  <div class="min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-300">
    <Navbar />
    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>
    <Footer />
  </div>
</template>