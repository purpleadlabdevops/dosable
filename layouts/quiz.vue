<template>
  <div class="layout layout__quiz layout__quiz-bg">
    <Header class="header__quiz" />
    <svg class="layout__img" width="346" height="238" viewBox="0 0 346 238" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.15" d="M304.936 192.847L180.237 66.2652H165.763L41.0414 192.87L40.7876 0H0V281H15.7026L173.006 112.48L329.824 279.944L330.811 281H346V0H304.682L304.936 192.847Z" fill="#C7BDFF"/></svg>
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
.layout{
  &__quiz{
    background: rgba(255, 255, 255, 0);
    height: 100vh;
    position: relative;
    transition: 1s ease;
    overflow: hidden;
    @media(min-width:768px){
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 85px;
    }
    &-bg{
      background: #F5F1FF;
      .layout__img{
        opacity: 1;
        visibility: visible;
      }
    }
  }
  &__img{
    position: absolute;
    z-index: 1;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 65%;
    height: auto;
    visibility: hidden;
    opacity: 0;
    transition: 1s ease;
    @media(min-width:768px){
      bottom: -70px;
    }
  }
}
</style>