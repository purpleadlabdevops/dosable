<template>
  <div class="layout layout__soon">
    <slot />
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()

useHead({
  meta: [{ property: 'og:title', content: `${route.meta.title} | Fungaid` }]
})
</script>