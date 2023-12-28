<template>
  <div class="layout layout__about">
    <Header />
    <slot />
    <HomeDeal />
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

<style lang="scss" scoped>
.layout__about{
  background: var(--dark-blue);
  position: relative;
  overflow: hidden;
  min-height: calc(var(--vh, 1vh) * 100);
}
</style>