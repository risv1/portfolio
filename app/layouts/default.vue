<template>
  <div class="min-h-screen w-full overflow-x-hidden bg-white dark:bg-black transition-colors duration-300">
    <Navbar />
    <main class="max-w-7xl container mx-auto px-4 py-8 w-full">
      <slot />
    </main>
    <Footer />
  </div>
</template>