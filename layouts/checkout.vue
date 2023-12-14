<template>
  <div class="layout layout__checkout">
    <Header class="header__checkout" />
    <slot />
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()

useHead({
  meta: [{ property: 'og:title', content: `${route.meta.title} | Fungaid` }]
})
</script>

<style lang="scss" scoped>
.layout__checkout{
  padding-top: 85px;
  position: relative;
}
</style>