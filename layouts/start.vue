<template>
  <div class="layout layout__start">
    <Header class="header__start" />
    <slot />
  </div>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Dosable` : 'Dosable';
  }
})
</script>
