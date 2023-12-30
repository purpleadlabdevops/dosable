<template>
  <div class="layout layout__admin">
    <AdminHeader />
    <AdminSidebar />
    <slot />
  </div>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Dosable Admin Panel` : 'Dosable Admin Panel';
  }
})
</script>

<style lang="scss">
@import url("~/assets/styles/admin.scss");
</style>