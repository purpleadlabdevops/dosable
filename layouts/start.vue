<template>
  <div class="layout layout__start">
    <Header class="header__start" />
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

<style lang="scss" scoped>
.layout{

}
</style>