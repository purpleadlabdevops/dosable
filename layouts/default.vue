<template>
  <div class="layout layout__default">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Dosable` : 'Dosable';
  }
})
</script>