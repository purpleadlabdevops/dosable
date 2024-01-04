<template>
  <div class="layout layout__account">
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

<style lang="scss">
.layout__account{
  min-height: calc(var(--vh, 1vh) * 100);
  padding-bottom: 165px;
  @media(min-width:768px){
    padding-bottom: 95px;
  }
  .footer{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>