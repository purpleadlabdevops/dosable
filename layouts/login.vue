<template>
  <div class="layout layout__login">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '~/stores/global';
const globalStore = useGlobalStore()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Dosable Admin Panel` : 'Dosable Admin Panel';
  }
})
</script>

<style lang="scss">
.layout__login{
  padding: 2rem;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>