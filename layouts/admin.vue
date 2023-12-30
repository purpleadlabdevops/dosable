<template>
  <div class="layout layout__admin" :class="layoutClass">
    <AdminHeader />
    <AdminSidebar />
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

const layoutClass = ref('')

if(process.client){
  setTimeout(() => {
    globalStore.setWidth(window.innerWidth)
    window.addEventListener('resize', () => {
      globalStore.setWidth(window.innerWidth)
    })
    layoutClass.value = globalStore.width < 768 ? 'layout__admin-collapsed':''
  }, 0)
}
</script>

<style lang="scss">
@import url("~/assets/styles/admin.scss");
</style>